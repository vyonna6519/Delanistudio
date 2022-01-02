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

$(".one").hover(function() {
  $(".p1").fadeTo("slow",1);
  $(".img1").fadeTo("slow",0.4);
  },function() {
    $(".p1").fadeTo("slow",0);
    $(".img1").fadeTo("slow",1);
  });
$(".two").hover(function() {
  $(".p2").fadeTo("slow",1);
  $(".img2").fadeTo("slow",0.4);
  },function() {
    $(".p2").fadeTo("slow",0);
    $(".img2").fadeTo("slow",1);
  });
$(".three").hover(function() {
  $(".p3").fadeTo("slow",1);
  $(".img3").fadeTo("slow",0.4);;
  },function() {
    $(".p3").fadeTo("slow",0);
    $(".img3").fadeTo("slow",1);
  });
$(".four").hover(function() {
  $(".p4").fadeTo("slow",1);
  $(".img4").fadeTo("slow",0.4);
  },function() {
    $(".p4").fadeTo("slow",0);
    $(".img4").fadeTo("slow",1);
  });
$(".five").hover(function() {
  $(".p5").fadeTo("slow",1);
  $(".img5").fadeTo("slow",0.4);
  },function() {
    $(".p5").fadeTo("slow",0);
    $(".img5").fadeTo("slow",1);
  });
$(".six").hover(function() {
  $("p6").fadeTo("slow",1);
  $(".img6").fadeTo("slow",0.4);
  },function() {
    $("#text6").fadeTo("slow",0);
    $("#photo6").fadeTo("slow",1);
  });
$(".seven").hover(function() {
  $(".p7").fadeTo("slow",1);
  $("img7").fadeTo("slow",0.4);
  },function() {
    $(".p7").fadeTo("slow",0);
    $(".img7").fadeTo("slow",1);
  });
$(".eight").hover(function() {
  $(".p8").fadeTo("slow",1);
  $(".img8").fadeTo("slow",0.4);
  },function() {
    $(".p8").fadeTo("slow",0);
    $(".img8").fadeTo("slow",1);
  });
  
  $('.submit').click(function () {
    var Name = $('.name').val();
    var Email = $('.email').val();
    var Message = $('.message');
    var key ='c8fbd9a0cf3958e02be2822e55cfbfc5-us4';
    if (Name == '' || Email == '' || Message == '') {
        alert('Please make sure you have filled in the form correctly!');
    } else {
        alert(' Hi ' + Name + ' We have received your message. Thank you for reaching out to us.');
    }
});
});
  