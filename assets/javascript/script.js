
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

  // window.loadFile = function (event) {
  //   var image = document.getElementById('output');
  //   image.src = URL.createObjectURL(event.target.files[0]);
  //   console.log($('#output').attr('src'));
  
  //    x = $('#output').attr('src');
  //   var imageurl='<img src="' + x + '"/>';
  //  $('body').append(imageurl);
  
  //   console.log("x ret"+x);

  //   queryURL = "https://api-us.faceplusplus.com/facepp/v3/detect?api_key=T58NXq8bmLhg7Szt9i_TT2POiN-YE_A0&api_secret=tDmaCtP_71ZtClEXw2dvxQL9Q8eGfgiW&image_url=https://github.com/alekhyadoddi/Triviagame/blob/master/assets/images/BenedictCumberbatch.png&return_attributes=gender,age,emotion"
  //   // "https://api-us.faceplusplus.com/facepp/v3/detect?api_key=T58NXq8bmLhg7Szt9i_TT2POiN-YE_A0&api_secret=tDmaCtP_71ZtClEXw2dvxQL9Q8eGfgiW&image_url=" + x + "&return_attributes=gender,age,emotion";
    
  //  console.log("queryURL"+queryURL);
  // //  calldetect(queryURL);
   
  // };
  
//declare image  source path 
//#############
//    var imgsrcpath='../images/' ;
//    var images= ['cate.jpg','cate1.jpeg','cate2.jpeg'];
//    var imagesrc= "../images/cate.jpg";;
//    var currentimage='cate.jpg';
//   //  imagesrc="@../images/cate.jpg";
//    //getimage(currentimage);
//    queryURL="https://api-us.faceplusplus.com/facepp/v3/detect?api_key=T58NXq8bmLhg7Szt9i_TT2POiN-YE_A0&api_secret=tDmaCtP_71ZtClEXw2dvxQL9Q8eGfgiW&image_file=" + imagesrc + "&return_attributes=gender,age,emotion";
//   var faceplusresponse= calldetect(queryURL);


// //   var age = faceplusresponse.faces[0].attributes.age.value;
// //   var gender=faceplusresponse.faces[0].attributes.gender.value;
// //   var surprisepercent=faceplusresponse.faces[0].attributes.emotion.surprise;
// //   var sadnesspercent=faceplusresponse.faces[0].attributes.emotion.sadness;
// //   var angerpercent=faceplusresponse.faces[0].attributes.emotion.anger;
// //   var disgustpercent=faceplusresponse.faces[0].attributes.emotion.disgust;
// //   var fearpercent=faceplusresponse.faces[0].attributes.emotion.fear;
// //   var happinesspercent=faceplusresponse.faces[0].attributes.emotion.happiness;
// //   var neutralpercent=faceplusresponse.faces[0].attributes.emotion.neutral;
// // //THe below function is used for printing the faceplus result to UI
// //   appendhtml("age",age);
// //   appendhtml("gender",gender);
// //   appendhtml("surprisepercent",surprisepercent);
// //   appendhtml("sadnesspercent",sadnesspercent);
// //   appendhtml("angerpercent",angerpercent);
// //   appendhtml("disgustpercent",disgustpercent);
// //   appendhtml("fearpercent",fearpercent);
// //   appendhtml("happinesspercent",happinesspercent);
// //   appendhtml("neutral",neutralpercent);
  
//   function appendhtml(id,value){
//     var idelement="#"+id;
//     $(idelement).empty();
//   $(idelement).append(value);

//   }
  //################
  // $("#age").empty();
  // $("#age").append(age);

  // $("#gender").empty();
  // $("#gender").append(gender);

  // $("#surprisepercent").empty();
  // $("#surprisepercent").append(surprisepercent);

  // $("#angerpercent").empty();
  // $("#angerpercent").append(angerpercent);

  // $("#fearpercent").empty();
  // $("#fearpercent").append(fearpercent);

  // $("#neutralpercent").empty();
  // $("#neutralpercent").append(neutralpercent);

  // $("#happinesspercent").empty();
  // $("#happinesspercent").append(happinesspercent);

  // $("#disgustpercent").empty();
  // $("#disgustpercent").append(disgustpercent);

  // $("#sadnesspercent").empty();
  // $("#sadnesspercent").append(sadnesspercent);


