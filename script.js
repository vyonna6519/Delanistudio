
  $(document).ready(function(){
    $(".design").click(function(){
    $(".des-p").toggle();
    $(".image1").toggle();
 });
 $(".des-p").click(function() {
  $(".des-p").toggle();
  $(".image1").toggle();
});
    $(".development").click(function(){
    $(".dev-p").toggle();
    $(".image2").toggle();
 });
 $(".dev-p").click(function() {
  $(".dev-p").toggle();
  $(".image2").toggle();
});
    $(".product").click(function(){
    $(".prod-p").toggle();
    $(".image3").toggle();
 }); 
 $(".prod-p").click(function() {
  $(".prod-p").toggle();
  $(".image3").toggle();
});
});