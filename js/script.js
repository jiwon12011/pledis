
$(function(){

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

    function updateAlbum(){
        const prev = (albumCurrent - 1 + albums.length) % albums.length;
        const next = (albumCurrent + 1) % albums.length;

        $('.album_left .cover').attr('src', albums[albumCurrent]);

        $('.album_list li').eq(0).find('img').attr('src', albums[prev]);
        $('.album_list li').eq(1).find('img').attr('src', albums[next]);

        $('.pager span').removeClass('on').eq(albumCurrent).addClass('on');
    }

    updateAlbum();

    $('.album_next').click(function(){
        albumCurrent = (albumCurrent + 1) % albums.length;
        updateAlbum();
    });

    $('.album_prev').click(function(){
        albumCurrent = (albumCurrent - 1 + albums.length) % albums.length;
        updateAlbum();
    });

});
