$(document).ready(function() {
    $(window).scroll( function(){
        $('.hide-title').each( function(i){
            var pagetitle = $(window).scrollTop();
            if( pagetitle > 0 ){
                $(this).animate({'opacity':'1'},300);
            }
        });
        $('.hide').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},1000);
            }
        });
    });
});
//title