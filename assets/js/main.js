$(document).ready(function(){
//side menu
  $("#close").click(function() {
    document.getElementById("mySidenav").style.width = "0";
  });
  $(".open").click(function(){
    document.getElementById("mySidenav").style.width = "100%";
  });


  // TOOLTIP

  // var tooltipss = document.querySelectorAll('.tooltips span');
  //
  // window.onmousemove = function (e) {
  //     var x = (e.clientX + 20) + 'px',
  //         y = (e.clientY + 20) + 'px';
  //     for (var i = 0; i < tooltipss.length; i++) {
  //         tooltipss[i].style.top = y;
  //         tooltipss[i].style.left = x;
  //     }
  // };

  // GET JSON
      $.getJSON("assets/js/symptoms.json", function(result){

          var html = "";

          result.forEach(function(val) {

             html += "<div class = 'symptom-button' id='" + val.id + "'>";

             html += "<h4 class='text-center'>" + val.name + "</h4>";

             html += "</div>";

           });

          $("#symptoms").html(html);


      $('.symptom-button').click(function(){
          var inThis = this;
          var containersIds = ['symptoms','chosen-symptoms'];
          var sourse = $(this).parent().prop("id");
          var index = containersIds.indexOf(sourse)+1;
              index %= 2;
              var destination = containersIds[index];
              $(inThis).slideUp(200, function(){
                $(inThis).appendTo('#'+destination).slideDown(100);

              });
          });
    });


});
