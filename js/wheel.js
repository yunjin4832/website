jQuery(document).on("ready", function () {
    jQuery(".cf").each(function () {
        jQuery(this).on("mousewheel DOMMouseScroll", function (event) { // 개별적으로 Wheel 이벤트 적용
            var delta = 0
                , moveTop = null
                , boxMax = jQuery(".cf").length - 1
                , winEvent = "";
            if (!winEvent) {
                winEvent = window.event;
            }
            if (winEvent.wheelDelta) {
                delta = winEvent.wheelDelta / 120;
                if (window.opera) {
                    delta = -delta;
                }
            }
            else if (winEvent.detail) {
                delta = -winEvent.detail / 3;
            }
            if (delta < 0) { // 마우스휠을 위에서 아래로 이동
                if (jQuery(this).index() < boxMax) { // 마지막 cf보다 순서값이 작은 경우에 실행
                    console.log("♡");
                    if (jQuery(this).next() != undefined) {
                        moveTop = jQuery(this).next().offset().top;
                    }
                }
                else { // 마지막 cf보다 더 아래로 내려가려고 하는경우 알림창 출력
                    alert("마지막 페이지 입니다.");
                    return false;
                }
            }
            else { // 마우스휠을 아래에서 위로 이동
                if (jQuery(this).index() > 0) { // 첫번째 cf 보다 순서값이 큰 경우에 실행
                    console.log("♥");
                    if (jQuery(this).prev() != undefined) {
                        moveTop = jQuery(this).prev().offset().top;
                    }
                }
                else { // 첫번째 cf 더 위로 올라가려고 하는 경우 알림창 출력
                    alert("첫번째 페이지 입니다.");
                    return false;
                }
            }
            jQuery("html,body").stop().animate({ // 화면 이동 0.8초(800)
                scrollTop: moveTop + "px"
            }, {
                duration: 800
                , complete: function () {}
            });
        });
    });
});