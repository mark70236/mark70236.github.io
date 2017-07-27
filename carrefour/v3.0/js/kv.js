
// 根據YouTube IFrame API官方文件，當API成功載入後會觸發此函式。
// https://developers.google.com/youtube/iframe_api_reference#Getting_Started
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady()
{
    // 只有一則YouTube影片
    if(0 === iNumberOfCarouselDiv)
    {
        outer_html = $('#kv_carousel--w-youtube div.youtube-wrapper:first-child').clone().wrap('<p>').parent().html();
        $(outer_html).appendTo('#kv_carousel');

        var wrapper = $('#kv_carousel > div.youtube-wrapper:first-child');

        // 指定影片一個明確的高度。
        wrapper.css({
            'height': '100%'
        });

        // 換上YouTube官方封面圖。
        var sYoutubeId = wrapper.data('youtube');
        wrapper.find('.youtube-cover').css({
            'background-image': 'url(http://img.youtube.com/vi/' + sYoutubeId + '/hqdefault.jpg)'
        });

        // 因為首頁主視覺第一張為YouTube影片，自動播放它。
        onPlayButtonClick(wrapper.find('.youtube-play-button'));
    }
    // 當主視覺輪播區塊元素只有一種時(圖片或YouTube影片)，owl會噴錯！
    // 所以只有當輪播元素有兩個以上，才需要替換成新的輪播內容。
    else if(iNumberOfCarouselDiv >= 2)
    {
        // 為了防禦當YouTube API被網管大大擋掉時所作的處理。
        // 但是執行起來，我採用反向概念，說明如下：
        // 頁面一載入，先針對 $('#kv_carousel') 初始化輪播機制，它只有圖片，
        // 只有當YouTube API成功載入之後，才將輪播區塊替換成具有YouTube影片的版本。
        owl_kv.trigger('replace.owl.carousel', $('#kv_carousel--w-youtube').html())
            .trigger('refresh.owl.carousel')
            .trigger('to.owl.carousel', [0, 50]);
    }
}

var aYouTube = {};
var oYoutubeVideo;
function onPlayButtonClick(playButton)
{
    playButton.parents('.youtube-wrapper').find('.youtube-cover').hide();

    playButton.parents('.youtube-wrapper').find('.youtube-play-button').hide();

    // https://developers.google.com/youtube/iframe_api_reference#Mobile_considerations
    // "Warning: To prevent unsolicited downloads over cellular networks at the user’s expense,
    // embedded media cannot be played automatically in Safari on iOS — the user always initiates playback."
    // iOS不允許程式自動播放，一定要使用者按下播放按鈕，所以當偵測到iOS裝置，不讓"遮罩層"顯示出來。
    // 遮罩層的用途：讓YouTube影片可以拖拉換下一則。
    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    if(false === iOS)
        playButton.parents('.youtube-wrapper').find('.youtube-control-layer').show();
    
    var sYoutubeId = playButton.parents('.youtube-wrapper').data('youtube');
    if('undefined' === typeof aYouTube[sYoutubeId])
    {
        oYoutubeVideo = new YT.Player(playButton.parents('.youtube-wrapper').find('.youtube-video').get(0), {
            height: '100%',
            width: '100%',
            videoId: sYoutubeId,
            playerVars: {
                'autoplay': 0
            },
            events: {
                'onStateChange': function(event)
                {
                    switch(event.data)
                    {
                        case YT.PlayerState.PLAYING:
                            break;

                        case YT.PlayerState.PAUSED:
                            break;

                        case YT.PlayerState.ENDED:
                            owl_kv.trigger('next.owl.carousel');
                            break;
                    }
                }
            }
        });

        aYouTube[sYoutubeId] = oYoutubeVideo;
    }
}

// 首頁主視覺輪播區塊的元素個數，元素可以是圖片或YouTube影片。
var iNumberOfCarouselDiv = 0;

