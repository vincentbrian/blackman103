$(".video-carousel").on("click", ".video-tile", function() { //add click handler to elements with class ".video-tile"
  var videoUrl = $(this).attr("data-video"); //get attr "data-video" for the current element
  var iframeElement = $("#video-iframe"); //get iframe element
  var iframeSrc = iframeElement.attr("src"); //get iframe element attribute "src"


  videoUrl = videoUrl + "?autoplay=1";
  console.log(videoUrl);
  console.log(iframeSrc)
  console.log(iframeElement);

  iframeElement.attr("src", videoUrl);
});

$('#slick-carousel').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
