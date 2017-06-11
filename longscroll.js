$(document).ready(function(){

  var fromTop = 0;
  
  $(window).scroll(function(){
  
   fromTop = $(window).scrollTop();
   console.log(fromTop);
    
   $("#fallingphil").css({
     "top" : 100 + fromTop * 1.03 +"px"
   });
  
    
    if(fromTop > 2000 ){
    
      $("#fallingphil").css({
           "background" : "url('img/phil1.5.png')"
           });
      
    }
    
  else if(fromTop > 5100){
     $("#fallingphil").css({
           "background" : "url('img/phil2.png')"
           });
    
    }
    
    else if(fromTop > 7700){
     $("#fallingphil").css({
           "background" : "url('img/phil3.png')"
           });
    
    }
    else {
      $("#fallingphil").css({
         "background" : "url('img/phil.png')"
       });
      
    }//end if statement
    
    
  
  });
  
});