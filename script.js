// $(".hamburger").click(function(){
//   alert("hello");
// });
//
// $(".hamburger").click(function(){
//     $(".navbar-links").toggleClass("hide", 6000);
// });
$(document).ready( function(){
  $(".hamburger").click(function(){
    $(".navbar-links").toggleClass("hide", 2000).animate(2000);
  });
});
