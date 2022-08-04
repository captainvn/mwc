const testimonialSlider = function () {
    if (jQuery(window).width() > 992) {
        jQuery(document).find(".header-bar-menu > ul").owlCarousel('destroy');
    } else {
        jQuery(document).find(".header-bar-menu > ul").owlCarousel(testimonialConfig);
    }
}
const checkFooterLocal = function () {
    jQuery(document).find('.footer-title-toggle').removeClass('is-active');
    if (jQuery(window).width() > 992) {
        jQuery(document).find(".footer-title-toggle").next('ul').show()
    } else {
        jQuery(document).find(".footer-title-toggle").next('ul').hide()
    }
}

function checkBox() {
    var headerCheckbox = jQuery('.cart-list-header .cart-list-header-check-all .stardust-checkbox');
    var shopCheckbox = jQuery('.cart-list .cart-item-outer .cart-item-header-checkbox .stardust-checkbox');
    var productCheckbox = jQuery('.cart-list .cart-item-outer .cart-item-body-item-checkbox .stardust-checkbox');
    var footerCheckbox = jQuery('.cart-final--bottom-checkbox .stardust-checkbox');

    jQuery(document).on('change', '.stardust-checkbox__input', function (e) {
        e.preventDefault();
        if(jQuery(this).is(':checked')){
            jQuery(this).closest('.stardust-checkbox').addClass('stardust-checkbox--checked');
        }else{
            jQuery(this).closest('.stardust-checkbox').removeClass('stardust-checkbox--checked');
        }
    });
    jQuery(document).on('change', '.cart-list-header .cart-list-header-check-all .stardust-checkbox__input, .cart-final--bottom-checkbox .stardust-checkbox__input', function (e) {
        e.preventDefault();
        if(jQuery(this).is(':checked')){
            shopCheckbox.addClass('stardust-checkbox--checked');
            productCheckbox.addClass('stardust-checkbox--checked');
            headerCheckbox.addClass('stardust-checkbox--checked');
            footerCheckbox.addClass('stardust-checkbox--checked');
        }else{
            shopCheckbox.removeClass('stardust-checkbox--checked');
            productCheckbox.removeClass('stardust-checkbox--checked');
            headerCheckbox.removeClass('stardust-checkbox--checked');
            footerCheckbox.removeClass('stardust-checkbox--checked');
        }
    });

    jQuery(document).on('change', '.cart-list .cart-item-outer .cart-item-header-checkbox .stardust-checkbox__input', function (e) {
        e.preventDefault();
        var thisShopCheckbox = jQuery(this).parents('.cart-item-outer').find('.cart-item-body .cart-item-body-item-checkbox .stardust-checkbox');
        if(jQuery(this).is(':checked')){
            thisShopCheckbox.addClass('stardust-checkbox--checked');
        }else{
            thisShopCheckbox.removeClass('stardust-checkbox--checked');
        }
    });

}



