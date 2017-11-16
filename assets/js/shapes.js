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

  a.addEventListener("load",function(){
      var svgDoc = a.contentDocument;
      svg = svgDoc.getElementById("figure");
      var text = svgDoc.getElementById("tooltip");
      var svgi = svgDoc.getElementById("outer");
      var showThis, hideThis;
      var txt;

      $(svg).click(function(e){
        var scale = 4;
        var name = e.target.dataset.name;
        $("#zoom-out").show(500);

        $(showThis).css("display","none");
        $(hideThis).css("display","block");
        // $(text).css("font-size","30px");

        switch(name){
          case "head":
            position = [0,280];
            txt = 10;
            break;
          case "neck":
            position = [0,220];
            txt = 10;
            break;
          case "chest":
            position = [0,190];
            txt = 10;
            break;
          case "back":
            position = [0,140];
            txt = 10;
            scale = 3.5;
            break;
          case "abdomen":
            position = [0,100];
            txt = 10;
            break;
          case "pelvis":
          case "buttock":
            position = [0,10];
            txt = 10;
            scale = 3.7;
            break;
          case "hand":
            position = [100,80];
            txt = 10;
            scale = 2.2;
            break;
          case "leg":
            position = [0,-150];
            txt = 20;
            scale = 1.8;
            break;
          default:
            position = [0,0];
            scale = 1;
            txt = 30;
            $("#zoom-out").hide();
        }

        showThis = svgDoc.getElementById(sex[0] + "-" + view[0] + "-i-" + name);
        hideThis = svgDoc.getElementById(sex[0] + "-" + view[0] + "-" + name);
        $(showThis).css("display","block");
        $(hideThis).css("display","none");

        $(text).css("font-size", txt + "px");
        $(".svg-path").css("transform", "scale(" + scale + ") translate(" + position[0] + "px," + position[1] + "px)")
      });

      $("#zoom-out").click(function(){
        position = [0,0];
        scale = 1;
        txt = 30;
        $(showThis).css("display","none");
        $(hideThis).css("display","block");
        $(this).hide(500);
        $(".svg-path").css("transform", "scale(" + scale + ") translate(" + position[0] + "px," + position[1] + "px)")
        $(text).css("font-size", txt + "px");

      });
    }, false);
//svg-positioning

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
