
$(document).ready(function () {
  var x;
  var queryURL;
  var emotion;
  var gender;
  var country;
  $(".videobutton").on("click", function() {
  
  emotion="happy";
  gender="male";
  country="barbados";
  console.log(emotion);
  console.log(gender);
  console.log(country);

  // location.href = "index2.html";
  playvideo(emotion,gender,country);
  });

  $(".morevideo").on("click", function() {
    var str=this.src;
  var videoID=str.replace("https://img.youtube.com/vi/", '').replace('/0.jpg', '');
console.log(videoID);
console.log(this);

  displaymainvideo(videoID);
    });

  

  function playvideo(emotion,gender,country){
    console.log(emotion);
    console.log(gender);
    console.log(country);
    var youtubekey="&key=AIzaSyAUxaeEeOPFrQHEjb8ucRbOfKBcYQFmoJ0";
   var  youtubeurl="https://www.googleapis.com/youtube/v3/search?part=snippet";
  var filter="&q="+emotion+"+"+gender+"+"+country
    queryURl=youtubeurl+filter+youtubekey;
    console.log("youtube final url"+youtubeurl+filter+youtubekey);
    //  https://www.googleapis.com/youtube/v3/search?part=snippet&key=" + apiKey;
    
           console.log("inside playvideo");
             
             $.ajax({
                
                method: "GET",
                url: queryURl,
                key: "AIzaSyAUxaeEeOPFrQHEjb8ucRbOfKBcYQFmoJ0"
        
        
      }).then (function(response){
     console.log(response);
     displaymainvideo(response.items[0].id.videoId);

//      for(var i=0;i<5;i++){
//       console.log(response.items[i].id.videoId);
// displayvideo(videoId);
//      }


        // return response ;
    });
   }
function displaymainvideo(videoID){
  console.log("inside display main video");
 
  var videolink="https://www.youtube.com/embed/"+videoID+"?autoplay=1&mute=1";
  console.log(videolink);
  $("#video").attr("src",videolink);
  
}

   function displayvideo(videoId){

   }
 

  $('#controlR').click(function() {
    event.preventDefault();
    $('#content').animate({
      marginLeft: "-=400px"
    }, "fast");
 });

$('#controlL').click(function() {
    event.preventDefault();
    $('#content').animate({
      marginLeft: "+=400px"
    }, "fast");
});
});

  