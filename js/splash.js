/* ================================================
   PLEDIS SPLASH — star arc intro animation
================================================ */
(function () {
    'use strict';

    /* ── Overlay ─────────────────────────────────── */
    const ov = document.createElement('div');
    ov.id = 'pledis-splash';
    Object.assign(ov.style, {
        position:   'fixed',
        inset:      '0',
        zIndex:     '99999',
        background: '#0f0f0f',
        transition: 'opacity 0.75s ease',
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
    /* insert before everything so it's on top */
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
        s1In:      180,   // left star fully in
        arcStart:  100,   // arc starts drawing
        arcEnd:    720,   // arc fully drawn
        s2In:      920,   // right star at sparkle peak
        fadeStart: 980,   // CSS fade begins
        done:     1550    // cleanup
    };

    /* ── Positions (viewport ratio) ─────────────── */
    const pos = {
        s1:  () => ({ x: 0.20 * W, y: 0.63 * H }),
        s2:  () => ({ x: 0.76 * W, y: 0.35 * H }),
        cp1: () => ({ x: 0.22 * W, y: 0.26 * H }),
        cp2: () => ({ x: 0.63 * W, y: 0.30 * H })
    };

    /* ── Easing ──────────────────────────────────── */
    function easeOut(t)   { return 1 - Math.pow(1 - t, 3); }
    function easeInOut(t) { return t < 0.5 ? 2*t*t : -1 + (4 - 2*t)*t; }
    function prog(e, a, b){ return Math.min(1, Math.max(0, (e - a) / (b - a))); }

    /* ── Cubic bezier point ──────────────────────── */
    function bez(t, p0, p1, p2, p3) {
        const u = 1 - t;
        return {
            x: u*u*u*p0.x + 3*u*u*t*p1.x + 3*u*t*t*p2.x + t*t*t*p3.x,
            y: u*u*u*p0.y + 3*u*u*t*p1.y + 3*u*t*t*p2.y + t*t*t*p3.y
        };
    }

    /* ── Draw arc up to progress p (0 → 1) ──────── */
    function drawArc(p, alpha) {
        if (p <= 0 || alpha <= 0) return;
        const P0 = pos.s1(), P1 = pos.cp1(), P2 = pos.cp2(), P3 = pos.s2();
        const N  = 120;
        const n  = Math.max(1, Math.round(p * N));

        function path() {
            ctx.beginPath();
            let pt = bez(0, P0, P1, P2, P3);
            ctx.moveTo(pt.x, pt.y);
            for (let i = 1; i <= n; i++) {
                pt = bez(i / N, P0, P1, P2, P3);
                ctx.lineTo(pt.x, pt.y);
            }
        }

        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.lineCap    = 'round';
        ctx.lineJoin   = 'round';

        /* wide orange-red glow */
        ctx.filter      = 'blur(6px)';
        ctx.strokeStyle = 'rgba(255,70,0,0.55)';
        ctx.lineWidth   = 6;
        path(); ctx.stroke();

        /* inner warm glow */
        ctx.filter      = 'blur(2px)';
        ctx.strokeStyle = 'rgba(255,130,50,0.6)';
        ctx.lineWidth   = 2;
        path(); ctx.stroke();

        /* crisp white core */
        ctx.filter      = 'none';
        ctx.strokeStyle = 'rgba(255,255,255,0.96)';
        ctx.lineWidth   = 1.0;
        path(); ctx.stroke();

        ctx.restore();
    }

    /* ── Draw 4-pointed sparkle star ─────────────── */
    function drawStar(x, y, size, alpha, glowR) {
        if (alpha <= 0 || size <= 0) return;
        ctx.save();
        ctx.globalAlpha = alpha;

        /* orange→transparent glow halo */
        const g = ctx.createRadialGradient(x, y, 0, x, y, glowR);
        g.addColorStop(0,    'rgba(255,255,255,0.95)');
        g.addColorStop(0.12, 'rgba(255,180,80,0.7)');
        g.addColorStop(0.35, 'rgba(255,70,0,0.3)');
        g.addColorStop(1,    'rgba(255,50,0,0)');
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(x, y, glowR, 0, Math.PI * 2);
        ctx.fill();

        /* 4-pointed star polygon */
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

        /* dark background with subtle centre glow */
        const bg = ctx.createRadialGradient(W * 0.46, H * 0.47, 0, W * 0.5, H * 0.5, W * 0.75);
        bg.addColorStop(0, '#1c1c1c');
        bg.addColorStop(1, '#0a0a0a');
        ctx.fillStyle = bg;
        ctx.fillRect(0, 0, W, H);

        /* left star — fades in first */
        const a1   = easeOut(prog(e, 0, T.s1In));

        /* arc — draws after a short delay */
        const arcP = easeInOut(prog(e, T.arcStart, T.arcEnd));

        /* right star — bursts in at arc end */
        let a2 = 0, sz2 = 0;
        if (e > T.arcEnd) {
            const t = prog(e, T.arcEnd, T.s2In);
            a2  = easeOut(Math.min(1, t * 1.9)); // fast alpha
            sz2 = 5 + easeOut(Math.min(1, t)) * 7;   // 5 → 12
        }

        drawArc(arcP, a1);
        drawStar(pos.s1().x, pos.s1().y,  4, a1, 22);
        if (a2 > 0) drawStar(pos.s2().x, pos.s2().y, sz2, a2, 44);

        /* trigger CSS fade-out */
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
