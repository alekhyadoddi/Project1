
$(document).ready(function () {

  $.ajax({
    url: "https://mighty-brook-95893.herokuapp.com/cors",
    method: "POST",
    data: {
      method: "POST",
      url: "https://api-us.faceplusplus.com/facepp/v3/detect?api_key=T58NXq8bmLhg7Szt9i_TT2POiN-YE_A0&api_secret=tDmaCtP_71ZtClEXw2dvxQL9Q8eGfgiW&image_url=https://i.ytimg.com/vi/QWgDR7btLb8/maxresdefault.jpg&return_attributes=gender,age,emotion",
      key: "efd92cf6cc5e7649916c4e73939e6281"
    }
    
  }).then (function(response){

 
  console.log(response);
  //--console.log(response);
});
});





