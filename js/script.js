/* ── Lenis 스무스 스크롤 ── */
var lenis;
if(typeof Lenis !== 'undefined'){
    lenis = new Lenis({
        duration: 1.2,
        easing: function(t){ return Math.min(1, 1.001 - Math.pow(2, -10 * t)); },
        smooth: true
    });
    (function lenisRaf(time){
        lenis.raf(time);
        requestAnimationFrame(lenisRaf);
    })(0);
}


/* ── GSAP 진입 모션 ──
   스크롤 미사용. 헤더/히어로 래퍼만 1회 등장시켜
   패럴랙스(.hero video), IntersectionObserver(.fade-up),
   스파크/슬라이더 등 기존 시스템과 충돌하지 않음. */
if(typeof gsap !== 'undefined'){
    var heroEl    = document.querySelector('.hero');
    var logoEl    = document.querySelector('header .logo');
    var navItems  = document.querySelectorAll('header .nav li');
    var langItems = document.querySelectorAll('header .lang li');
    var burgerEl  = document.querySelector('.hamburger');
    var topItems  = [].slice.call(langItems).concat(burgerEl ? [burgerEl] : []);

    // 초기 상태 (FOUC 방지) — opacity/transform만 건드림(색·배경은 .scrolled가 담당)
    if(heroEl)          gsap.set(heroEl,   { autoAlpha: 0, scale: 1.06 });
    if(logoEl)          gsap.set(logoEl,   { autoAlpha: 0, y: -18 });
    if(navItems.length) gsap.set(navItems, { autoAlpha: 0, y: -14 });
    if(topItems.length) gsap.set(topItems, { autoAlpha: 0, y: -14 });

    // 멈춰둔 타임라인 — 트리거에서 재생
    var introTl = gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } });
    if(heroEl)          introTl.to(heroEl,  { autoAlpha: 1, scale: 1, duration: 1.4 }, 0);
    if(logoEl)          introTl.to(logoEl,  { autoAlpha: 1, y: 0, duration: 0.8 }, 0.1);
    if(navItems.length) introTl.to(navItems, { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.08 }, 0.25);
    if(topItems.length) introTl.to(topItems, { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.06 }, 0.45);

    // 스플래시가 덮고 있으면 그 페이드 시작에 맞춰 히어로를 드러내 크로스페이드.
    // 스플래시가 없으면(2번째 방문 등) 짧은 딜레이 후 바로 재생.
    var splashActive = !!document.getElementById('pledis-splash');
    if(splashActive){
        var played = false;
        var playIntro = function(){
            if(played) return; played = true;
            introTl.play(0);
        };
        window.addEventListener('pledis:splashfade', playIntro, { once: true });
        setTimeout(playIntro, 2400);   // 이벤트 미수신 대비 안전 폴백
    } else {
        gsap.delayedCall(0.15, function(){ introTl.play(0); });
    }
}

/* ── 패럴랙스 ── */
(function(){
    var heroVideo = document.querySelector('.hero video');
    function onScroll(){
        var sy = window.scrollY || window.pageYOffset;
        if(heroVideo) heroVideo.style.transform = 'translateY(' + (sy * 0.38) + 'px)';
    }
    window.addEventListener('scroll', onScroll, { passive: true });
})();

