/* ================================================
   PLEDIS SPLASH — TYPE STAMP (에디토리얼 인트로)
   세션당 1회. 밝은 화면(#fefefe)에 "PLEDIS ENTERTAINMENT"가
   한 글자씩 찍히고 → 워드마크가 안착 → EST. 2007 →
   '라이트아웃'으로 화면이 어두워진 직후 'pledis:splashfade'를 쏘아
   어두운 히어로 비디오와 자연스럽게 크로스페이드된다.
   (빛 → 어둠 역방향 전환 = 럭셔리 하우스 감각)

   ── script.js 와의 계약(반드시 유지) ──
   · 오버레이 id = 'pledis-splash'
   · sessionStorage 키 = 'splashShown'
   · 페이드 시작 시 window 에 'pledis:splashfade' 디스패치 (2400ms 폴백 이전)
   · body.overflow 잠금 → 정리 시 복원
   · 종료 시 오버레이 + style 제거
================================================ */
(function () {
    'use strict';

    if (sessionStorage.getItem('splashShown')) return;
    sessionStorage.setItem('splashShown', '1');

    var reduce = window.matchMedia &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    var FADE = 650;

    var style = document.createElement('style');
    style.textContent =
        '#pledis-splash{position:fixed;inset:0;z-index:99999;' +
            'display:flex;align-items:center;justify-content:center;' +
            'background:#fefefe;opacity:1;transition:opacity ' + FADE + 'ms ease;}' +
        '#pledis-splash .ps-wrap{position:relative;display:flex;flex-direction:column;' +
            'align-items:center;gap:18px;z-index:1;}' +
        '#pledis-splash .ps-type{font-family:"Pretendard","맑은 고딕",sans-serif;' +
            'font-weight:300;letter-spacing:.42em;font-size:clamp(15px,3.4vw,30px);' +
            'color:#111;white-space:nowrap;overflow:hidden;width:0;' +
            'padding-left:.42em;}' +          /* 마지막 글자 자간 클리핑 방지 */
        '#pledis-splash .ps-logo{width:180px;max-width:48vw;display:block;' +
            'filter:brightness(0);opacity:0;transform:translateY(8px);}' +
        '#pledis-splash .ps-est{font-family:"Pretendard","맑은 고딕",sans-serif;' +
            'font-size:12px;font-weight:400;letter-spacing:.34em;color:#9a9a9a;opacity:0;}' +
        '#pledis-splash .ps-blackout{position:absolute;inset:0;z-index:0;opacity:0;' +
            'pointer-events:none;' +
            'background:radial-gradient(120% 120% at 50% 45%,#1b1b1b 0%,#0b0b0b 70%);}';
    document.head.appendChild(style);

    var ov = document.createElement('div');
    ov.id = 'pledis-splash';
    ov.innerHTML =
        '<div class="ps-blackout"></div>' +
        '<div class="ps-wrap">' +
            '<div class="ps-type">PLEDIS ENTERTAINMENT</div>' +
            '<img class="ps-logo" src="img/logo_up.png" alt="Pledis">' +
            '<div class="ps-est">EST. 2007</div>' +
        '</div>';

    document.body.style.overflow = 'hidden';
    document.body.insertBefore(ov, document.body.firstChild);

    var typeEl  = ov.querySelector('.ps-type');
    var logoEl  = ov.querySelector('.ps-logo');
    var estEl   = ov.querySelector('.ps-est');
    var blackEl = ov.querySelector('.ps-blackout');

    function finish(fadeStart) {
        setTimeout(function () {
            ov.style.opacity = '0';
            window.dispatchEvent(new CustomEvent('pledis:splashfade'));
        }, fadeStart);
        setTimeout(function () {
            if (ov.parentNode)    ov.parentNode.removeChild(ov);
            if (style.parentNode) style.parentNode.removeChild(style);
            document.body.style.overflow = '';
        }, fadeStart + FADE + 80);
    }

    /* 모션 최소화 — 타이핑/이동 없이 어두운 최종 상태만 잠깐 보여주고 크로스페이드 */
    if (reduce) {
        typeEl.style.display = 'none';
        blackEl.style.opacity = '1';
        logoEl.style.filter = 'brightness(0) invert(1)';   /* 어둠 위 흰 로고 */
        logoEl.style.opacity = '1';
        logoEl.style.transform = 'none';
        finish(700);
        return;
    }

    /* 1) 타이핑 — 한 글자씩 찍히듯 */
    typeEl.animate(
        [{ width: '0' }, { width: (typeEl.scrollWidth + 4) + 'px' }],
        { duration: 900, delay: 120, fill: 'forwards', easing: 'steps(20,end)' }
    );

    /* 2) 텍스트가 사라지며 검정 워드마크가 떠오른다 */
    setTimeout(function () {
        typeEl.animate([{ opacity: 1 }, { opacity: 0 }],
            { duration: 280, fill: 'forwards', easing: 'ease-out' });
        logoEl.animate(
            [{ opacity: 0, transform: 'translateY(8px)' },
             { opacity: 1, transform: 'translateY(0)' }],
            { duration: 520, delay: 100, fill: 'forwards', easing: 'cubic-bezier(.22,1,.36,1)' });
    }, 1020);

    /* 3) EST. 2007 */
    setTimeout(function () {
        estEl.animate([{ opacity: 0 }, { opacity: 1 }],
            { duration: 360, fill: 'forwards', easing: 'ease-out' });
    }, 1380);

    /* 4) 라이트아웃 — 흰 화면이 어둠으로. 로고는 흰색으로 반전되며 어둠 속에 남는다 */
    setTimeout(function () {
        blackEl.animate([{ opacity: 0 }, { opacity: 1 }],
            { duration: 460, fill: 'forwards', easing: 'ease-in' });
        logoEl.animate(
            [{ filter: 'brightness(0)' }, { filter: 'brightness(0) invert(1)' }],
            { duration: 460, fill: 'forwards', easing: 'ease-in' });
        estEl.animate([{ opacity: 1 }, { opacity: 0 }],
            { duration: 260, fill: 'forwards' });
    }, 1650);

    /* 5) 어두워진 직후 크로스페이드 (2400ms 폴백 이전) */
    finish(2110);
}());
