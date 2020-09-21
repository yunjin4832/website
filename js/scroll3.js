$(function () {
    $(window).scroll(function () {
        var navbar = $(this).scrollTop(); // 스크롤을 내릴경우 스크롤 값이 navbar 변수에 저장된다.
        console.log(navbar);
        var $header = $('#header'); // 헤더 값은 header 변수에 저장된다.
        if (navbar > 860) { // navbar값이 860보다 클 경우 
            $header.addClass('activated'); // 헤더에 activated 라는 변수를 붙혀준다.
        }
        else {
            $header.removeClass('activated'); // 아니면 변수를 제거 한다.
        }
    })
})
$(document).ready(function () {
    $(window).scroll(function () { // 스크롤이벤트가 발생하면
        $('#content1').each(function (i) { // 각 엘리먼트의 위치를 파악하고
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bootom_of_window = $(window).scrollTop() + $(window).height();
            if (bootom_of_window > bottom_of_element) { // 엘리먼트의 모습이 50% 이상 보이면, 불투명도(opacity)를 1로 서서히 바꿉니다.
                $(this).animate({
                    'opacity': '1'
                    , 'margin-left': '0px'
                }, 1000);
            }
        });
    });
});
$(window).scroll(function () {
    $('#content3').each(function (i) {
        var bottom_of_element = $(this).offset().top + $(this).outerHeight();
        var bootom_of_window = $(window).scrollTop() + $(window).height();
        if (bootom_of_window > bottom_of_element) {
            $(this).animate({
                'opacity': '1'
            }, 1500);
        }
    });
});
$(window).scroll(function () {
    $('#content7').each(function (i) {
        var bottom_of_element = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if (bottom_of_window > bottom_of_element) {
            $(this).animate({
                'opacity': '1'
                , 'margin-left': '0px'
            }, 1000);
        }
    });
});
$(function () { // 스크롤 스파이 구현
    var link = $('#navbar a.dot');
    link.on('click', function (e) {
        var target = $($(this).attr('href')); // href 속성을 통해, section id 타겟을 잡음
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 600); // target section의 좌표를 통해 꼭대기로 이동
        $(this).addClass('active'); // active 클래스 부여
        e.preventDefault(); // 앵커를 통해 이동할때, URL에 #id가 붙지 않도록 함.
    });
    $(window).on('scroll', function () {
        findPosition();
    });

    function findPosition() {
        $('section').each(function () {
            if (($(this).offset().top - $(window).scrollTop()) < 20) {
                link.removeClass('active');
                $('#navbar').find('[data-scroll="' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    }
    findPosition();
}); // 스크롤 스파이 구현