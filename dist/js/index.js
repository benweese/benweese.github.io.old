(function () {

  function navMenu(){
    $("#navigation").load("js/nav.html");
  }

  function footer(){
    $("#foot").load("js/footer.html");
  }

  function copyright() {
    const CURR_YEAR = (new Date()).getFullYear();
    $('#copyright').text('Copyright ©' + CURR_YEAR + ' Ben Weese');
  }

  $(function () {
    // Add handlers after document is ready
    navMenu();
    footer();
    copyright();
  });
})();
