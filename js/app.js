$(document).ready(function(){
  setTimeout(function(){
    $('#splash').fadeOut(700);}, 2000);

      setTimeout(function() {
        $('#splash2').fadeOut(900, function() {
          window.location.href = 'views/index1.html';
        });
      }, 5000);

});
