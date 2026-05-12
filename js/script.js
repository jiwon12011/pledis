
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

});
