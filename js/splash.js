/* ================================================
   PLEDIS SPLASH — star arc intro animation
================================================ */
(function () {
    'use strict';

    if (sessionStorage.getItem('splashShown')) return;
    sessionStorage.setItem('splashShown', '1');

    /* ── Overlay ─────────────────────────────────── */
    const ov = document.createElement('div');
    ov.id = 'pledis-splash';
    Object.assign(ov.style, {
        position:   'fixed',
        inset:      '0',
        zIndex:     '99999',
        background: '#0f0f0f',
        transition: 'opacity 0.8s ease',
        pointerEvents: 'all'
    });

    const cvs = document.createElement('canvas');
    Object.assign(cvs.style, {
        position: 'absolute',
        inset:    '0',
        width:    '100%',
        height:   '100%'
    });
    ov.appendChild(cvs);

    document.body.style.overflow = 'hidden';
    document.body.insertBefore(ov, document.body.firstChild);

    const ctx = cvs.getContext('2d');
    let W, H;
    function resize() {
        W = cvs.width  = window.innerWidth;
        H = cvs.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    /* ── Timing (ms) ────────────────────────────── */
    const T = {
        s1In:      320,
        arcStart:  180,
        arcEnd:   1200,
        s2In:     1450,
        fadeStart:1560,
        done:     2400
    };

    /* ── Layout helpers ──────────────────────────── */
    function CY() { return H / 2; }
    function CX() { return W / 2; }
    function R()  { return Math.min(Math.max(W * 0.08, 60), 200); }

    const pos = {
        s1:  () => ({ x: CX() - R(),          y: CY() + R() * 0.43 }),
        s2:  () => ({ x: CX() + R(),          y: CY() - R() * 0.43 }),
        cp1: () => ({ x: CX() - R() * 0.80,   y: CY() - R() * 0.37 }),
        cp2: () => ({ x: CX() + R() * 0.33,   y: CY() - R() * 0.60 })
    };

    /* ── Easing ──────────────────────────────────── */
    function easeOut(t)   { return 1 - Math.pow(1 - t, 3); }
    function easeInOut(t) { return t < 0.5 ? 2*t*t : -1 + (4 - 2*t)*t; }
    function prog(e, a, b){ return Math.min(1, Math.max(0, (e - a) / (b - a))); }

    /* ── Cubic bezier ────────────────────────────── */
    function bez(t, p0, p1, p2, p3) {
        const u = 1 - t;
        return {
            x: u*u*u*p0.x + 3*u*u*t*p1.x + 3*u*t*t*p2.x + t*t*t*p3.x,
            y: u*u*u*p0.y + 3*u*u*t*p1.y + 3*u*t*t*p2.y + t*t*t*p3.y
        };
    }

    /* ── Draw arc ────────────────────────────────── */
    function drawArc(p, alpha) {
        if (p <= 0 || alpha <= 0) return;
        const P0 = pos.s1(), P1 = pos.cp1(), P2 = pos.cp2(), P3 = pos.s2();
        const N = 120, n = Math.max(1, Math.round(p * N));

        function path() {
            ctx.beginPath();
            let pt = bez(0, P0, P1, P2, P3);
            ctx.moveTo(pt.x, pt.y);
            for (let i = 1; i <= n; i++) {
                pt = bez(i / N, P0, P1, P2, P3);
                ctx.lineTo(pt.x, pt.y);
            }
        }

        const s = R() / 60;
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        ctx.filter      = `blur(${(6 * s).toFixed(1)}px)`;
        ctx.strokeStyle = 'rgba(255,70,0,0.55)';
        ctx.lineWidth   = 6 * s;
        path(); ctx.stroke();

        ctx.filter      = `blur(${(2 * s).toFixed(1)}px)`;
        ctx.strokeStyle = 'rgba(255,130,50,0.6)';
        ctx.lineWidth   = 2 * s;
        path(); ctx.stroke();

        ctx.filter      = 'none';
        ctx.strokeStyle = 'rgba(255,255,255,0.96)';
        ctx.lineWidth   = Math.max(1, s);
        path(); ctx.stroke();

        ctx.restore();
    }

    /* ── Draw 4-pointed sparkle star ─────────────── */
    function drawStar(x, y, size, alpha, glowR) {
        if (alpha <= 0 || size <= 0) return;
        ctx.save();
        ctx.globalAlpha = alpha;

        const g = ctx.createRadialGradient(x, y, 0, x, y, glowR);
        g.addColorStop(0,    'rgba(255,255,255,0.95)');
        g.addColorStop(0.12, 'rgba(255,180,80,0.7)');
        g.addColorStop(0.35, 'rgba(255,70,0,0.3)');
        g.addColorStop(1,    'rgba(255,50,0,0)');
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(x, y, glowR, 0, Math.PI * 2);
        ctx.fill();

        ctx.shadowColor = 'rgba(255,100,20,0.95)';
        ctx.shadowBlur  = size * 1.8;
        ctx.fillStyle   = '#ffffff';
        ctx.beginPath();
        for (let i = 0; i < 8; i++) {
            const a  = (i * Math.PI) / 4 - Math.PI / 2;
            const r  = (i % 2 === 0) ? size : size * 0.09;
            const px = x + Math.cos(a) * r;
            const py = y + Math.sin(a) * r;
            i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.fill();

        ctx.restore();
    }

    /* ── Animation loop ─────────────────────────── */
    let t0 = null, fading = false;

    function frame(ts) {
        if (!t0) t0 = ts;
        const e = ts - t0;

        ctx.clearRect(0, 0, W, H);

        /* background */
        const bg = ctx.createRadialGradient(CX(), CY(), 0, CX(), CY(), R() * 3.7);
        bg.addColorStop(0, '#1e1e1e');
        bg.addColorStop(1, '#0a0a0a');
        ctx.fillStyle = bg;
        ctx.fillRect(0, 0, W, H);

        /* logo + left star fade in together */
        const a1 = easeOut(prog(e, 0, T.s1In));

        /* arc draws */
        const arcP = easeInOut(prog(e, T.arcStart, T.arcEnd));

        /* right star burst */
        const sr = R() / 60;
        let a2 = 0, sz2 = 0;
        if (e > T.arcEnd) {
            const t = prog(e, T.arcEnd, T.s2In);
            a2  = easeOut(Math.min(1, t * 1.9));
            sz2 = (5 + easeOut(Math.min(1, t)) * 7) * sr;
        }

        drawArc(arcP, a1);
        drawStar(pos.s1().x, pos.s1().y, 4 * sr,  a1, 22 * sr);
        if (a2 > 0) drawStar(pos.s2().x, pos.s2().y, sz2, a2, 44 * sr);

        if (e >= T.fadeStart && !fading) {
            fading = true;
            ov.style.opacity = '0';
        }

        if (e < T.done) {
            requestAnimationFrame(frame);
        } else {
            ov.remove();
            document.body.style.overflow = '';
            window.removeEventListener('resize', resize);
        }
    }

    requestAnimationFrame(frame);
}());
