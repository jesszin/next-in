$(document).ready(function(){
    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();
        if(scrollTop > 1){
            $('.aboutWrap').fadeIn(300);
        }
        if(scrollTop > 15){
            $('.missionWrap').fadeIn(300);
        }

    })
})