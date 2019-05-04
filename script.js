
$(document).ready(function() {


  $( ".target" ).click(function() {
   var id=this.id;
   console.log(id);
   var ele="$(#"+id+")";
   console.log(id);
   console.log(ele);
   imageurl=$(this).attr("src");
  

   console.log(imageurl);
    detect(imageurl);
  });

  function detect(img_URL){
  $.ajax({
    url: "https://mighty-brook-95893.herokuapp.com/cors",
    method: "POST",
    data: {
      method: "POST",
      url: "https://api-us.faceplusplus.com/facepp/v3/detect?api_key=T58NXq8bmLhg7Szt9i_TT2POiN-YE_A0&api_secret=tDmaCtP_71ZtClEXw2dvxQL9Q8eGfgiW&image_url="+img_URL+"&return_attributes=gender,age,emotion",
      key: "efd92cf6cc5e7649916c4e73939e6281"
    }
  }).then (function(response){
      var age = response.faces[0].attributes.age.value;
      var gender=response.faces[0].attributes.gender.value;
      var surprisepercent=response.faces[0].attributes.emotion.surprise;
      var angerpercent=response.faces[0].attributes.emotion.anger;
      var disgustpercent=response.faces[0].attributes.emotion.disgust;
      var fearpercent=response.faces[0].attributes.emotion.fear;
      var happinesspercent=response.faces[0].attributes.emotion.happiness;
      var neutralpercent=response.faces[0].attributes.emotion.neutral;
  
      $("#age").empty();
      $("#age").append(age);
    
      $("#gender").empty();
      $("#gender").append(gender);
  
      $("#surprisepercent").empty();
      $("#surprisepercent").append(surprisepercent);
  
      $("#angerpercent").empty();
      $("#angerpercent").append(angerpercent);
  
      $("#fearpercent").empty();
      $("#fearpercent").append(fearpercent);
  
      $("#neutralpercent").empty();
      $("#neutralpercent").append(neutralpercent);
  
      $("#happinesspercent").empty();
      $("#happinesspercent").append(happinesspercent);
  
      $("#disgustpercent").empty();
      $("#disgustpercent").append(disgustpercent);
  
      $("#sadnesspercent").empty();
      $("#sadnesspercent").append(sadnesspercent);
   
  
  console.log(response);
  console.log(response.faces[0].attributes.age.value);
  console.log(response.faces[0].attributes.gender.value);
  console.log(response.faces[0].attributes.emotion.anger);
  console.log(response.faces[0].attributes.emotion.sadness);
  console.log(response.faces[0].attributes.emotion.neutral);
  console.log(response.faces[0].attributes.emotion.disgust);
  console.log(response.faces[0].attributes.emotion.surprise);
  console.log(response.faces[0].attributes.emotion.fear);
  console.log(response.faces[0].attributes.emotion.happiness);
  
  
  //change
  
  
  });
 
}
});




