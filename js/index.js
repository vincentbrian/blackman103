

$(".video-tile").click( function (){
  console.log($(this).attr("data-video"));

  console.log($("#video-iframe").attr("src"));
  // alert(this.id);
});