// console.log(response);
// console.log(response.faces[0].attributes.age.value);
// console.log(response.faces[0].attributes.gender.value);
// console.log(response.faces[0].attributes.emotion.anger);
// console.log(response.faces[0].attributes.emotion.sadness);
// console.log(response.faces[0].attributes.emotion.neutral);
// console.log(response.faces[0].attributes.emotion.disgust);
// console.log(response.faces[0].attributes.emotion.surprise);
// console.log(response.faces[0].attributes.emotion.fear);
// console.log(response.faces[0].attributes.emotion.happiness);


//########

// function getimage(currentimage)
// {
// var imagesrc=imgsrcpath+currentimage;
// return imagesrc;
// }

// function calldetect(queryURL){
//   console.log("inside calldetect"+queryURL);
//   $.ajax({
//     url: "https://mighty-brook-95893.herokuapp.com/cors",
//     method: "POST",
//     data: {
//       method: "POST",
//       url: queryURL,
//       key: "efd92cf6cc5e7649916c4e73939e6281"
//     }
    
//   }).then (function(response){
//     console.log(response);
//     // return response ;
    


// });


// }
// var videoURL="";

// $.ajax({
//   url: "https://mighty-brook-95893.herokuapp.com/cors",
//   method: "POST",
//   data: {
//     method: "POST",
//     url: queryURL,
//     key: "efd92cf6cc5e7649916c4e73939e6281"
//   }
  
// }).then (function(response){
//   console.log(response);
//   // return response ;
  


// });

