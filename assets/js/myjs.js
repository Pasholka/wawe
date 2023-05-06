$(document).ready(function(){
    $(".gallery-item").click(function(){
      let filter = $(this).attr("data-filter");
      if(filter == "all"){
        $(".card").show();
      } else {
        $(".card").not("." + filter).hide();
        $(".card").filter("." + filter).show();
      }
    });
  });
  let links = document.querySelectorAll(".gallery-item");
  for (let  i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function(event) {
      event.preventDefault();
    });
  }
  
  $('.blog-slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    adaptiveHeight: true
  });

  // $('.about-list__arrow').click(function (){
  //   $('.about-list__none').toggleClass('active');
    // $('.fa-arrow-down').toggleClass('active__active');
  //   // console.log(1)
  // });
  $('.about-list__arrow').click(function (){
    var $btn = $(this);
    var $list = $('.about-list__none');
    var $icon = $btn.find('.fa-arrow-down');
    $list.toggleClass('active');
    // $('.fa-arrow-down').toggleClass('active__active');
    $icon.toggleClass('active__active');
    if ($list.hasClass('active')) {
        $btn.text('скрыть');
    } else {
        $btn.text('показать');
    }
});
