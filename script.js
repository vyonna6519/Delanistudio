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


  