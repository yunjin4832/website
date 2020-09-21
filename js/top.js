$(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 500) { // scroll 함수를 이용
                $('#MOVE_TOP_BTN').fadeIn(); // 스크롤 위치에 따라 화면에서 맨위로 올라가는 버튼을 나타내고, 사라지도록 설정 4 ~ 8
            } else {
                $('#MOVE_TOP_BTN').fadeOut();
            }
        });
        
        $("#MOVE_TOP_BTN").click(function() {
            $('html, body').animate({ // 버튼 클릭 이벤트
                scrollTop : 0 // animation 을 걸어서 화면 맨위로 이동하도록 설정
            }, 400);
            return false;
        });
    });