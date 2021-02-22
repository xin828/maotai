var orientation;
//页面加载时调用
orient();
//用户变化屏幕方向时掉用
$(window).bind('orientationchange', function(e) {
    orient();

});


function orient() {
    if (window.orientation == 90 || window.orientation == -90) {
        //横屏
        orientation = 'landscape';
        $('.lock').hide();
        $('.loading').show();
        return false;
    } else if (window.orientation == 0 || window.orientation == 180) {
        //竖屏
        orientation = 'portrait';
        $('.lock').show();
        $('.loading').hide();
        return false;
    }
}

// =====================================
$(function() {
    setTimeout(function() {
        $('.lock').hide();
        $('.loading').show();
    }, 3000);


})

var sW = document.body.clientWidth;
var sH = document.body.clientHeight;

function loadFalse() {
    var x = 0;
    var loadInterVal = setInterval(function() {
        x++;
        if (x == 13) {
            $('.lad1-1').addClass('person');
        } else if (x == 25) {
            $('.lad1-2').addClass('person');
        } else if (x == 35) {
            $('.lad1-3').addClass('person');
        } else if (x == 45) {
            $('.lad1-4').addClass('person');
        } else if (x == 48) {
            $('.lad1-5').addClass('person');
        }
        if (x == 55) {
            clearInterval(loadInterVal);
            $('.loading').hide();
            $('.wine').fadeIn(80, function() {
                setTimeout(function() {
                    $('.p1-1').fadeOut(300);
                    $('.shark').fadeIn(300);
                }, 3000)
            });
            isShake = true;
        }
        $('.load-black').css('width', 7.8 * x / 750 * sW + 'px');
    }, 100)
    setTimeout(function() {
        $('.wine').hide();
        $('.make').show();
    }, 20000);
    $('.belong-btn').on('click', function() {
        $('.make').hide();
        $('.first').show();
    })
    $('.first-btn').on('click', function() {
        $('.first').hide();
        $('.second').show();
    })
    $('.second-btn').on('click', function() {
        $('.second').hide();
        $('.third').show();
    })
    $('.third-btn').on('click', function() {
        $('.third').hide();
        $('.open').show();
    })
    $('.open-btn').on('click', function() {
        $('.open').hide();
        $('.stick').show();
    })
    $('.watch').on('click', function() {
        $('.stick').hide();
        $('.look').show();
    })
    $('.again').on('click', function() {
        $('.stick').hide();
        $('.lock').show();
    })
}
loadFalse();