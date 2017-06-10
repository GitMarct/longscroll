$(document).ready(function(){

  var fromTop = 0;
  
  $(window).scroll(function(){
  
   fromTop = $(window).scrollTop();
   console.log(fromTop);
    
   $("#fallingphil").css({
     "top" : 100 + fromTop * 1.05 +"px"
   });
  
    
    if(fromTop > 2000 ){
       // if we have scrolled MORE than 2000 pixels use this image
      
      $("#fallingphil").css({
           "background" : "url('img/phil1.5.png')"
           });
      
      
    } else if(fromTop > 5100){
    
     $("#fallingphil").css({
           "background" : "url('img/phil2.png')"
           });
    
    }
    else {
      // else if we have scrolled LESS than 3000 pixels use this image
      
      //$("#wrapper").css({"border":"1px solid black"});
      //$("body").css({"background-color":"white"});
      
      $("#fallingphil").css({
         "background" : "url('img/phil.png')"
       });
     // $("#fallingphil").text("https://jsbin.com/yibujax/3/edit?js,output");
      
      
    }//end if statement
    
    
  
  });
  
});