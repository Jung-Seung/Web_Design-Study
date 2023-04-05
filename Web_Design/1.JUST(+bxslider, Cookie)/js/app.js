
$(document).ready(function(){
    menu()
    slide()
    tab()
    popup()
})

function menu(){
    $(".gnb>li").hover(
        function(){//mouseover
            $(".lnb").stop().slideDown()
        },
        function(){//mouseout
            $(".lnb").stop().slideUp()
        }
    )
}

function slide(){
    $("#slide_contents").bxSlider({
        auto:true
    })
}

function tab(){
    $(".tab_btn>a").click(function(){
        var idx = $(this).index()
        $(".tab_contents>div").hide()
        $(".tab_contents>div").eq(idx).hide()
    })
}

function popup(){
    //이 코드는 쿠키 검사 - 바로실행
    if( $.cookie('popup01') === 'ok'){
        $("#popup").hide()
    }
    //클릭 이벤트 등록한것
    //클릭을 해야 클릭 메서드에 설정한 콜백함수가 실행된다.
    $("#popup-check").click(function(){
        $.cookie('popup01','ok',{
            expires:7,
            path:'/'
        })
        $("#popup").hide()
    })
    //클릭 이벤트 등록한것
    $("#closeBtn").click(function(){
        $("#popup").hide()
    })
}