let Main = {
    init: function () {
        Main.onEvent();
        Main.upEvent();
    },
    upEvent: function (container) {
        if (!container) {
            container = jQuery(document);
        }
        container.find('.mwc-countdown-timer').each(function () {
            let obj = jQuery(this);
            let inputSecond = Number(obj.attr('data-timeout-second'));

            let preTimeout = 1;

            let tMod = inputSecond % 360000;

            let hoursTens = (360000 - (tMod % 360000) + (36000 - preTimeout)) * - 1;
            let hoursOnes = (36000 - (tMod % 36000) + (3600 - preTimeout)) * - 1;
            let minsTens = (3600 - (tMod % 3600) + (600 - preTimeout)) * - 1;
            let minsOnes = (600 - (tMod % 600) + (60 - preTimeout)) * - 1;
            let secsTens = (60 - (tMod % 60) + (10 - preTimeout)) * - 1;
            let secsOnes = (10 - (tMod % 10)) * - 1;

            let hoursTensObj = obj.find('.mwc-countdown-timer__number__hexa--hour');
            let hoursOnesObj = obj.find('.mwc-countdown-timer__number__deca--hour');
            let minsTensObj = obj.find('.mwc-countdown-timer__number__hexa--minute');
            let minsOnesObj = obj.find('.mwc-countdown-timer__number__deca--minute');
            let secsTensObj = obj.find('.mwc-countdown-timer__number__hexa--second');
            let secsOnesObj = obj.find('.mwc-countdown-timer__number__deca--second');


            hoursTensObj.css('animation-delay', `${hoursTens}s`)
            hoursOnesObj.css('animation-delay', `${hoursOnes}s`)
            minsTensObj.css('animation-delay', `${minsTens}s`)
            minsOnesObj.css('animation-delay', `${minsOnes}s`)
            secsTensObj.css('animation-delay', `${secsTens}s`)
            secsOnesObj.css('animation-delay', `${secsOnes}s`)

        });
        container.find("#home-slider-owl").owlCarousel({
            nav: false,
            autoplay: false,
            autoplayTimeout: 6000,
            autoplayHoverPause: false,
            loop: true,
            dots: false,
            margin: 24,
            items: 1,
        });
        container.find("#sidebar-slider-owl").owlCarousel({
            nav: false,
            autoplay: false,
            autoplayTimeout: 6000,
            autoplayHoverPause: false,
            loop: true,
            dots: false,
            margin: 24,
            items: 1,
        });
        $(".trigger-new-slider-prev").click(function (e) {
            e.preventDefault();
            $("#sidebar-slider-owl").trigger('prev.owl.carousel');
            return false;
        });
        $(".trigger-new-slider-next").click(function (e) {
            e.preventDefault();
            $("#sidebar-slider-owl").trigger('next.owl.carousel');
            return false;
        });
    },
    onEvent: function () {
        jQuery(document).on('click', '.js-hamburger', function () {
            jQuery(this).toggleClass('is-active');
            jQuery('.header .menu').toggleClass('is-active');
            jQuery(document).find(".header-bar-menu > ul").slideToggle();
        });
        jQuery(document).on('click', '.toggle-menu-sub', function (e) {
            e.preventDefault();
            if (jQuery(window).width() > 992) {
                jQuery(this).next("ul").css('display', 'flex');
            } else {
                jQuery(this).next("ul").slideToggle();
            }
        });
        jQuery(document).on('click', '.footer-title-toggle', function (e) {
            e.preventDefault();
            if (jQuery(window).width() > 992) {
                jQuery(this).next("ul").show();
            } else {
                jQuery(this).next("ul").slideToggle();
                jQuery(this).toggleClass('is-active');
            }
        });
        jQuery(document).on('click', '.filter-collection-left > a', function (e) {
            e.preventDefault();
            jQuery('.sidebar-overlay-filter').toggleClass('is-active');
            jQuery('.filter-sidebar').toggleClass('is-active');
        });
        jQuery(document).on('click', '.filter-sidebar-close', function (e) {
            e.preventDefault();
            jQuery('.sidebar-overlay-filter').toggleClass('is-active');
            jQuery('.filter-sidebar').toggleClass('is-active');
        });
        jQuery(document).on('click', '.cart-item-body-item-product-options-btn', function (e) {
            e.preventDefault();
            var optionsTop = jQuery(this).parents('.cart-item-body-item-product-options').offset().top;
            var optionsHeight = jQuery(this).parents('.cart-item-body-item-product-options').outerHeight();
            var parentTop = jQuery(this).parents('.cart-item-body-item').offset().top;
            var modalTop = optionsTop - parentTop;
            jQuery(this).next().toggleClass('cart-item--options-modal--active');
            jQuery(this).next().css('top', modalTop + optionsHeight);
        });
        jQuery(document).on('click', '.cart-item--options-modal--actions button', function (e) {
            e.preventDefault();
            jQuery(this).parents('.cart-item--options-modal').removeClass('cart-item--options-modal--active');
        });
        jQuery(document).on('click', '.cart-item--quanity-actions--item', function (e) {
            e.preventDefault();
            var input = jQuery(this).parent().find('.cart-item--quanity-actions--input');
            var value = Number(input.val());
            if(jQuery(this).hasClass('cart-item--quanity-actions--item-minus')){
                value = value < 2 ? 1 : value - 1;
                input.val(value);
            }
            if(jQuery(this).hasClass('cart-item--quanity-actions--item-plus')){
                value = value + 1;
                input.val(value);
            }
        });
        jQuery(document).on('click', '.cart-item--find-more--related', function (e) {
            e.preventDefault();
            // jQuery(this).parent().toggleClass('cart-item--find-more-priority');
            jQuery(this).toggleClass('cart-item--find-more--related-active');
            jQuery(this).parent().find('.cart-item--find-more--dropdown').toggleClass('cart-item--find-more--dropdown--active');
        });
        jQuery(document).on('click', '.cart-item-outer .cart-item--shipping .shopee-drawer', function (e) {
            e.preventDefault();
            jQuery(this).toggleClass('shopee-drawer--active');
        });
        jQuery(document).on('click', '.cart-final--bottom .stardust-popover', function (e) {
            e.preventDefault();
            jQuery(this).toggleClass('stardust-popover--active');
        });


    },
};

jQuery(document).ready(function () {
    Main.init();
    checkBox();
});
jQuery(window).resize(function () {
    if (jQuery(window).width() > 992) {
        jQuery(document).find(".header-bar-menu").find('ul').css('display', 'flex');
    } else {
        jQuery(document).find(".header-bar-menu").find('ul').css('display', 'none');
    }
    jQuery(document).find(".js-hamburger").removeClass('is-active');
    checkFooterLocal()
});
