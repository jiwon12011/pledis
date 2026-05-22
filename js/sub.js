$(function(){

    /* Fade-up observer */
    const observer = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
            if(entry.isIntersecting){
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });
    document.querySelectorAll('.fade-up').forEach(function(el){
        observer.observe(el);
    });

    /* Header scroll */
    $(window).on('scroll', function(){
        $('header').toggleClass('scrolled', $(this).scrollTop() > 50);
    });

    /* Hamburger */
    $('.hamburger').on('click', function(){
        $(this).toggleClass('open');
        $('#mobileNav').toggleClass('open');
        $('body').toggleClass('nav-open');
    });
    $('#mobileNav .mobile_nav_list a').on('click', function(){
        $('.hamburger').removeClass('open');
        $('#mobileNav').removeClass('open');
        $('body').removeClass('nav-open');
    });

    /* Spark animations */
    const sparkAnims = ['spark_twinkle','spark_pulse','spark_drift','spark_shake'];
    document.querySelectorAll('.spark').forEach(function(el){
        el.style.animationName     = sparkAnims[Math.floor(Math.random() * sparkAnims.length)];
        el.style.animationDuration = (2.8 + Math.random() * 3).toFixed(2) + 's';
        el.style.animationDelay    = (Math.random() * 5).toFixed(2) + 's';
    });
    document.querySelectorAll('.spark-line').forEach(function(el){
        el.style.animationDuration = (4 + Math.random() * 4).toFixed(2) + 's';
        el.style.animationDelay    = (Math.random() * 6).toFixed(2) + 's';
    });

    /* Notice tab filter (notice.html only) */
    if($('.notice_tab_btn').length){
        $('.notice_tab_btn').on('click', function(){
            const cat = $(this).data('cat');
            $('.notice_tab_btn').removeClass('active');
            $(this).addClass('active');
            if(cat === 'all'){
                $('.notice_item').show();
            } else {
                $('.notice_item').hide();
                $('.notice_item[data-cat="' + cat + '"]').show();
            }
        });
    }

    /* FAQ accordion (audition.html only) */
    if($('.faq_item').length){
        $('.faq_q').on('click', function(){
            const $item = $(this).closest('.faq_item');
            const isOpen = $item.hasClass('open');
            $('.faq_item').removeClass('open').find('.faq_a').slideUp(240);
            if(!isOpen){
                $item.addClass('open');
                $item.find('.faq_a').slideDown(240);
            }
        });
    }

    /* Audition guide accordion */
    if($('.guide_item').length){
        $('.guide_q').on('click', function(){
            const $item = $(this).closest('.guide_item');
            $item.toggleClass('open');
            $item.find('.guide_body').slideToggle(220);
        });
    }

    /* Audition form submission (prevent default & show thank-you) */
    if($('#auditionForm').length){
        $('#auditionForm').on('submit', function(e){
            e.preventDefault();
            $(this).hide();
            $('#formThankYou').fadeIn(400);
        });
    }

});
