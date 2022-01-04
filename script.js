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


  $(".Hover").hover(function(){
    $(this).animate({opacity:'1'});
  },
  function(){
    $(this).animate({opacity:'0'});
  })
  
  $('.submit').click(function () {
    var Name = $('.name').val();
    var Email = $('.email').val();
    var Message = $('.message');

    if (Name == '' || Email == '' || Message == '') {
        alert('input correctly!');
    } else {
        alert(' Hi ' + Name + ' We have received your message. Thank you for reaching out to us.');
    }
});
});
  