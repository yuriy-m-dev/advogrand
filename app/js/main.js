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

    // const mobileBtn = document.querySelectorAll('.header-top__inner-menu-link');

    $('.header-top__inner-menu-link').click(function() {
      $('.header-top__inner-menu').removeClass('active');
    });

    // Scroll to anchors
    (function () {

      const smoothScroll = function (targetEl, duration) {
          const headerElHeight =  document.querySelector('.header-top').clientHeight;
          let target = document.querySelector(targetEl);
          let targetPosition = target.getBoundingClientRect().top - headerElHeight;
          let startPosition = window.pageYOffset;
          let startTime = null;
      
          const ease = function(t,b,c,d) {
              t /= d / 2;
              if (t < 1) return c / 2 * t * t + b;
              t--;
              return -c / 2 * (t * (t - 2) - 1) + b;
          };
      
          const animation = function(currentTime){
              if (startTime === null) startTime = currentTime;
              const timeElapsed = currentTime - startTime;
              const run = ease(timeElapsed, startPosition, targetPosition, duration);
              window.scrollTo(0,run);
              if (timeElapsed < duration) requestAnimationFrame(animation);
          };
          requestAnimationFrame(animation);

      };

      const scrollTo = function () {
          const links = document.querySelectorAll('.js-scroll');
          links.forEach(each => {
              each.addEventListener('click', function () {
                  const currentTarget = this.getAttribute('href');
                  smoothScroll(currentTarget, 1000);
              });
          });
      };
      scrollTo();
  }());
});