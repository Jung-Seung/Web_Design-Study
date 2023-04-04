
$(document).ready(function(){
    menu()
    slide()
    tab()
    popup()
})

function menu(){
    $(".gnb>li").hover(
        function(){
            var idx=$(this).index()
            console.log(idx)
            $(".gnb>li").eq(idx).find(".lnb").stop().slideDown()
        },
        function(){
            $(".lnb").stop().slideUp()
        }
    )
}

function slide(){
    setInterval(slideFade,3000)
}
var idx=0
function slideFade(){
    $("#slide_contents>img").eq(idx).fadeOut(1000)
    if(idx==2){
        idx=0
        $("#slide_contents>img").eq(0).fadeIn(1000)
    }else{
        $("#slide_contents>img").eq(idx+1).fadeIn(1000)
        idx++
    }
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

function tab2(){
    $(".tab_btn>a").click(function(){
        var idx = $(this).index()
        console.log(idx)//0,1
        $(".tab_contents>div").hide()
        $(".tab_contents>div").eq(idx).show()
    })
}

function popup(){
    $(".pop").click(function(){
        $("#popup").show()
    })
    $("#closeBtn").click(function(){
        $("#popup").hide()
    })
}