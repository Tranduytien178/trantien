$(window).scroll(function(){
    if($(this).scrollTop() > 1 ){
      var element = document.getElementById("site-header");
      element.classList.add("site-header_add");
    }
    else{
      var element = document.getElementById("site-header");
      element.classList.remove("site-header_add");
    }
  });
  function showmenumobile(){
    var element = document.getElementById("main-navigation");
    element.classList.toggle("menumobile-open");
  }
  function removemenumobile(){
    var element = document.getElementById("main-navigation");
    element.classList.remove("menumobile-open");
  }

  // Carousel author
   
  $('.ourteam-author').owlCarousel({
    loop: true,
    margin: 42,
    responsive:{
        0:{
            items:1,
        },
        768:{
            items:3,
        },
        1200:{
            items:4,	
        },
        1367:{
          items:5,
        }
    }
  });

  // Carousel comment
  $('.all_client-comment').owlCarousel({
    loop: true,
    margin: 42,
    center:true,
    autoplay: true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
            center: false,
        },
        992:{
             items:2,
             center: false,
        },
         1320:{
           items:3,
         }
    }
  });
  // carousel all product
  jQuery(document).ready(function($) {
    var alterClass = function() {
      var ww = document.body.clientWidth;
      if (ww < 768) 
      {
        var element = document.getElementById("all-products");
        element.classList.add("owl-carousel");

        var eitem = document.getElementById("all-product-item");
        eitem.classList.add("items");

        $('.all-products-item').owlCarousel({
          loop: true,
          margin: 42,
          center:true,
          //autoplay: true,
          responsive:{
              0:{
                  items:1,
                  center: false,
              }
          }
        });
      }
      else {
        var element = document.getElementById("all-products");
        element.classList.add("owl-carousel");

        var eitem = document.getElementById("all-product-item");
        eitem.classList.add("items");
      }
    };
    $(window).resize(function(){
      alterClass();
    });
    alterClass();
  }); 