var owl_kv = {};
$(function() {

    // 當主視覺輪播區塊元素只有一種時(圖片或YouTube影片)，owl會噴錯！
    // 現在我只想要避開這個Bug
    iNumberOfCarouselDiv = $('#kv_carousel div').length;

    // 只有一則YouTube影片
    if(0 === iNumberOfCarouselDiv)
    {
        
    }
    // 只有一張圖片
    else if(1 === iNumberOfCarouselDiv)
    {
        //$('#kv_carousel > div > a:first-child').css({
        //    'display': 'block',
        //    'width': '100%',
        //    'height': 'calc(100vh - 150px)',
        //    'background-position': 'center center',
        //    'background-repeat': 'no-repeat',
        //    'background-size': 'cover'
        //});
    }
    else
    {
        $('#autoplay-timeout-timer').timer({
            duration: '5s',
            callback: function()
            {
                owl_kv.trigger('next.owl.carousel');
            },
            repeat: true
        });

        function stopAutoplay()
        {
            var jq = $('#autoplay-timeout-timer');
            jq.timer('pause');
            jq.timer('reset');
        }

        function resumeAutoplay()
        {
            $('#autoplay-timeout-timer').timer('resume');
        }

        // 判斷首頁主視覺第一張是否為YouTube影片？
        // 注意！一定得在主視覺輪播套件(owl carousel)初始化之前就判斷好，因為owl會自動複製額外DOM，導致順序被打亂。
        var isYouTubeForKvFirstElement = false;
        var kvFirstElement = $('#kv_carousel > div:first-child');
        if('undefined' !== typeof kvFirstElement.data('youtube'))
            isYouTubeForKvFirstElement = true;

        owl_kv = $('#kv_carousel');

        owl_kv.on('mouseenter', function(event)
        {
            stopAutoplay();
        });

        owl_kv.on('mouseleave', function(event)
        {
            // 如果不是影片，才啟動計時器。
            var owlActive = $(event.target).find('.owl-item.active');
            if(0 === $('.owl-item.active > .youtube-wrapper').length)
            {
                resumeAutoplay();
            }
        });

        // 初始化首頁主視覺的輪播套件。
        owl_kv.owlCarousel({
            items: 1,
            loop: true,
            smartSpeed: 600

            // 以下要解釋為什麼不使用owl自帶的自動播放。
            // autoplay: true,
            // autoplayTimeout: 1000,
            // autoplayHoverPause: false
            // 這一定要設定"autoplayHoverPause"為false，因為2.0.0-beta.2.4版有一個Bug
            // 當此設定為true時，即使觸發自動播放手動停止，滑鼠hover離開輪播區域後，會自己恢復自動播放，Bug
            // 又發現一個Bug，當設定"autoplayHoverPause"為false時，同時手動停止自動播放，只要使用者換到下一張，自動播放又開始執行？
        });

        owl_kv.on('translated.owl.carousel', function(event)
        {
            resumeAutoplay();

            // 暫停全部的YouTube影片，並顯示播放按鈕。
            // 有嘗試過綁定在translate.owl.carousel事件裡頭，這個事件很有趣：輪播過程會持續觸發，或DnD過程也會持續觸發。
            // 考慮到效能(其實也不必這麼緊迫盯人)，所以我才寫在translated.owl.carousel這裡。
            jQuery.each(aYouTube, function(sKey, oYoutubeVideo)
            {
                oYoutubeVideo.pauseVideo();
            });
            $('.youtube-play-button').show();

            // 如果是影片，就自動播放吧～同時停止計時器。
            var owlActive = $(event.target).find('.owl-item.active');
            if(1 === owlActive.find('.youtube-wrapper').length)
            {
                var sYoutubeId = owlActive.find('.youtube-wrapper').data('youtube');

                if('undefined' === typeof aYouTube[sYoutubeId])
                {
                    onPlayButtonClick(owlActive.find('.youtube-play-button'));
                }
                else
                {
                    // 如果影片已經播完，再重播一次。
                    if(YT.PlayerState.ENDED === aYouTube[sYoutubeId].getPlayerState())
                    {
                        // 注意！特別的是YouTube API沒有重播的方法可用，需要先stop再play來達成。
                        aYouTube[sYoutubeId].stopVideo();
                        aYouTube[sYoutubeId].playVideo();

                        owlActive.find('.youtube-play-button').hide();
                    }
                    else
                        owlActive.find('.youtube-control-layer').trigger('click');
                }

                stopAutoplay();
            }
        });

        owl_kv.on('initialized.owl.carousel', function(event)
        {
            // 換上YouTube官方封面圖。
            $('.youtube-wrapper').each(function(index)
            {
                var sYoutubeId = $(this).data('youtube');
                $(this).find('.youtube-cover').css({
                    'background-image': 'url(http://img.youtube.com/vi/' + sYoutubeId + '/hqdefault.jpg)'
                });
            });

            // 如果首頁主視覺第一張為YouTube影片，自動播放它。
            if(true === isYouTubeForKvFirstElement)
            {
                onPlayButtonClick($('#kv_carousel .owl-item.active').find('.youtube-play-button'));

                stopAutoplay();
            }
        });

        // 在YouTube影片上頭蓋一層，當它被點擊時，播放/暫停影片。
        $('body').on('click', '.youtube-control-layer', function(event)
        {
            var playButton = $(this).prev();
            var sYoutubeId = $(this).parent().data('youtube');
            var iState = aYouTube[sYoutubeId].getPlayerState();

            if(YT.PlayerState.PLAYING === iState)
            {
                aYouTube[sYoutubeId].pauseVideo();
                playButton.show();
            }
            else if(YT.PlayerState.PAUSED === iState ||
                // 會觸發這個值的情況：行動裝置下，第一則為影片，等待使用者點擊播放按鈕。
                YT.PlayerState.CUED === iState ||
                // 會觸發這個值的情況：行動裝置下，如果影片已經初始化，但先不播放，先換到其他則，然後再換回來，就會得到此值(unstarted)。
                -1 === iState)
            {
                aYouTube[sYoutubeId].playVideo();
                playButton.hide();
            }
        });

        $('.youtube-play-button').on('click', function(event)
        {
            onPlayButtonClick($(this));
        });
    }



    // 首頁活動專區
    $('#activities_carousel').owlCarousel({
        loop: true,
        margin: 20,
        autoplay: true,
        dots: true,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            1024: {
                items: 4
            }
        }
    });
});


$(window).load(function () {
    // hot tab
    var _showTab = 0;
    var $defaultLi = $('.hot_tab .hot_li').eq(_showTab).addClass('active');
    $($defaultLi.find('a').attr('href')).siblings().hide();
    $('.hot_tab .hot_li a').click(function () {
        var $this = $(this).parent(),
            _clickTab = $this.find('a').attr('href');
        $this.addClass('active').siblings('.active').removeClass('active');
        $(_clickTab).stop(false, true).fadeIn().siblings().hide();
        return false;
    }).find('a').focus(function () {
        this.blur();
    });
});