/* ── 다국어 번역 ── */
const i18n = {
    KOR: {
        who_desc: '플레디스는 탁월한 감각과 노하우를 겸합하여 아티스트의 고유한 가치를 발견하고 창출합니다.<br>창의적인 음악 콘텐츠를 통해 글로벌 엔터테인먼트 시장을 이끄는 종합 매니지먼트사입니다.',
        footer_company: '플레디스 엔터테인먼트',
        footer_addr: '서울특별시 용산구 한강대로 42',
        footer_biz: '사업자 등록 번호 ㅣ 211-88-46472',
        artist_sub: '플레디스 유니버스를 빛내는 별들',
        artist_drag: '드래그하여 더 보기',
        visit_site: 'VISIT OFFICIAL SITE ↗',
        join_pledis: 'JOIN PLEDIS ENTERTAINMENT',
        mv_sub: '플레디스의 역동적인 순간과 끝없는 리듬',
        album_sub: '우리의 음악 여정을 담은 기록',
        aud_strong: '플레디스 은하계의 다음 주인공은 바로 당신입니다.',
        aud_desc: '글로벌 탤런트 서치 2026. 서울 & 전 세계.<br>세계의 맥박이 될 차세대 퍼포머를 찾습니다.<br>보컬, 댄스, 랩, 연기. 당신의 무대가 여기서 시작됩니다.',
        hist_2024: '5세대 보이그룹 TWS(투어스) 데뷔',
        hist_2023: "세븐틴(SEVENTEEN), MAMA '올해의 앨범상' 대상 수상",
        hist_2021: '프로미스나인(fromis_9) 플레디스 합류',
        hist_2020: '하이브(HYBE) 레이블 합류 및 글로벌 네트워크 확장',
        hist_2018: 'Pledis Japan 및 XCSS Entertainment (중국) 설립',
        hist_2016: '걸그룹 프리스틴(PRISTIN) 데뷔',
        hist_2015: '세븐틴(SEVENTEEN) 데뷔 (자체 제작 시스템 도입)',
        hist_2012: "걸그룹 헬로비너스(HELLOVENUS) 데뷔<br>첫 보이그룹 뉴이스트(NU'EST) 데뷔",
        hist_2011: '애프터스쿨 유닛(레드/블루) 체제 도입',
        hist_2010: "패밀리신 자선 캠벌 'Happy Pledis 1st Album' 발매<br>주식회사 플레디스 엔터테인먼트 법인 공식 설립",
        hist_2009: '걸그룹 애프터스쿨(After School) 정식 데뷔',
        hist_2007: '플레디스 엔터테인먼트 설립 및 첫 아티스트 손담비 데뷔'
    },
    ENG: {
        who_desc: 'Pledis discovers and creates the unique value of artists with outstanding sensibility and know-how.<br>We are a comprehensive management company leading the global entertainment market through creative music content.',
        footer_company: 'Pledis Entertainment',
        footer_addr: '42 Hangang-daero, Yongsan-gu, Seoul',
        footer_biz: 'Business Reg. No. 211-88-46472',
        artist_sub: 'The shining stars of the Pledis universe',
        artist_drag: 'Drag to explore',
        visit_site: 'VISIT OFFICIAL SITE ↗',
        join_pledis: 'JOIN PLEDIS ENTERTAINMENT',
        mv_sub: 'Unveiling the dynamic moments and endless rhythm',
        album_sub: 'The physical records of our musical journey',
        aud_strong: 'You are the next star of the Pledis universe.',
        aud_desc: 'Global Talent Search 2026. Seoul & Worldwide.<br>Seeking the next generation of performers who will become the pulse of the world.<br>Vocals, Dance, Rap, Acting. Your stage begins here.',
        hist_2024: '5th-gen boy group TWS debut',
        hist_2023: 'SEVENTEEN wins Album of the Year at MAMA',
        hist_2021: 'fromis_9 joins Pledis Entertainment',
        hist_2020: 'Joined HYBE Labels & expanded global network',
        hist_2018: 'Pledis Japan & XCSS Entertainment (China) established',
        hist_2016: 'Girl group PRISTIN debuts',
        hist_2015: 'SEVENTEEN debuts (self-produced system introduced)',
        hist_2012: "Girl group HELLOVENUS debuts<br>First boy group NU'EST debuts",
        hist_2011: 'After School unit (RED/BLUE) system introduced',
        hist_2010: "Charity album 'Happy Pledis 1st Album' released<br>Pledis Entertainment officially incorporated",
        hist_2009: 'Girl group After School officially debuts',
        hist_2007: 'Pledis Entertainment founded & first artist Son Dam-bi debuts'
    },
    JPN: {
        who_desc: 'プレディスは優れたセンスとノウハウで、アーティスト固有の価値を発見・創出します。<br>創造的な音楽コンテンツでグローバルエンタメ市場をリードする総合マネジメント会社です。',
        footer_company: 'プレディスエンターテインメント',
        footer_addr: 'ソウル特別市龍山区漢江大路42',
        footer_biz: '法人番号 211-88-46472',
        artist_sub: 'プレディスユニバースを輝かせるスターたち',
        artist_drag: 'ドラッグしてもっと見る',
        visit_site: '公式サイトへ ↗',
        join_pledis: 'プレディスに参加する',
        mv_sub: 'プレディスのダイナミックな瞬間と果てしないリズム',
        album_sub: '私たちの音楽の旅を記録したアルバム',
        aud_strong: 'プレディスギャラクシーの次の主役はあなたです。',
        aud_desc: 'グローバルタレントサーチ2026。ソウル＆ワールドワイド。<br>世界の鼓動となる次世代パフォーマーを求めています。<br>ボーカル、ダンス、ラップ、演技。あなたのステージはここから始まります。',
        hist_2024: '第5世代ボーイグループTWSデビュー',
        hist_2023: 'SEVENTEENがMAMAにて年間アルバム大賞を受賞',
        hist_2021: 'fromis_9がプレディスに合流',
        hist_2020: 'HYBEレーベルに参加、グローバルネットワークを拡大',
        hist_2018: 'Pledis Japan・XCSS Entertainment（中国）設立',
        hist_2016: 'ガールグループPRISTINデビュー',
        hist_2015: 'SEVENTEENデビュー（自主制作システム導入）',
        hist_2012: "ガールグループHELLOVENUSデビュー<br>初ボーイグループNU'ESTデビュー",
        hist_2011: 'アフタースクールユニット（RED/BLUE）体制導入',
        hist_2010: "チャリティアルバム'Happy Pledis 1st Album'発売<br>プレディスエンターテインメント法人設立",
        hist_2009: 'ガールグループAfter School正式デビュー',
        hist_2007: 'プレディスエンターテインメント設立・初アーティストソン・ダムビデビュー'
    },
    CHN: {
        who_desc: 'Pledis凭借卓越审美与专业积累，致力于发掘并创造艺人的独特价值。<br>我们是以创意音乐内容引领全球娱乐市场的综合经纪公司。',
        footer_company: '普丽迪丝娱乐',
        footer_addr: '首尔特别市龙山区汉江大路42',
        footer_biz: '营业执照号 211-88-46472',
        artist_sub: '照亮Pledis宇宙的闪耀之星',
        artist_drag: '拖动查看更多',
        visit_site: '访问官方网站 ↗',
        join_pledis: '加入Pledis娱乐',
        mv_sub: '揭开Pledis动感时刻与无尽节奏的面纱',
        album_sub: '记录我们音乐旅程的实体专辑',
        aud_strong: '你就是下一位Pledis星系的主角。',
        aud_desc: '全球才艺搜索2026。首尔及全球。<br>寻找将成为世界脉搏的下一代表演者。<br>声乐、舞蹈、说唱、演技。你的舞台从这里开始。',
        hist_2024: '第五代男团TWS出道',
        hist_2023: 'SEVENTEEN荣获MAMA年度专辑大奖',
        hist_2021: 'fromis_9加入Pledis娱乐',
        hist_2020: '加入HYBE厂牌，扩展全球网络',
        hist_2018: '成立Pledis Japan及XCSS Entertainment（中国）',
        hist_2016: '女团PRISTIN出道',
        hist_2015: 'SEVENTEEN出道（引入自制作系统）',
        hist_2012: "女团HELLOVENUS出道<br>首个男团NU'EST出道",
        hist_2011: 'After School组合（RED/BLUE）体制导入',
        hist_2010: "慈善专辑'Happy Pledis 1st Album'发行<br>Pledis娱乐法人正式成立",
        hist_2009: '女团After School正式出道',
        hist_2007: 'Pledis娱乐成立及首位艺人孙淡妃出道'
    }
};

