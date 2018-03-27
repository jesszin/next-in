$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 200) {
	    $(".navbar").addClass("scrolled");
	  }
	  else{
		  $(".navbar").removeClass("scrolled");
	  }
  })
});
//navbar scroll down nav color change


$('.slider').slick({
    autoplay : true,
    dots: true,
    speed :400,
    infinite: true,
    autoplaySpeed: 2500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true
});
//main video on slide
$(function(){
    $('.case01>a').mouseenter(function(){
        $('.case-bg01').css('opacity','1');
        $('.subject').css('color','#fff');
    });
    $('.case01>a').mouseleave(function(){
        $('.case-bg01').css('opacity','0');
        $('.subject').css('color','#000');
    });//1
    $('.case02>a').mouseenter(function(){
        $('.case-bg02').css('opacity','1');
        $('.subject').css('color','#fff');
    });
    $('.case02>a').mouseleave(function(){
        $('.case-bg02').css('opacity','0');
        $('.subject').css('color','#000');
    });//2
    $('.case03>a').mouseenter(function(){
        $('.case-bg03').css('opacity','1');
        $('.subject').css('color','#fff');
    });
    $('.case03>a').mouseleave(function(){
        $('.case-bg03').css('opacity','0');
        $('.subject').css('color','#000');
    });//3
    $('.case04>a').mouseenter(function(){
        $('.case-bg04').css('opacity','1');
        $('.subject').css('color','#fff');
    });
    $('.case04>a').mouseleave(function(){
        $('.case-bg04').css('opacity','0');
        $('.subject').css('color','#000');
    });//4
    $('.case05>a').mouseenter(function(){
        $('.case-bg05').css('opacity','1');
        $('.subject').css('color','#fff');
    });
    $('.case05>a').mouseleave(function(){
        $('.case-bg05').css('opacity','0');
        $('.subject').css('color','#000');
    });//5
    $('.case06>a').mouseenter(function(){
        $('.case-bg06').css('opacity','1');
        $('.subject').css('color','#fff');
    });
    $('.case06>a').mouseleave(function(){
        $('.case-bg06').css('opacity','0');
        $('.subject').css('color','#000');
    });//6
    $('.case07>a').mouseenter(function(){
        $('.case-bg07').css('opacity','1');
        $('.subject').css('color','#fff');
    });
    $('.case07>a').mouseleave(function(){
        $('.case-bg07').css('opacity','0');
        $('.subject').css('color','#000');
    });//7
});
//case click
