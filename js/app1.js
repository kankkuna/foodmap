

$(document).ready(function(){
    $('ul.listado li a').click(function() {
    var textoFiltro = $(this).text().toLowerCase().replace(/\s/g,"-");
    if(textoFiltro == 'todos'){
      $('div.filtros div.hidden').fadeIn('slow').removeClass('hidden');
    }else{
      $('.filtros div').each(function(){
        if(!$(this).hasClass(textoFiltro)){
          $(this).fadeOut('normal').addClass('hidden');
        }else{
          $(this).fadeIn('slow').removeClass('hidden');
        }
      });
    } return false;
  });
});

$("criolla").mouseover(function(){
  $("#change").css("opacity", "0.2");
});