// var age;
// var gender;
// var response1={
//     "image_id": "O2alrpeRIXFejHWe6WlRqw==",
//     "request_id": "1556381002,12bb7bb5-96e8-4ea1-9b29-b8748cb0c402",
//     "time_used": 1326,
//     "faces": [
//       {
//         "landmark": {
//           "mouth_upper_lip_left_contour2": {
//             "y": 489,
//             "x": 520
//           },
//           "mouth_upper_lip_top": {
//             "y": 482,
//             "x": 530
//           },
//           "mouth_upper_lip_left_contour1": {
//             "y": 481,
//             "x": 524
//           },
//           "left_eye_upper_left_quarter": {
//             "y": 412,
//             "x": 512
//           },
//           "left_eyebrow_lower_middle": {
//             "y": 394,
//             "x": 513
//           },
//           "mouth_upper_lip_left_contour3": {
//             "y": 493,
//             "x": 525
//           },
//           "right_eye_top": {
//             "y": 404,
//             "x": 579
//           },
//           "left_eye_bottom": {
//             "y": 420,
//             "x": 519
//           },
//           "right_eyebrow_lower_left_quarter": {
//             "y": 392,
//             "x": 568
//           },
//           "right_eye_pupil": {
//             "y": 409,
//             "x": 578
//           },
//           "mouth_lower_lip_right_contour1": {
//             "y": 495,
//             "x": 549
//           },
//           "mouth_lower_lip_right_contour3": {
//             "y": 505,
//             "x": 545
//           },
//           "mouth_lower_lip_right_contour2": {
//             "y": 502,
//             "x": 556
//           },
//           "contour_chin": {
//             "y": 544,
//             "x": 537
//           },
//           "contour_left9": {
//             "y": 536,
//             "x": 524
//           },
//           "left_eye_lower_right_quarter": {
//             "y": 418,
//             "x": 525
//           },
//           "mouth_lower_lip_top": {
//             "y": 495,
//             "x": 533
//           },
//           "right_eyebrow_upper_middle": {
//             "y": 380,
//             "x": 582
//           },
//           "left_eyebrow_left_corner": {
//             "y": 396,
//             "x": 501
//           },
//           "right_eye_bottom": {
//             "y": 417,
//             "x": 581
//           },
//           "contour_left7": {
//             "y": 508,
//             "x": 513
//           },
//           "contour_left6": {
//             "y": 494,
//             "x": 510
//           },
//           "contour_left5": {
//             "y": 479,
//             "x": 508
//           },
//           "contour_left4": {
//             "y": 464,
//             "x": 506
//           },
//           "contour_left3": {
//             "y": 450,
//             "x": 506
//           },
//           "contour_left2": {
//             "y": 436,
//             "x": 508
//           },
//           "contour_left1": {
//             "y": 422,
//             "x": 509
//           },
//           "left_eye_lower_left_quarter": {
//             "y": 419,
//             "x": 513
//           },
//           "contour_right1": {
//             "y": 416,
//             "x": 665
//           },
//           "contour_right3": {
//             "y": 461,
//             "x": 664
//           },
//           "contour_right2": {
//             "y": 438,
//             "x": 665
//           },
//           "mouth_left_corner": {
//             "y": 499,
//             "x": 522
//           },
//           "contour_right4": {
//             "y": 484,
//             "x": 658
//           },
//           "contour_right7": {
//             "y": 531,
//             "x": 609
//           },
//           "right_eyebrow_left_corner": {
//             "y": 392,
//             "x": 553
//           },
//           "nose_right": {
//             "y": 460,
//             "x": 554
//           },
//           "nose_tip": {
//             "y": 446,
//             "x": 518
//           },
//           "contour_right5": {
//             "y": 504,
//             "x": 648
//           },
//           "nose_contour_lower_middle": {
//             "y": 464,
//             "x": 526
//           },
//           "left_eyebrow_lower_left_quarter": {
//             "y": 394,
//             "x": 506
//           },
//           "mouth_lower_lip_left_contour3": {
//             "y": 506,
//             "x": 527
//           },
//           "right_eye_right_corner": {
//             "y": 411,
//             "x": 597
//           },
//           "right_eye_lower_right_quarter": {
//             "y": 415,
//             "x": 590
//           },
//           "mouth_upper_lip_right_contour2": {
//             "y": 487,
//             "x": 552
//           },
//           "right_eyebrow_lower_right_quarter": {
//             "y": 391,
//             "x": 597
//           },
//           "left_eye_left_corner": {
//             "y": 416,
//             "x": 509
//           },
//           "mouth_right_corner": {
//             "y": 497,
//             "x": 566
//           },
//           "mouth_upper_lip_right_contour3": {
//             "y": 491,
//             "x": 548
//           },
//           "right_eye_lower_left_quarter": {
//             "y": 416,
//             "x": 572
//           },
//           "left_eyebrow_right_corner": {
//             "y": 396,
//             "x": 529
//           },
//           "left_eyebrow_lower_right_quarter": {
//             "y": 396,
//             "x": 521
//           },
//           "right_eye_center": {
//             "y": 411,
//             "x": 580
//           },
//           "nose_left": {
//             "y": 453,
//             "x": 511
//           },
//           "mouth_lower_lip_left_contour1": {
//             "y": 496,
//             "x": 527
//           },
//           "left_eye_upper_right_quarter": {
//             "y": 411,
//             "x": 525
//           },
//           "right_eyebrow_lower_middle": {
//             "y": 390,
//             "x": 583
//           },
//           "left_eye_top": {
//             "y": 410,
//             "x": 518
//           },
//           "left_eye_center": {
//             "y": 415,
//             "x": 519
//           },
//           "contour_left8": {
//             "y": 522,
//             "x": 518
//           },
//           "contour_right9": {
//             "y": 545,
//             "x": 561
//           },
//           "right_eye_left_corner": {
//             "y": 414,
//             "x": 564
//           },
//           "mouth_lower_lip_bottom": {
//             "y": 507,
//             "x": 534
//           },
//           "left_eyebrow_upper_left_quarter": {
//             "y": 388,
//             "x": 505
//           },
//           "left_eye_pupil": {
//             "y": 414,
//             "x": 519
//           },
//           "right_eyebrow_upper_left_quarter": {
//             "y": 383,
//             "x": 566
//           },
//           "contour_right8": {
//             "y": 539,
//             "x": 586
//           },
//           "right_eyebrow_right_corner": {
//             "y": 393,
//             "x": 613
//           },
//           "right_eye_upper_left_quarter": {
//             "y": 407,
//             "x": 570
//           },
//           "left_eyebrow_upper_middle": {
//             "y": 386,
//             "x": 513
//           },
//           "right_eyebrow_upper_right_quarter": {
//             "y": 383,
//             "x": 599
//           },
//           "nose_contour_left1": {
//             "y": 414,
//             "x": 528
//           },
//           "nose_contour_left2": {
//             "y": 440,
//             "x": 516
//           },
//           "mouth_upper_lip_right_contour1": {
//             "y": 480,
//             "x": 536
//           },
//           "nose_contour_right1": {
//             "y": 414,
//             "x": 552
//           },
//           "nose_contour_right2": {
//             "y": 444,
//             "x": 550
//           },
//           "mouth_lower_lip_left_contour2": {
//             "y": 502,
//             "x": 524
//           },
//           "contour_right6": {
//             "y": 519,
//             "x": 631
//           },
//           "nose_contour_right3": {
//             "y": 464,
//             "x": 540
//           },
//           "nose_contour_left3": {
//             "y": 460,
//             "x": 517
//           },
//           "left_eye_right_corner": {
//             "y": 415,
//             "x": 530
//           },
//           "left_eyebrow_upper_right_quarter": {
//             "y": 389,
//             "x": 522
//           },
//           "right_eye_upper_right_quarter": {
//             "y": 406,
//             "x": 589
//           },
//           "mouth_upper_lip_bottom": {
//             "y": 490,
//             "x": 532
//           }
//         },
//         "attributes": {
//           "emotion": {
//             "sadness": 0.378,
//             "neutral": 75.48,
//             "disgust": 0.004,
//             "anger": 0.004,
//             "surprise": 23.765,
//             "fear": 0.004,
//             "happiness": 0.363
//           },
//           "gender": {
//             "value": "Female"
//           },
//           "age": {
//             "value": 24
//           },
//           "eyestatus": {
//             "left_eye_status": {
//               "normal_glass_eye_open": 0.03,
//               "no_glass_eye_close": 0,
//               "occlusion": 0.088,
//               "no_glass_eye_open": 99.877,
//               "normal_glass_eye_close": 0,
//               "dark_glasses": 0.004
//             },
//             "right_eye_status": {
//               "normal_glass_eye_open": 0.061,
//               "no_glass_eye_close": 0,
//               "occlusion": 0.008,
//               "no_glass_eye_open": 99.927,
//               "normal_glass_eye_close": 0,
//               "dark_glasses": 0.004
//             }
//           },
//           "glass": {
//             "value": "None"
//           },
//           "headpose": {
//             "yaw_angle": 51.89651,
//             "pitch_angle": -9.777671,
//             "roll_angle": 7.1094437
//           },
//           "blur": {
//             "blurness": {
//               "threshold": 50,
//               "value": 0.052
//             },
//             "motionblur": {
//               "threshold": 50,
//               "value": 0.052
//             },
//             "gaussianblur": {
//               "threshold": 50,
//               "value": 0.052
//             }
//           },
//           "smile": {
//             "threshold": 50,
//             "value": 0.104
//           },
//           "facequality": {
//             "threshold": 70.1,
//             "value": 0.006
//           },
//           "ethnicity": {
//             "value": "WHITE"
//           }
//         },
//         "face_rectangle": {
//           "width": 162,
//           "top": 379,
//           "left": 506,
//           "height": 162
//         },
//         "face_token": "b8d74697dd31c055ea7aa8f4340296e1"
//       }
//     ]
//   }