const langKeys = ['KOR','ENG','JPN','CHN'];
let currentLang = localStorage.getItem('pledisLang') || 'KOR';

function setLang(lang){
    currentLang = lang;
    localStorage.setItem('pledisLang', lang);
    const dict = i18n[lang];
    if(!dict) return;
    document.querySelectorAll('[data-i18n]').forEach(function(el){
        const key = el.getAttribute('data-i18n');
        if(dict[key] !== undefined) el.innerHTML = dict[key];
    });
    const idx = langKeys.indexOf(lang);
    $('.lang li').removeClass('active').eq(idx).addClass('active');
    $('.mobile_lang_list li').removeClass('active').eq(idx).addClass('active');
}

// 페이지 로딩 인트로
setTimeout(function(){
    $('#pageIntro').addClass('hide');
    setTimeout(function(){ $('#pageIntro').remove(); }, 800);
}, 1400);


$(function(){

    // 저장된 언어 복원
    if(currentLang !== 'KOR') setLang(currentLang);

    // 3번: 스크롤 페이드인 (Intersection Observer)
    const observer = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
            if(entry.isIntersecting){
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.fade-up').forEach(function(el){
        observer.observe(el);
    });

    // 언어 선택 (데스크탑 — 모바일 싱크)
    $('.lang li').click(function(e){
        e.preventDefault();
        const idx = $(this).index();
        $('.lang li').removeClass('active');
        $(this).addClass('active');
        $('.mobile_lang_list li').removeClass('active').eq(idx).addClass('active');
        setLang(langKeys[idx]);
    });

    // 모바일 언어 선택 (데스크탑 싱크)
    $('.mobile_lang_list li').click(function(e){
        e.preventDefault();
        const idx = $(this).index();
        $('.mobile_lang_list li').removeClass('active');
        $(this).addClass('active');
        $('.lang li').removeClass('active').eq(idx).addClass('active');
        setLang(langKeys[idx]);
    });

    // 햄버거 메뉴
    $('.hamburger').click(function(){
        $(this).toggleClass('open');
        $('#mobileNav').toggleClass('open');
        $('body').toggleClass('nav-open');
    });

    // 모바일 내비 링크 클릭 시 닫기
    $('#mobileNav .mobile_nav_list a').click(function(){
        $('.hamburger').removeClass('open');
        $('#mobileNav').removeClass('open');
        $('body').removeClass('nav-open');
    });

    // 반짝이 초기화: 각 spark에 랜덤 딜레이 + 랜덤 애니메이션 종류 배정
    const sparkAnims = ['spark_twinkle', 'spark_pulse', 'spark_drift', 'spark_shake'];
    document.querySelectorAll('.spark').forEach(function(el){
        const anim = sparkAnims[Math.floor(Math.random() * sparkAnims.length)];
        const dur  = (2.8 + Math.random() * 3).toFixed(2) + 's';
        const delay = (Math.random() * 5).toFixed(2) + 's';
        el.style.animationName     = anim;
        el.style.animationDuration = dur;
        el.style.animationDelay    = delay;
    });
    document.querySelectorAll('.spark-line').forEach(function(el){
        const dur   = (4 + Math.random() * 4).toFixed(2) + 's';
        const delay = (Math.random() * 6).toFixed(2) + 's';
        el.style.animationDuration = dur;
        el.style.animationDelay    = delay;
    });

    // 스크롤 시 랜덤 버스트
    const $allSparks = $('.spark, .spark-line');
    let scrollBurstTimer = null;
    let lastScrollY = 0;

    $(window).on('scroll', function(){
        const scrollY = $(this).scrollTop();

        // 헤더 스크롤 감지
        if(scrollY > 50){
            $('header').addClass('scrolled');
        } else {
            $('header').removeClass('scrolled');
        }

        // 스크롤 방향·속도 무관하게 일정 거리 이동할 때마다 버스트
        if(Math.abs(scrollY - lastScrollY) > 30){
            lastScrollY = scrollY;
            if(scrollBurstTimer) clearTimeout(scrollBurstTimer);

            // 화면 viewport 안에 있는 spark 중 랜덤 3~5개 버스트
            const viewTop = scrollY;
            const viewBot = scrollY + window.innerHeight;
            const $visible = $allSparks.filter(function(){
                const rect = this.getBoundingClientRect();
                return rect.top >= 0 && rect.bottom <= window.innerHeight;
            });

            const pool = $visible.length ? $visible : $allSparks;
            const count = Math.min(pool.length, 3 + Math.floor(Math.random() * 3));
            const picked = [];
            while(picked.length < count){
                const idx = Math.floor(Math.random() * pool.length);
                if(!picked.includes(idx)) picked.push(idx);
            }
            picked.forEach(function(idx){
                const $el = pool.eq(idx);
                $el.addClass('spark-burst');
                setTimeout(function(){ $el.removeClass('spark-burst'); }, 650);
            });
        }
    });

    const $items = $('.mv_item');
    let current = 0;

    function updateSlider(){

        $items.removeClass('prev active next');

        let prev =
            (current - 1 + $items.length) % $items.length;

        let next =
            (current + 1) % $items.length;

        $items.eq(prev).addClass('prev');
        $items.eq(current).addClass('active');
        $items.eq(next).addClass('next');

        let $active = $items.eq(current);
        $('.mv_text h3').text($active.data('artist'));
        $('.mv_text p').text($active.data('title'));
    }

    updateSlider();

    $('.mv_controls .next').click(function(){

        current++;

        if(current >= $items.length){
            current = 0;
        }

        updateSlider();
    });

    // YouTube 모달
    function openModal(videoId){
        const $modal = $('#ytModal');
        const embedUrl = 'https://www.youtube.com/embed/' + videoId + '?autoplay=1&rel=0';
        $('#ytFrame').attr('src', embedUrl);
        $modal.addClass('open');
        $('body').css('overflow', 'hidden');
    }

    function closeModal(){
        const $modal = $('#ytModal');
        $modal.removeClass('open');
        setTimeout(function(){ $('#ytFrame').attr('src', ''); }, 350);
        $('body').css('overflow', '');
    }

    $('.mv_item').click(function(){
        if($(this).hasClass('active')){
            openModal($(this).data('youtube'));
        }
    });

    $('.yt_close').click(closeModal);

    $('#ytModal').click(function(e){
        if($(e.target).is('#ytModal')) closeModal();
    });

    $(document).on('keydown', function(e){
        if(e.key === 'Escape') closeModal();
    });

    $('.mv_controls .prev').click(function(){
        current--;
        if(current < 0){ current = $items.length - 1; }
        updateSlider();
    });

    // MV 자동 슬라이드 (hover 시 막대·카운트다운 동시 일시정지)
    var AUTO_INTERVAL = 5000;
    var mvTimer   = null;   // 다음 슬라이드 예약 타이머
    var mvRemain  = AUTO_INTERVAL;
    var mvCycleAt = 0;      // 현재 카운트다운 구간 시작 시각
    var $mvFill   = $('.mv_timer_fill');

    function mvAdvance(){
        current = (current + 1) % $items.length;
        updateSlider();
        startMvTimer();
    }

    // 막대를 ms 동안 현재 위치→100%까지 채우고, 끝나면 다음 슬라이드
    function mvRun(ms){
        clearTimeout(mvTimer);
        mvCycleAt = Date.now();
        mvRemain  = ms;
        $mvFill.css({ transition: 'width ' + ms + 'ms linear', width: '100%' });
        mvTimer = setTimeout(mvAdvance, ms);
    }

    function startMvTimer(){
        clearTimeout(mvTimer);
        $mvFill.css({ transition: 'none', width: '0%' });
        if($mvFill.length) void $mvFill[0].offsetWidth;   // reflow 강제
        mvRun(AUTO_INTERVAL);
    }

    function pauseMvTimer(){
        if(!mvTimer) return;
        clearTimeout(mvTimer);
        mvTimer = null;
        var w  = $mvFill.width();
        var pw = $mvFill.parent().width() || 1;
        $mvFill.css({ transition: 'none', width: (w / pw * 100) + '%' });  // 현재 위치에서 정지
        if($mvFill.length) void $mvFill[0].offsetWidth;
        mvRemain = Math.max(0, mvRemain - (Date.now() - mvCycleAt));
    }

    function resumeMvTimer(){
        if(mvTimer) return;                 // 이미 진행 중
        if(mvRemain <= 0){ startMvTimer(); return; }
        mvRun(mvRemain);                    // 남은 시간만큼 이어서
    }

    $('.mv_controls .next, .mv_controls .prev').on('click', startMvTimer);
    $('.mv_item').on('mouseenter', pauseMvTimer)
                 .on('mouseleave', resumeMvTimer);
    startMvTimer();

    // 앨범 슬라이더
    const albums = ['img/Album_1.png', 'img/Album_2.png', 'img/Album_3.png'];
    let albumCurrent = 0;
    let albumBusy = false;

    function updateAlbum(){
        const $cover = $('.album_left .cover');

        $('.album_left').addClass('changing');
        $cover.addClass('fading');

        setTimeout(function(){
            $cover.attr('src', albums[albumCurrent]);
            $('.pager span').removeClass('on').eq(albumCurrent).addClass('on');
            $('.album_list li').removeClass('active').eq(albumCurrent).addClass('active');
            $cover.removeClass('fading');

            setTimeout(function(){
                $('.album_left').removeClass('changing');
                albumBusy = false;
            }, 320);
        }, 280);
    }

    // 초기 세팅
    (function(){
        $('.album_left .cover').attr('src', albums[albumCurrent]);
        $('.pager span').removeClass('on').eq(albumCurrent).addClass('on');
        $('.album_list li').removeClass('active').eq(albumCurrent).addClass('active');
    })();

    $('.album_next').click(function(){
        if(albumBusy) return;
        albumBusy = true;
        albumCurrent = (albumCurrent + 1) % albums.length;
        updateAlbum();
    });

    $('.album_prev').click(function(){
        if(albumBusy) return;
        albumBusy = true;
        albumCurrent = (albumCurrent - 1 + albums.length) % albums.length;
        updateAlbum();
    });

    $('.album_list li').click(function(e){
        e.preventDefault();
        const idx = $(this).index();
        if(idx === albumCurrent || albumBusy) return;
        albumBusy = true;
        albumCurrent = idx;
        updateAlbum();
    });

});
