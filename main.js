$(document).ready(function () {

$('.nav a[href*="#"]').on('click', function () {
  $('html, body').animate( {
      scrollTop: $($(this).attr('href')).offset().top - 100
  }, 2000);
});

$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});

$('#up').on('click', function () {
  $('html, body').animate( {
      scrollTop: 0
  }, 2000);
});



});


