/* ================================================
   PLEDIS SPLASH — LOCKUP intro
   세션당 1회. 다크 배경에 PLEDIS 로고가 떠올라 작게 안착하고,
   그 아래로 'ENTERTAINMENT'가 한 글자씩 주황으로 찍히며 락업 완성.
   페이드 시작 시 'pledis:splashfade'를 쏘아
   히어로/헤더 GSAP 인트로와 크로스페이드된다.
================================================ */
(function () {
    'use strict';

    if (sessionStorage.getItem('splashShown')) return;
    sessionStorage.setItem('splashShown', '1');

    var reduce = window.matchMedia &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    var WORD = 'ENTERTAINMENT';
    var TYPE_START = 1150, STEP = 55;            // 타이핑 시작 / 글자 간격(ms)
    var typeEnd = TYPE_START + WORD.length * STEP;   // ≈1865: 마지막 글자 진입
    var RULE_DUR = 520;                          // 밑줄 그려지는 시간
    var ruleDelay = typeEnd + 120;               // 밑줄 시작 ≈1985
    var FADE = 600;
    // 밑줄이 '끝까지' 그려진 뒤(ruleDelay+RULE_DUR) 잠깐 머물고 페이드 → 락업 완성을 보여줌.
    // script.js 히어로 인트로 폴백(2900ms)보다 앞서야 이벤트가 크로스페이드를 주도한다.
    var fadeStart = reduce ? 700 : (ruleDelay + RULE_DUR + 180);   // ≈2705
    var done = fadeStart + FADE + 80;

    var style = document.createElement('style');
    style.textContent =
        '#pledis-splash{position:fixed;inset:0;z-index:99999;display:grid;place-items:center;' +
            'background:radial-gradient(125% 125% at 50% 42%,#191919 0%,#0a0a0a 74%);' +
            'opacity:1;transition:opacity ' + FADE + 'ms ease;}' +
        '#pledis-splash .ps-seq{display:flex;flex-direction:column;align-items:center;gap:18px;' +
            'width:min(680px,90vw);}' +
        '#pledis-splash .ps-logo{width:230px;max-width:56vw;filter:brightness(0) invert(1);' +
            'opacity:0;transform:translateY(16px) scale(1.04);' +
            'animation:ps-logo-in .8s cubic-bezier(.22,1,.36,1) forwards .15s,' +
            'ps-logo-settle .7s cubic-bezier(.6,0,.2,1) forwards 1.05s;}' +
        '@keyframes ps-logo-in{to{opacity:1;transform:translateY(0) scale(1);}}' +
        '@keyframes ps-logo-settle{to{transform:translateY(0) scale(.8);}}' +
        '#pledis-splash .ps-word{display:flex;flex-wrap:wrap;justify-content:center;align-items:center;' +
            'font-size:clamp(13px,2.7vw,24px);font-weight:600;letter-spacing:.42em;text-indent:.42em;' +
            'color:#e8704a;line-height:1.2;min-height:1.4em;}' +
        '#pledis-splash .ps-ch{display:inline-block;opacity:0;transform:translateY(8px);filter:blur(2px);' +
            'animation:ps-ch-in .45s cubic-bezier(.22,1,.36,1) forwards;}' +
        '@keyframes ps-ch-in{to{opacity:1;transform:translateY(0);filter:blur(0);}}' +
        '#pledis-splash .ps-caret{display:inline-block;width:2px;height:1em;background:#e8704a;' +
            'margin-left:6px;align-self:center;opacity:0;' +
            'animation:ps-caret-on .01s forwards ' + typeEnd + 'ms,' +
            'ps-blink .9s steps(1) infinite ' + typeEnd + 'ms;}' +
        '@keyframes ps-caret-on{to{opacity:1;}}' +
        '@keyframes ps-blink{50%{opacity:0;}}' +
        '#pledis-splash .ps-rule{height:1px;width:min(360px,70vw);' +
            'transform:scaleX(0);transform-origin:center;' +
            'background:linear-gradient(90deg,transparent,#e8704a 50%,transparent);' +
            'animation:ps-rule-in ' + RULE_DUR + 'ms cubic-bezier(.4,0,.2,1) forwards ' + ruleDelay + 'ms;}' +
        '@keyframes ps-rule-in{to{transform:scaleX(1);}}' +
        '@media (prefers-reduced-motion: reduce){' +
            '#pledis-splash .ps-logo{transform:scale(.8)!important;opacity:1!important;animation:none!important;}' +
            '#pledis-splash .ps-ch{opacity:1!important;transform:none!important;filter:none!important;animation:none!important;}' +
            '#pledis-splash .ps-rule{transform:scaleX(1)!important;animation:none!important;}' +
            '#pledis-splash .ps-caret{display:none;}}';
    document.head.appendChild(style);

    var ov = document.createElement('div');
    ov.id = 'pledis-splash';

    var letters = '';
    for (var i = 0; i < WORD.length; i++) {
        var d = TYPE_START + i * STEP;
        letters += '<span class="ps-ch" style="animation-delay:' + d + 'ms">' + WORD.charAt(i) + '</span>';
    }
    ov.innerHTML =
        '<div class="ps-seq">' +
            '<img class="ps-logo" src="img/logo_up.png" alt="PLEDIS">' +
            '<div class="ps-word" role="img" aria-label="PLEDIS ENTERTAINMENT">' + letters +
                '<span class="ps-caret" aria-hidden="true"></span>' +
            '</div>' +
            '<span class="ps-rule" aria-hidden="true"></span>' +
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
