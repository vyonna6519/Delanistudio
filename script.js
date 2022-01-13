$(document).ready(function(){
    
  $(".image1").click(function(){ 
      $("p.par-1").show();
      $(".image1").hide(); 
  });
  $("p.par-1").click(function(){
      $("p.par-1").hide();
      $(".image1").show(); 
  });
   $(".image2").click(function(){
       $("p.par-2").show();   
       $(".image2").hide();
   });
   $("p.par-2").click(function(){
       $("p.par-2").hide();
       $(".image2").show();
   });
   $(".image3").click(function(){
       $("p.par-3").show();   
       $(".image3").hide();
   });
   $("p.par-3").click(function(){
       $(".image3").show();
       $("p.par-3").hide();
   }); 
});


  
$('.submit').click(function () {
  var Name = $('#mce-FNAME').val();
  var Email = $('#mce-EMAIL').val();
  var Message = $('#mce-MESSAGE');
  var key ='5ab3cbd643bcd3fa381cfdba4a5a0092';
  if (Name == '' || Email == '' || Message == '') {
      alert('Please fill in the form correctly!');
  } else {
      alert(' Hi ' + Name + ' We have received your message. Thank you for reaching out to us.');
  }
});

$(document).ready(function() {
    $("div.image-frame").hover(function() {
        $(".port4 ").addClass("port5 flex-center");
    });
    $("div.image-frame").hover(function() {
        $(".port3 ").addClass("port6 flex-center");
    });
    $("div.image-frame").hover(function() {
        $(".port2 ").addClass("port7 flex-center");
    });
    $("div.image-frame").hover(function() {
        $(".port1 ").addClass("port8 flex-center");
    });
});
  