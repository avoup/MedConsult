$(document).ready(function(){

  window.onload=function() {

	var a = document.getElementById("svg-path");

	var svgDoc = a.contentDocument;

	var svgItem = svgDoc.querySelectorAll("#head-2, #neck, #chest-2, #hands-2, #abdomen-2, #pelvis-2, #legs-2, #hand_line, #chest_boob, #chest_boob-2, #head_ear_right, #head_ear_right-2, #abdomen_navel, #pelvis_line, #pelvis_line-2");

  var transformer = svgDoc.getElementById("transformer");

  $(transformer).attr("transform", "translate(0,0),scale(1,1)");

  // $(svgItem).click(function(e){
  //
  //   var width = "200%";
  //   var height = "";
  //   var top = "-" + $("#body").height()/2 + "px";
  //   var left = "-" + $("#body").width()/2 + "px";
  //   var bot = "";
  //
  //   if(e.target.id == "head-2"){
  //     // width = "200%";
  //     // height = "200%"
  //     top = "";
  //     // left = "";
  //     // alert("head");
  // }
  //   else if(e.target.id == "neck"){
  //     // width = "";
  //     // height = "";
  //     top = "-100px";
  //     // left = "-235px";
  //     // alert("neck");
  // }
  //   else if(e.target.id == "chest-2"){
  //     // width = "";
  //     // height = "";
  //     top = "-40%";
  //     // left = "-235px";
  //     // alert("chest");
  // }
  //   else if(e.target.id == "hands-2"){
  //     width = "110%";
  //     // height = "120%";
  //     top = "-" + $("#body").height()/3 + "px";
  //     left = $("#body").width()/4 + "px";
  //     // alert("hand");
  // }
  //   else if(e.target.id == "abdomen-2"){
  //     // width = "";
  //     // height = "";
  //     top = "-700px";
  //     // left = "-235px";
  //     // alert("abdomen");
  // }
  //   else if(e.target.id == "pelvis-2"){
  //     // width = "";
  //     // height = "";
  //     top = "-900px";
  //     // left = "-235px";
  //     // alert("pelvis");
  // }
  //   else if(e.target.id == "legs-2"){
  //     width = "200%";
  //     // height = "1200px";
  //     // top = "-" + $("#body").height() + "px";
  //     // bot = $("#body").height() + "px";
  //     // left = "";
  //     // alert("leg");
  // }
  //
  // $("#svg-path").css({"width": width, "height": height,
  //                     "top": top, "left": left});
  //
  // });

  };
});
