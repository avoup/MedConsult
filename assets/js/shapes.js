$(document).ready(function(){

  var sex,view,pos,svg,position;
  var a = document.getElementById("figure");


  //sex choice submit
    $('#subbtn').click(function() {
      view = "front";
      $(".svg-path").css("transform", "")
      $("#zoom-out").hide(500);

     if($('input[name=gender]:checked', 'form').val() == "female"){
       sex = "female";
       pos = "800";
       posit();
    } else if($('input[name=gender]:checked', 'form').val() == "male") {
      sex = "male";
      pos = "0";
      posit();
    } 
     $(".svg-path").css("background-image", "url(assets/img/" + sex + "-front.jpg)")
     $("#close").css("display","block");
     document.getElementById("menu__active").checked = false;
     document.getElementById("mySidenav").style.width = "0";
  });

//svg-positioning
      a.addEventListener("load",function(){
          var svgDoc = a.contentDocument;
          svg = svgDoc.getElementById("figure");



          $(svg).click(function(e){

            var scale = 4;
            $("#zoom-out").show(500);

            switch(e.target.dataset.name){
              case "head":
                position = [0,280];
                break;
              case "neck":
                position = [0,220];
                break;
              case "chest":
                position = [0,190];
                break;
              case "back":
                position = [0,140]
                scale = 3.5;
                break;
              case "abdomen":
                position = [0,100];
                break;
              case "pelvis":
              case "butt":
                position = [0,10];
                scale = 3.7;
                break;
              case "hand":
                position = [100,80];
                scale = 2.2;
                break;
              case "leg":
                position = [0,-150];
                scale = 1.8;
                break;
              default:
                position = [0,0];
                scale = 1;
                $("#zoom-out").hide();
            }

            $(".svg-path").css("transform", "scale(" + scale + ") translate(" + position[0] + "px," + position[1] + "px)")
          });

          $("#zoom-out").click(function(){
            position = [0,0];
            scale = 1;
            $(this).hide(500);
            $(".svg-path").css("transform", "scale(" + scale + ") translate(" + position[0] + "px," + position[1] + "px)")

          });
      }, false);

    function posit(){
      svg.setAttribute("viewBox", pos + " 0 400 700");
    };




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

  $(".svg-path").css("background-image", "url(assets/img/" + sex + "-" + view + ".jpg)")
  posit();

});


});
