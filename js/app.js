//funcion que carga el documento
$(document).ready(function(){
  //variable que selecciona el input
  var search = $('#input');
  //variable que guarde los distritos
  var arrDistrict = Object.keys(data);
  console.log(arrDistrict);
  //crea los div con los distritos
  for(i = 0; i<arrDistrict.length; i++){
    var districtSearch = arrDistrict[i];//modificar el enlace a district trabajarlo con evento
    $('#show-dis').append('<div class="container-district">' + '<a href="views/district.html">' + districtSearch + '</a>' + '<div>');
  }
  //oculta los distritos
  $('.container-district').hide();
  //funcion por cada tecla presionada
  search.keyup(function(){
    //variable ue toma el valor del input
    var district = $(this).val();
    //escondo el mapa y la descripcion
    $('.ocultar').hide();//ver su funcion que vuelva a aparecer cuando no haya escrito nada
    //muestra los distritos
    $('.container-district').show();
    //Itero por cada uno de los distritos que están contenidos en container-district
    $('.container-district').each(function() {
      var searchDist = $(this).text();
      if(searchDist.indexOf(district) == -1){
        $(this).hide();//debo buscar la forma de que encuentre sin necesidad de que sea mayuscula
      };
    });
  });
  //que tome container district y quien escuche el evento debe hacer que redireccione a views district
    $('.container-district').click(function(){
      var districtResult = $(this).text(); 
      console.log(districtResult);
    });
});