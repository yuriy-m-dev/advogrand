$(function(){
    $('.partners__slider').slick({
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-prev"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><title>arrow-thin-left</title><path fill="#d4d4d4" d="M3.828 9l6.071-6.071-1.414-1.414-8.485 8.485 8.485 8.485 1.414-1.414-6.071-6.071h16.172v-2h-16.172z"></path></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><title>arrow-thin-right</title><path fill="#d4d4d4" d="M16.172 9l-6.071-6.071 1.414-1.414 8.485 8.485-8.485 8.485-1.414-1.414 6.071-6.071h-16.172v-2z"></path></svg></button>',
        responsive: [
            {
              breakpoint: 1120,
              settings: {
                arrows: false,
                dots: true
              }
            },
            {
              breakpoint: 870,
              settings: {
                slidesToShow: 3,
                arrows: false,
                dots: true
              }
            },
            {
              breakpoint: 630,
              settings: {
                slidesToShow: 2,
                arrows: false,
                dots: true
              }
            },
            {
                breakpoint: 460,
                settings: {
                  slidesToShow: 1,
                  arrows: false,
                  dots: true
                }
              }
          ]
    });


    $(".hamburger").click(function(){
        $(this).toggleClass("is-active");
        $('.header-top__inner-menu').toggleClass('active');
    });

    $("#form").submit(function() {
      $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize()
      }).done(function() {
        $(this).find("input").val("");
        alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
        $("#form").trigger("reset");
      });
      return false;
    });
});