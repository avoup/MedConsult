// <![CDATA[

  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var resp = JSON.parse(this.responseText);
    draw(resp.male.front);
    draw(resp.male.back);
    draw(resp.female.front);
    draw(resp.female.back);
    }
  };
  xhttp.open("GET", "../../php/loader.php?params=main_parts", true);
  xhttp.send();

  var out = "";

  function draw(arr) {
    for(var i = 0; i < arr.length; i++) {
      var x = (arr[i].gender - 1)*800 + (arr[i].position - 1)*400;
      var image = arr[i].image;
      out += "<path " + image;
      out += " onmousemove= \"ShowTooltip(evt,'" + arr[i].name + "'," + x + ")\"";
      out += " onmouseout='HideTooltip()'";
      out += " />";
      out += "<div class='id' id='id_for-" + image.substr(4,image.indexOf(' ')-5) + "'>";
      out += arr[i].ID;
      out += "</div>";
    }
    document.getElementById("outer").innerHTML = out;
  }

  function init(evt){

    if ( window.svgDocument == null ){

      svgDocument = evt.target.ownerDocument;
    }
    tooltip = svgDocument.getElementById('tooltip');
  }

  function ShowTooltip(evt, mouseovertext, x){

  tooltip.setAttributeNS(null,"x",evt.clientX + x + 20);
  tooltip.setAttributeNS(null,"y",evt.clientY);
  tooltip.firstChild.data = mouseovertext;
  tooltip.setAttributeNS(null,"visibility","visible");
}

function HideTooltip(){

  tooltip.setAttributeNS(null,"visibility","hidden");
}


// ]]>
