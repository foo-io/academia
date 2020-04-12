$(document).foundation();

function closeOutsideClick(element, closeElement) {
    $(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $(element); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            $(closeElement).foundation('close');
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
        // $('.menu__mobile>button').click(function (e) { 
        //     $('body').toggleClass('modal-active');
        // });

        // $(document).mouseup(function (){ // событие клика по веб-документу
        //     var div = $('div.dropdown-pane.is-open'); // тут указываем ID элемента
        //     if (!div.is(e.target) // если клик был не по нашему блоку
        //         && div.has(e.target).length === 0) { // и не по его дочерним элементам
        //             $('#mobile-menu').foundation('close');
        //     }
        // });
        //"menu__mobile click to found toggle
        $('.menu__mobile>button').click(function () { 
            //$('#mobile-menu').foundation('open');
        });
        //closeOutsideClick('.dropdown-pane.is-open', '#mobile-menu');
});