$(document).foundation();
        // slick slider
        slick_slider();
        $(window).resize(slick_slider);
        
        
        function slick_slider() {
            var wrapper = $(".slider-tabs");
            if ($(".slick-initialized").length) {
                wrapper.slick('unslick');
            }
            wrapper.slick({
                mobileFirst: true,
                infinite: false,
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: false,
                responsive: [{
                    breakpoint: 640,
                    settings: "unslick"
                },
                {
                    breakpoint: 540,
                    settings: {
                        
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 320,
                    settings: {
                        
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
                ]
            });
        }
function closeOutsideClick(element, button, closeElement) {
    $(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $(element); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0
            && !$(button).is(e.target)) { // и не по его дочерним элементам
                $(closeElement).foundation('close');
                //
        }
    });
}

$(document).ready(function() {
    
    //! �������� �������
        // ����� ������
        $('button.card-section__button.compare').click(function() {
            $(this).parents(".card .card-section").find('.card-section__warning').fadeIn(150).addClass('show compare-add').delay(1500).fadeOut(150).promise().done(function() {
                $(this).parents(".card .card-section").find('.card-section__warning').removeClass('show compare-add');
            });
        })
        $('button.card-section__button.favorite').click(function() {
            $(this).parents(".card .card-section").find('.card-section__warning').fadeIn(150).addClass('show favorite-add').delay(1500).fadeOut(150).promise().done(function() {
                $(this).parents(".card .card-section").find('.card-section__warning').removeClass('show favorite-add');
            });
        })
        $('button.card-section__button.plus').click(function() {
            $(this).parents(".card .card-section").find('.card-section__warning').fadeIn(150).addClass('show cart-add').delay(1500).fadeOut(150).promise().done(function() {
                $(this).parents(".card .card-section").find('.card-section__warning').removeClass('show cart-add');
            });
            //? $(this).children('i').removeClass('icon-plus').addClass('icon-check')
        })
    
    //! �������
        // ������ ��������� ������� ���������
        $('.title').text(function() {
            $(this).text($(this).parent().attr('id'));
        });

    //! выпадашка мобменю
        $('.menu__mobile>button').click(function (e) {
            $('body').toggleClass('modal-active');
            if ($(this).html() == '<i class="icon-burger"></i> Меню')
                $(this).html('<i class="icon-close"></i> Закрыть')
            else
                $(this).html('<i class="icon-burger"></i> Меню');
        });
        
        $(document).mouseup(function (e){ // событие клика по веб-документу
            var div = $('div.dropdown-pane.is-open'); // тут указываем ID элемента
            if (!div.is(e.target) // если клик был не по нашему блоку
                && div.has(e.target).length === 0
                && !$('.menu__mobile>button').is(e.target)) { // и не по его дочерним элементам
                    $('#mobile-menu').foundation('close');
                    if ($('.menu__mobile div.dropdown-pane.is-open')) {
                        $('body').removeClass('modal-active');
                    }
                    if ($('.menu__mobile>button').html() == '<i class="icon-close"></i> Закрыть')
                        $('.menu__mobile>button').html('<i class="icon-burger"></i> Меню')

                    
            }
        });
        //"menu__mobile click to found toggle
        // $('.menu__mobile>button.hover').click(function () {
        //     $('#mobile-menu').foundation('close');
        // });
        //closeOutsideClick('.dropdown-pane.is-open', '.menu__mobile>button', '#mobile-menu');
        closeOutsideClick('.dropdown-pane.is-open', '.header__sign>button', '#sign-up');
        closeOutsideClick('.dropdown-pane.is-open', '.header__sign>button', '#sign-in');



});
