
$(document).ready(function(){
    menu()
    slide()
    popup()
    tab()
})
function menu(){
    //개별메뉴
    $(".gnb>li").hover(
        function(){//mouseover
            var idx = $(this).index()
            console.log(idx)//0,1,2,3
            $(".gnb>li").eq(idx).find(".lnb").stop().slideDown()
            //$(".gnb>li").eq(idx).find(".lnb")
            //gnb하위 li중에서 idx번째의 하위 lnb
        },
        function(){//mouseout
            $(".lnb").stop().slideUp()
        }
    )
}
function slide(){
    setInterval(slideFade,3000)
}
var index=0
function slideFade(){
    $("#slide_contents>img").eq(index).fadeOut(1000)

    if(index >= 2){
        $("#slide_contents>img").eq(0).fadeIn(1000)
        index=0 
    }else{//0,1
        $("#slide_contents>img").eq(index+1).fadeIn(1000)
        index++
    }
    //0번째 스르륵 사라지고,1번째 스르륵 나오고
    //1번째 스르륵 사라지고,2번째 스르륵 나오고
    //2번째 스르륵 사라지고,0번째 스르륵 나오고
    //0번째 스르륵 사라지고,1번째 스르륵 나오고
}
function tab(){

}
function popup(){

}

