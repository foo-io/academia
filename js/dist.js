$(document).foundation();
$(document).ready(function() {
    
    //! карточка товаров
        // экшны кнопок
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
    
});