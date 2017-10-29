$(document).ready(function(){

  var sex,view,pos,svg;
  var a = document.getElementById("figure");

//svg-positioning
      a.addEventListener("load",function(){
          var svgDoc = a.contentDocument;
          svg = svgDoc.getElementById("figure");
      }, false);

    function posit(){
      svg.setAttribute("viewBox", pos + " 0 400 700");
    };

//sex choice submit
  $('#subbtn').click(function() {
    view = "front";
   if($('input[name=gender]:checked', 'form').val() == "female"){
     sex = "female";
     pos = "800";
     posit();
  } else if($('input[name=gender]:checked', 'form').val() == "male") {
    sex = "male";
    pos = "0";
    posit();
   }
   $(".svg-path").css("background-image", "url(assets/img/" + sex + "-front-low.jpg)")
   document.getElementById("mySidenav").style.width = "0";
});


//rotate figure
$("#rotate").click(function(){
  if(view == "front"){
    if(sex =="female"){
      pos = "1200"
    }else{
      pos = "400"
    }
    view = "back";
  }
  else if(view == "back"){
    if(sex =="female"){
      pos = "800"
    }else{
      pos = "0"
    }
    view = "front";
  }

  $(".svg-path").css("background-image", "url(assets/img/" + sex + "-" + view + "-low.jpg)")
  posit();

});


});
