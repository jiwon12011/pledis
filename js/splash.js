/* ================================================
   PLEDIS SPLASH — minimal logo + sparkle intro
   세션당 1회. 어두운 배경에 흰 워드마크가 떠오르고
   주황 별이 한 번 반짝인 뒤 페이드아웃.
   페이드 시작 시 'pledis:splashfade'를 쏘아
   히어로/헤더 GSAP 인트로와 크로스페이드된다.
================================================ */
(function () {
    'use strict';

    if (sessionStorage.getItem('splashShown')) return;
    sessionStorage.setItem('splashShown', '1');

    var LOGO_IN = 700, FADE = 650;
    var fadeStart = 1550;            // 워드마크·별이 안착하고 잠시 머문 뒤
    var done      = fadeStart + FADE + 80;

    var style = document.createElement('style');
    style.textContent =
        '#pledis-splash{position:fixed;inset:0;z-index:99999;' +
            'background:radial-gradient(120% 120% at 50% 45%,#1b1b1b 0%,#0b0b0b 70%);' +
            'display:flex;align-items:center;justify-content:center;' +
            'opacity:1;transition:opacity ' + FADE + 'ms ease;}' +
        '#pledis-splash .ps-wrap{display:flex;flex-direction:column;align-items:center;gap:20px;}' +
        '#pledis-splash .ps-star{width:30px;height:30px;opacity:0;' +
            'transform:scale(.3) rotate(-40deg);transform-origin:center;' +
            'filter:drop-shadow(0 0 9px rgba(255,70,0,.75));' +
            'animation:ps-pop 900ms cubic-bezier(.22,1,.36,1) forwards .45s,' +
            'ps-tw 2.6s ease-in-out 1.35s infinite;}' +
        '#pledis-splash .ps-logo{width:180px;max-width:48vw;display:block;' +
            'filter:brightness(0) invert(1);opacity:0;transform:translateY(16px);' +
            'animation:ps-rise ' + LOGO_IN + 'ms cubic-bezier(.22,1,.36,1) forwards .15s;}' +
        '@keyframes ps-rise{to{opacity:1;transform:translateY(0);}}' +
        '@keyframes ps-pop{0%{opacity:0;transform:scale(.3) rotate(-40deg);}' +
            '60%{opacity:1;transform:scale(1.18) rotate(10deg);}' +
            '100%{opacity:1;transform:scale(1) rotate(0);}}' +
        '@keyframes ps-tw{0%,100%{transform:scale(1) rotate(0);opacity:.9;}' +
            '50%{transform:scale(1.16) rotate(16deg);opacity:1;}}' +
        '@media (prefers-reduced-motion: reduce){' +
            '#pledis-splash .ps-star,#pledis-splash .ps-logo{animation:none;opacity:1;transform:none;}}';
    document.head.appendChild(style);

    var ov = document.createElement('div');
    ov.id = 'pledis-splash';
    ov.innerHTML =
        '<div class="ps-wrap">' +
            '<svg class="ps-star" viewBox="0 0 64 64" aria-hidden="true">' +
                '<path fill="#FF4600" d="M32 4 L35 29 L60 32 L35 35 L32 60 L29 35 L4 32 L29 29 Z"/>' +
            '</svg>' +
            '<img class="ps-logo" src="img/logo_up.png" alt="Pledis">' +
        '</div>';

    document.body.style.overflow = 'hidden';
    document.body.insertBefore(ov, document.body.firstChild);

    setTimeout(function () {
        ov.style.opacity = '0';
        window.dispatchEvent(new CustomEvent('pledis:splashfade'));
    }, fadeStart);

    setTimeout(function () {
        if (ov.parentNode) ov.parentNode.removeChild(ov);
        if (style.parentNode) style.parentNode.removeChild(style);
        document.body.style.overflow = '';
    }, done);
}());
