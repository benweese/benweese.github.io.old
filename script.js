$(document).ready(function(){
  $.get("nav.html", function(data) {
    $("#navigation").html(data);
  });
  $.get("footer.html", function(data) {
    $("#foot").html(data);
  });
});