// var angerpercent=response1.faces[0].attributes.emotion.anger;
// var disgustpercent=response1.faces[0].attributes.emotion.disgust;
// var fearpercent=response1.faces[0].attributes.emotion.fear;
// var happinesspercent=response1.faces[0].attributes.emotion.happiness;
// var neutralpercent=response1.faces[0].attributes.emotion.neutral;
// var sadnesspercent=response1.faces[0].attributes.emotion.sadness;
// var surprisepercent=response1.faces[0].attributes.emotion.surpise;

// am4core.ready(function() {
        
//     // Themes begin
//     am4core.useTheme(am4themes_animated);
//     // Themes end
    
//     var chart = am4core.create("chartdiv", am4charts.PieChart3D);
//     chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
    
//     chart.data = [
//       {
//         emotion: "Anger",
//         percent: 0.378
//       },
//       {
//         emotion: "Czech Republic",
//         percent: 75.48
//       },
//       {
//         emotion: "Disgust",
//         percent: 0.004
//       },
//       {
//         emotion: "Anger",
//         percent: 0.004
//       },
//       {
//         emotion: "Surprise",
//         percent: 23.765
//       },
//       {
//         emotion: "Fear",
//         percent: 0.004
//       },
//       {
//         emotion: "Happiness",
//         percent: 0.363
//       }
//     ];
    
