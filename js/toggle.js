$(function () {
    var win_w = $(window).width();
    $(window).on('resize', function () {
        win_w = $(this).width();
        $('#gnb>li>a').off('click');
        if (win_w >= 1024) {
            $('.sub').removeAttr('style');
            $('nav').removeClass('on');
            $('#gnb>li').removeClass('on');
        }
    });
    $('.toggle').on('click', function () {
        $(this).toggleClass('on');
        $('nav').toggleClass('on');
        $('#gnb>li').removeClass('on');
    });
    // gnb - 4
    $('#gnb>li').on('mouseenter', function () {
        if (win_w >= 1024) {
            $(this).addClass('on');
        }
        else {
            $('#gnb>li>a').off('click');
            $('#gnb>li>a').on('click', function () {
                $(this).parent().addClass('on').siblings().removeClass('on');
            });
        }
    });
    $('#gnb>li').on('mouseleave', function () {
        if (win_w >= 1024) {
            $(this).removeClass('on');
        }
    });
    $('#gnb>li>a').on('focusin', function () {
        if (win_w >= 1024) {
            $(this).parents().addClass('on');
        }
    });
});