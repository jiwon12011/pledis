
// 페이지 로딩 인트로
setTimeout(function(){
    $('#pageIntro').addClass('hide');
    setTimeout(function(){ $('#pageIntro').remove(); }, 800);
}, 1400);


$(function(){

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
    $('.lang li').click(function(){
        const idx = $(this).index();
        $('.lang li').removeClass('active');
        $(this).addClass('active');
        $('.mobile_lang_list li').removeClass('active').eq(idx).addClass('active');
    });

    // 모바일 언어 선택 (데스크탑 싱크)
    $('.mobile_lang_list li').click(function(){
        const idx = $(this).index();
        $('.mobile_lang_list li').removeClass('active');
        $(this).addClass('active');
        $('.lang li').removeClass('active').eq(idx).addClass('active');
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

    $('.mv_stage .next').click(function(){

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

    $('.mv_stage .prev').click(function(){
        current--;
        if(current < 0){ current = $items.length - 1; }
        updateSlider();
    });

    // MV 자동 슬라이드
    var AUTO_INTERVAL = 5000;
    var mvTimer = null;
    var mvPaused = false;

    function startMvTimer(){
        clearInterval(mvTimer);
        $('.mv_timer_fill').css({ transition: 'none', width: '0%' });
        setTimeout(function(){
            $('.mv_timer_fill').css({
                transition: 'width ' + AUTO_INTERVAL + 'ms linear',
                width: '100%'
            });
        }, 30);
        mvTimer = setInterval(function(){
            if(!mvPaused){
                current = (current + 1) % $items.length;
                updateSlider();
                startMvTimer();
            }
        }, AUTO_INTERVAL);
    }

    $('.mv_stage .next, .mv_stage .prev').on('click', function(){ startMvTimer(); });
    $('.music_video').on('mouseenter', function(){ mvPaused = true; })
                     .on('mouseleave', function(){ mvPaused = false; });
    startMvTimer();

    // 앨범 슬라이더
    const albums = ['img/Album_1.png', 'img/Album_2.png', 'img/Album_3.png'];
    let albumCurrent = 0;
    let albumBusy = false;

    function updateAlbum(dir){
        const prevIdx = (albumCurrent - 1 + albums.length) % albums.length;
        const nextIdx = (albumCurrent + 1) % albums.length;

        const $cover = $('.album_left .cover');
        const exitClass  = dir > 0 ? 'exit-left'  : 'exit-right';
        const enterClass = dir > 0 ? 'enter-left' : 'enter-right';

        // 커버 퇴장 + CD 페이드
        $('.album_left').addClass('changing');
        $cover.removeClass('exit-left exit-right enter-left enter-right').addClass(exitClass);

        // 썸네일 교체
        const $thumbs = $('.album_list li img');
        $thumbs.each(function(){ $(this).removeClass('thumb-enter'); });

        setTimeout(function(){
            // 커버 교체 + 등장
            $cover.attr('src', albums[albumCurrent])
                  .removeClass(exitClass)
                  .addClass(enterClass);

            // 썸네일 교체 + 등장
            $thumbs.eq(0).attr('src', albums[prevIdx]).addClass('thumb-enter');
            $thumbs.eq(1).attr('src', albums[nextIdx]).addClass('thumb-enter');

            // 페이저
            $('.pager span').removeClass('on').eq(albumCurrent).addClass('on');

            setTimeout(function(){
                $cover.removeClass(enterClass);
                $thumbs.removeClass('thumb-enter');
                $('.album_left').removeClass('changing');
                albumBusy = false;
            }, 500);
        }, 320);
    }

    // 초기 세팅
    (function(){
        const prevIdx = (albumCurrent - 1 + albums.length) % albums.length;
        const nextIdx = (albumCurrent + 1) % albums.length;
        $('.album_left .cover').attr('src', albums[albumCurrent]);
        $('.album_list li img').eq(0).attr('src', albums[prevIdx]);
        $('.album_list li img').eq(1).attr('src', albums[nextIdx]);
        $('.pager span').removeClass('on').eq(albumCurrent).addClass('on');
    })();

    $('.album_next').click(function(){
        if(albumBusy) return;
        albumBusy = true;
        albumCurrent = (albumCurrent + 1) % albums.length;
        updateAlbum(1);
    });

    $('.album_prev').click(function(){
        if(albumBusy) return;
        albumBusy = true;
        albumCurrent = (albumCurrent - 1 + albums.length) % albums.length;
        updateAlbum(-1);
    });

});
