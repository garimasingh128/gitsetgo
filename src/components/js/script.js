/* eslint-disable no-undef */
$( document ).ready(function() {
    var images = ["bg_1.jpg","bg_2.jpg","bg_3.jpg"];
    
    /*var i = 0;
    setInterval(function(){
        if(i === arr.length - 1){
            i = 0;
        }else{
            i++;
        }
        var img = "url(../assets/images/"+arr[i]+")";
        $(".full-bg").css("background-image",img); 
     
    }, 4000);*/

    images.forEach(function(image) {
      var runner = setTimeout(function() {
        if(i === arr.length - 1){
          i = 0;
        }else{
          i++;
        }
        var img = "url(../assets/images/"+image+")";
        $(".full-bg").css("background-image",img); 

        clearTimeout(runner);
      }, 4000);
    });
});



