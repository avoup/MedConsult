$(document).ready(function(){
      $.getJSON("assets/js/symptoms.json", function(result){

          var html = "";

          result.forEach(function(val) {

             html += "<div class = 'symptom-button' id='" + val.id + "'>";

             html += "<h4 class='text-center'>" + val.name + "</h4>";

             html += "</div>";

           });

          $("#symptoms").html(html);


  function clik(){
          $("#symptoms > .symptom-button").click(function(){

            $("#chosen-symptoms").append(this);
            $("#chosen-symptoms > .symptom-button")
            .removeClass("symptom-button")
            .addClass("symptom-button-minus");


            $("#chosen-symptoms > .symptom-button-minus").click(function(){

              $("#symptoms").prepend(this);
              $("#symptoms > .symptom-button-minus")
              .removeClass("symptom-button-minus")
              .addClass("symptom-button");

                clik();
            });

          });

        }

clik();


    });


});
