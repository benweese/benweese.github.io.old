var express = require('express'),
app = express();
app.use('/', express.static(__dirname + '/'));
app.listen(3000);

$(document).ready(function(){
  $.get("nav.html", function(data) {
    $("#navigation").html(data);
  });
  $.get("footer.html", function(data) {
    $("#foot").html(data);
  });
});
