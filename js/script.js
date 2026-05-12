
$(function(){

    // 헤더 스크롤 감지
    $(window).on('scroll', function(){
        if($(this).scrollTop() > 50){
            $('header').addClass('scrolled');
        } else {
            $('header').removeClass('scrolled');
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

    $('.mv_info .next').click(function(){

        current++;

        if(current >= $items.length){
            current = 0;
        }

        updateSlider();
    });

    $('.mv_info .prev').click(function(){

        current--;

        if(current < 0){
            current = $items.length - 1;
        }

        updateSlider();
    });

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

        // 커버 퇴장
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
