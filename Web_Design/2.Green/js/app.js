
$(document).ready(function(){
    menu()
    slide()
    popup()
})
function menu(){
    //전체+배경
    $(".gnb>li").hover(
        function(){
            $(".lnb").stop().slideDown()
            $(".left_bg").stop().slideDown()
            $(".right_bg").stop().slideDown()
        },
        function(){
            $(".lnb").stop().slideUp()
            $(".left_bg").stop().slideUp()
            $(".right_bg").stop().slideUp()
        }
    )
}
function slide(){
    //가로방향
    setInterval(slideMove,3000)
}
var slideIndex=0
var slideLeft=0
function slideMove(){
    slideIndex++
    if(slideIndex>=3){
        slideIndex=0
    }
    slideLeft = -1200 * slideIndex
    //animate
    $("#slide_contents").animate({"left":slideLeft})
}
function popup(){

}

