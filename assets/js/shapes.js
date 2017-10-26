$(document).ready(function(){
  //Hide figures
  $(".female").hide();
  $(".male").hide();

  var num = 0;
  var sex = '';
  var view = '';

    	// var a = document.getElementById("fe-fig");
      //
    	// var svgDoc = a.contentDocument;
      //
    	// var svgItem = svgDoc.querySelectorAll("#head-2, #neck, #chest-2, #hands-2, #abdomen-2, #pelvis-2, #legs-2, #hand_line, #chest_boob, #chest_boob-2, #head_ear_right, #head_ear_right-2, #abdomen_navel, #pelvis_line, #pelvis_line-2");
      //
      // var transformer = svgDoc.getElementById("transformer");
      //
      // $(transformer).attr("transform", "translate(10,10),scale(4,4)");


      //sex choice submit
      //show chosen hide other;
  $('#subbtn').click(function() {
    view = "front";
   if($('input[name=gender]:checked', 'form').val() == "female"){
     sex = "female";
     $(".male").hide();
     $("#female-front").show();
    //  build("fe-fig");
  } else if($('input[name=gender]:checked', 'form').val() == "male") {
    sex = "male";
     $(".female").hide();
     $("#male-front").show();
    //  build("ma-fig");
   }
   $(".svg-path").css("background-image", "url(assets/img/" + sex + "-front-low.jpg)")
   document.getElementById("mySidenav").style.width = "0";
});

//rotate figure
// -----------------------------------------------------es rotates aketebs da ver movifiqre sxvanairad rogor shemecvala
//-------------------------------------------------------"lijbi imushaos" kodia es da uketess tu moifiqreb kai iqneba :D
$("#rotate").click(function(){
  num++

  if(view == "front"){
    $("#" + sex + "-front").hide();
    $("#" + sex + "-back").show();
    $(".svg-path").css("background-image", "url(assets/img/" + sex + "-back-low.jpg)")
    view = "back";
  }
  else{
    $("#" + sex + "-back").hide();
    $("#" + sex + "-front").show();
    $(".svg-path").css("background-image", "url(assets/img/" + sex + "-front-low.jpg)")
    view = "front";

  }

});

});
