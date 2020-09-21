$(document).ready(function () {
    $(window).scroll(function () {
        $('.bt').each(function (i) {
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bootom_of_window = $(window).scrollTop() + $(window).height();
            if (bootom_of_window > bottom_of_element) {
                $(this).animate({
                    'opacity': '1'
                }, 1000);
            }
        });
    });
});

$(function () { // 스크롤 스파이 구현
    var link = $('#navbar a.dot');
    link.on('click', function (e) { // dots 을 클릭했을 때 onClick 이벤트를 부여한다.
        var target = $($(this).attr('href')); // href 속성을 통해, section id 타겟을 잡음
        $('html, body').animate({
            scrollTop: target.offset().top // offset().top 을 이용해 각 타겟의 좌표 맨 위로 이동하고, 부드러운 스크롤 효과를 준다.
        }, 600); // target section의 좌표를 통해 꼭대기로 이동
        $(this).addClass('active'); // 해당 dot을 클릭시 active 클래스 부여
        e.preventDefault(); // 앵커를 통해 이동할때, URL에 #id가 붙지 않도록 함.
    });
    $(window).on('scroll', function () {
        findPosition();
    });

    function findPosition() {
        $('section').each(function () {
            if (($(this).offset().top - $(window).scrollTop()) < 20) { // 스크롤할 때마다 각 섹션의 꼭대기 좌표와 현재 스크롤 위치를 받고 비교한다.
                link.removeClass('active'); // 그 차이가 20 이하면 모든 .dot의 active 클래스를 삭제한 뒤
                $('#navbar').find('[data-scroll="' + $(this).attr('id') + '"]').addClass('active'); // 처음 .dot에 부여했던 속성인 data-scroll 이 해당 id인 곳을 찾아 active 클래스를 부여한다.
            }
        });
    }
    findPosition();
}); // 스크롤 스파이 구현