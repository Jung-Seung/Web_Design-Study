
//ready는
//specify function when
//DOM is fully loaded
//DOM이 완벽하게 로드되었을때
//실행할 함수를 설정한다.
$(document).ready(function(){
    menu()
    slide()
    //tab()
    tabAdvanced()
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
    setInterval(slideMove,3000)
}
var slideIndex=0
var slideTop=0
function slideMove(){
    //animate~
    slideIndex++
    if(slideIndex >= 3){
        slideIndex=0
    }
    slideTop = -300 * slideIndex
    $("#slide_contents").animate({"top":slideTop})
}

function tab(){
    $(".tab_btn>a").eq(0).click(function(){
        //공지사항 버튼 클릭시
        $(".tab_contents>div").eq(1).hide()
        $(".tab_contents>div").eq(0).show()
    })
    $(".tab_btn>a").eq(1).click(function(){
        //갤러리 버튼 클릭시
        $(".tab_contents>div").eq(0).hide()
        $(".tab_contents>div").eq(1).show()
    })
}

function tabAdvanced(){
    $(".tab_btn>a").click(function(){
        var idx=$(this).index()
        //$(this).index() 
        //이벤트가 발생한 곳의 인덱스번호
        //alert(idx)//0,1
        $(".tab_contents>div").hide()
        $(".tab_contents>div").eq(idx).show()
    })
}

function popup(){
    //$(".pop").click
    //$(".notice_list>li").eq(0)
    $(".pop").click(function(){
        $("#popup").show()
    })

    $("#closeBtn").click(function(){
        $("#popup").hide()
    })
}
