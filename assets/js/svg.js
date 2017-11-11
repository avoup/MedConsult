// <![CDATA[

  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var resp = JSON.parse(this.responseText);
    // console.log(resp);
    draw(resp);
    }
  };
  xhttp.open("GET", "../../php/loader.php", true);
  xhttp.send();


  function draw(arr) {
    var out = "";
    var out_i = "";
    var sex = ["male", "female"];
    var view = ["front", "back"];
    // console.log(arr["male"]["front"][0].sub_parts);

    for(var j = 0; j < sex.length; j++){
      var s = arr[sex[j]];
      for(var f = 0; f < view.length; f++){
        var v = s[view[f]];
        for(var i = 0; i < v.length; i++) {
          var x = (v[i].gender - 1)*800 + (v[i].position - 1)*400;
          var image = v[i].image;
          var sub = v[i].sub_parts;
          // console.log(v[i].sub_parts);
          // console.log(v[i].html_id)
          out += "<path " + image;
          out += " onmousemove= \"ShowTooltip(evt,'" + v[i].name + "'," + x + ")\"";
          out += " onmouseout='HideTooltip()'";
          out += " />";
          out += "<div class='id' id='id_for-" + v[i].html_id + "'>";
          out += v[i].ID;
          out += "</div>";
          out += "<g id='" + v[i].child_html_id + "'>";

          for(var q = 0; q < sub.length; q++){
            out += "<path " + sub[q].image;
            out += " onmousemove= \"ShowTooltip(evt,'" + sub[q].name + "'," + x + ")\"";
            out += " onmouseout='HideTooltip()'";
            out += " />";
            out += "<div class='id' id='id_for-" + sub[q].html_id + "'>";
            out += sub[q].id;
            out += "</div>";
          }

          out += "</g>";
        }
      }
    }
    console.log(out);
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
