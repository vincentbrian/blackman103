

$(".video-tile").click( function (){            //add click handler to elements with class ".video-tile"
  var videoUrl = $(this).attr("data-video");    //get attr "data-video" for the current element
  var iframeElement = $("#video-iframe");       //get iframe element
  var iframeSrc = iframeElement.attr("src");    //get iframe element attribute "src"

videoUrl = videoUrl + "?autoplay=1";
  console.log(videoUrl);
  console.log(iframeSrc)
  console.log(iframeElement);

  iframeElement.attr("src", videoUrl );

  $('#slick-carousel').slick();
});