//     chart.innerRadius = am4core.percent(40);
//     chart.depth = 120;
    
//     chart.legend = new am4charts.Legend();
    
//     var series = chart.series.push(new am4charts.PieSeries3D());
//     series.dataFields.value = "percent";
//     series.dataFields.depthValue = "percent";
//     series.dataFields.category = "emotion";
//     series.slices.template.cornerRadius = 5;
//     series.colors.step = 3;
//     pieSeries.labels.template.text = "{emotion: {percent.value}";
//     }); // end am4core.ready()


// var response2={
//   "kind": "youtube#searchListResponse",
//   "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/lfAxr8i5lWjTzwKk4BoJ5tJagpo\"",
//   "regionCode": "US",
//   "pageInfo": {
//    "totalResults": 4,
//    "resultsPerPage": 5
//   },
//   "items": [
//    {
//     "kind": "youtube#searchResult",
//     "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/PXsVD6BtOwlguCKV7b_TsJz7ryE\"",
//     "id": {
//      "kind": "youtube#video",
//      "videoId": "o97R6ObA0iQ"
//     },
//     "snippet": {
//      "publishedAt": "2011-06-14T01:59:33.000Z",
//      "channelId": "UCk2jOJNdmqoA93CN02DJ9nw",
//      "title": "Pet Adoption Barbados",
//      "description": "Meet Spark, male Doberman Mix, one of our recent additions up at The Ark, This video was taken of Spark 7 days after coming in to The Ark. Damian, a recent ...",
//      "thumbnails": {
//       "default": {
//        "url": "https://i.ytimg.com/vi/o97R6ObA0iQ/default.jpg",
//        "width": 120,
//        "height": 90
//       },
//       "medium": {
//        "url": "https://i.ytimg.com/vi/o97R6ObA0iQ/mqdefault.jpg",
//        "width": 320,
//        "height": 180
//       },
//       "high": {
//        "url": "https://i.ytimg.com/vi/o97R6ObA0iQ/hqdefault.jpg",
//        "width": 480,
//        "height": 360
//       }
//      },
//      "channelTitle": "The Ark Animal Welfare Society, Barbados",
//      "liveBroadcastContent": "none"
//     }
//    },
//    {
//     "kind": "youtube#searchResult",
//     "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/3dYwTW7-olCzdf1J5haSoplN4zg\"",
//     "id": {
//      "kind": "youtube#playlist",
//      "playlistId": "PL9Ge5Q8Il7z4FEdIoTXw5m5YvixNoaldS"
//     },
//     "snippet": {
//      "publishedAt": "2014-06-19T22:19:32.000Z",
//      "channelId": "UChotwhAFnZ7jnylavMXU3Pw",
//      "title": "Noelle + justin",
//      "description": "",
//      "thumbnails": {
//       "default": {
//        "url": "https://i.ytimg.com/vi/b-3BI9AspYc/default.jpg",
//        "width": 120,
//        "height": 90
//       },
//       "medium": {
//        "url": "https://i.ytimg.com/vi/b-3BI9AspYc/mqdefault.jpg",
//        "width": 320,
//        "height": 180
//       },
//       "high": {
//        "url": "https://i.ytimg.com/vi/b-3BI9AspYc/hqdefault.jpg",
//        "width": 480,
//        "height": 360
//       }
//      },
//      "channelTitle": "Justin ALVES",
//      "liveBroadcastContent": "none"
//     }
//    },
//    {
//     "kind": "youtube#searchResult",
//     "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/tTX-sLfwB42oZ5-XrFPZiICgjIk\"",
//     "id": {
//      "kind": "youtube#video",
//      "videoId": "P0eJeDSHBzI"
//     },
//     "snippet": {
//      "publishedAt": "2018-06-18T02:17:04.000Z",
//      "channelId": "UCKV0PostOmPjnXEbDgDYSFg",
//      "title": "HSN | Home Solutions 06.17.2018 - 08 PM",
//      "description": "Discover innovative problem solving products for in and around the home that help make life easier. Get countless tips and tricks from home experts, the ...",
//      "thumbnails": {
//       "default": {
//        "url": "https://i.ytimg.com/vi/P0eJeDSHBzI/default.jpg",
//        "width": 120,
//        "height": 90
//       },
//       "medium": {
//        "url": "https://i.ytimg.com/vi/P0eJeDSHBzI/mqdefault.jpg",
//        "width": 320,
//        "height": 180
//       },
//       "high": {
//        "url": "https://i.ytimg.com/vi/P0eJeDSHBzI/hqdefault.jpg",
//        "width": 480,
//        "height": 360
//       }
//      },
//      "channelTitle": "HSNtv",
//      "liveBroadcastContent": "none"
//     }
//    },
//    {
//     "kind": "youtube#searchResult",
//     "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/YgU4nTp--_Jphq-6atnv4mb8r2U\"",
//     "id": {
//      "kind": "youtube#video",
//      "videoId": "eBA7was1EH8"
//     },
//     "snippet": {
//      "publishedAt": "2018-04-13T08:55:26.000Z",
//      "channelId": "UCwyleNiSeKszp8GHFwP84Wg",
//      "title": "[ Yeam Nai Yaar ] Kashmiri Music Song Video By Gulzar Ahmad Mir",
//      "description": "Kashmiri Sufi Music Song Video ( Yeam Nai ) By Gulzar Mir Latest. Song : Yeam Nai Lyricist : Nyam Saeb Singer : Gulzar Ahmad Mir Music Director : Gulzar...",
//      "thumbnails": {
//       "default": {
//        "url": "https://i.ytimg.com/vi/eBA7was1EH8/default.jpg",
//        "width": 120,
//        "height": 90
//       },
//       "medium": {
//        "url": "https://i.ytimg.com/vi/eBA7was1EH8/mqdefault.jpg",
//        "width": 320,
//        "height": 180
//       },
//       "high": {
//        "url": "https://i.ytimg.com/vi/eBA7was1EH8/hqdefault.jpg",
//        "width": 480,
//        "height": 360
//       }
//      },
//      "channelTitle": "KS Studios",
//      "liveBroadcastContent": "none"
//     }
//    }
//   ]
//  };

//  var link="https://youtu.be/aqz-KE-bpKQ"

 //###########

// $(".videobutton").on("click", function() {
// console.log(emotion);
// console.log(age);
// console.log(gender);
// console.log(country);
// var emotion="happy";
// var gender="male";
// var country="Barbados";
// playvideo();
// });

 



  