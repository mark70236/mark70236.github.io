$(function() {
    var initPageNum = 1;
    var inAnimate = 0;

    // $(".wk-section").click(function() {
    //     toNextPage()
    // });
    $(".wk-section").touchwipe({
        wipeLeft: function() { toPrevPage() },
        wipeRight: function() { toNextPage() },
        preventDefaultEvents: false
    })
    // $(".wk-section").bind("mouseup touchend", function(event){
    //     event.stopPropagation();
    //     event.preventDefault();
    //     toNextPage()

    // });
    document.addEventListener('keyup', function(e) {
        if(e.keyCode==37){
            if (inAnimate==0) {
                toPrevPage()
            }else {
                return false;
            }
        }else if(e.keyCode==39 || e.keyCode==32){
            if (inAnimate==0) {
                toNextPage()
            }else {
                return false;
            }
        }
    });

    function toNextPage() {
        inAnimate = 1;
        initPageNum = initPageNum+1
        //$(".page").text('Page '+initPageNum);
        var targetDom = "[data-page="+initPageNum+"]";
        var lastTarget = $(".wk-section.active");
        $(".wk-section.active").removeClass('z10');
        $("[data-page="+initPageNum+"]").addClass('active z10');

        setTimeout(function () {
            lastTarget.removeClass('active');
            inAnimate = 0;
        },300)

    }
    function toPrevPage() {
        inAnimate = 1;
        initPageNum = initPageNum-1

        if (initPageNum<1) {
            initPageNum = 1;
            inAnimate = 0;
            return false;
        }else {
            //$(".page").text('Page '+initPageNum);
            var targetDom = "[data-page="+initPageNum+"]";
            var lastTarget = $(".wk-section.active");
            $("[data-page="+initPageNum+"]").addClass('active z10');

            setTimeout(function () {
                //$("[data-page="+initPageNum+"]").removeClass('z10');
                lastTarget.removeClass('active');
            },300)
            setTimeout(function () {
                $("[data-page="+initPageNum+"]").removeClass('z10');
                inAnimate = 0;
            },600)
        }
    }


})