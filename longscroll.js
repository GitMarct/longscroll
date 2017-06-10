$(document).ready(function(){

  var fromTop = 0;
  
  $(window).scroll(function(){
  
   fromTop = $(window).scrollTop();
   console.log(fromTop);
    
   $("#fallingphil").css({
     "top" : 100 + fromTop * 1.1 +"px"
   });
  
    
    if(fromTop > 3000 ){
       // if we have scrolled MORE than 3000 pixels use this image
         
      $("#wrapper").css({"border":"10px solid green"});
      $("body").css({"background-color":"pink"});
      
      
      
      $("#fallingphil").css({
           "background-image" : "url('img/phil1.5.png')"
           });
     
      $("#mainimage").text("mar. 29, 2010");
      
      
    } else if(fromTop > 6000){
    
    // do something else crazy
    
    }
    else {
      // else if we have scrolled LESS than 3000 pixels use this image
      
      $("#wrapper").css({"border":"1px solid black"});
      $("body").css({"background-color":"white"});
      
      $("#mainimage").css({
         "background-image" : "url('http://www.freepngimg.com/thumb/kitten/2-2-kitten-free-download-png-thumb.png')"
       });
      $("#mainimage").text("https://jsbin.com/yibujax/3/edit?js,output");
      
      
    }//end if statement
    
    
  
  });
  
});