$(document).on('ready', function() {
    		  $(".slider_for3_ipads").slick({
    		    dots: true,
    		    infinite: false,
    		    slidesToShow: 1,
    		    slidesToScroll: 1,
    		    autoplay: true,
    			autoplaySpeed: 5000,
    			speed: 2000,
    		  });
    		  $(".slider-front").slick({
    		    dots: true,
    		    infinite: false,
    		    slidesToShow: 1,
    		    slidesToScroll: 1,
    		    autoplay: true,
    		    autoplaySpeed: 3000,
    		  });
    		  $(".slider-footer").slick({
    		    dots: false,
        		prevArrow: false,
        		nextArrow: false,
    		    slidesToShow: 1,
    		    slidesToScroll: 1,
    		    autoplay: true,
    		    autoplaySpeed: 1000,
  				fade: true,
  				cssEase: 'linear'
    		  });
    		});



$(document).ready(function() {
    $("#knopki").on("click", ".first_tab", function(){
        $("#knopki .first_tab").removeClass("active"); //удаляем класс во всех вкладках
        $(this).addClass("active"); //добавляем класс текущей (нажатой)
    });
});