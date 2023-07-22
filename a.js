$(function () {
    $(".ham").click(function () {
        $(".nav-side").toggle();
      });

      $(".nav__cross").click(function () {
        $(".nav-side").hide();
      });
  
  });