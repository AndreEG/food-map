$(document).ready(function(){
  var showRestaurant = function(districtResult){
    var objRestaurant = data[districtResult];//devuelve un objeto con los restaurantes y sus datos
    var restaurantsList = Object.keys(objRestaurant)//devuelve nombres de los restaurant(seran usados para el mouse over)
    var objRestaurantsList = Object.values(objRestaurant)//objeto con los datos de cada restaurant
    console.log(objRestaurant);
    console.log(restaurantsList); 
    console.log(objRestaurantsList);
    //titulo para la busqueda
    $('#restaurants-option').append('<div class="col-xs-12"><h1>Restaurantes en '+ districtResult +'</h1></div>')
    //un for que crea las imagenes con los logos de cada restaurant
    for(i=0; i<restaurantsList.length; i++){
      var imgRuta = objRestaurantsList[i]['logo'];
      var platos = objRestaurantsList[i]['platos'];//es un objeto que contiene los platos
      var arrPlatos = Object.keys(platos);//un array con los nombres de los platos(recorrerlo dentro)
      var arrImgPlatos = Object.values(platos);// array con la ruta
      
      //creando los div que contienen la imagen con el logo dandole el enlace hacia el modal
      $('#restaurants-option').append('<div id="hover'+i+'" class="col-xs-6 col-sm-4 logo-restaurant" data-toggle="modal" data-target="#myModal'+i+'"><img src="' +imgRuta+ '" alt="restaurant"><div id="hover-text'+i+'"></div></div>')
      //creando el modal
      $('#restaurants-option').append(
        '<div class="modal fade" id="myModal'+i+'" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">'+
          '<div class="modal-dialog" role="document">'+
            '<div class="modal-content">'+
              '<div class="modal-header">'+
                '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
                '<h4 class="modal-title" id="myModalLabel">'+restaurantsList[i]+'</h4>'+
              '</div>'+
              '<div class="modal-body container-fluid">'+
                '<div class="col-xs-8 col-xs-offset-2"><img src="'+ objRestaurantsList[i]['mapa'] +'" alt="logo"></div>'+
                '<div class="col-xs-12">'+ objRestaurantsList[i]['dirección'] +'</div>'+
                '<div class="container-fluid show-platos"></div>'+//aca se almacenara los platos
              '</div>'+
            '</div>'+
          '</div>'+
        '</div>'
      );
      
      for(j=0; j<arrImgPlatos.length; j++){
        $('.show-platos').append('<div class="col-xs-6"><img src="' +arrImgPlatos[j]+ '"   alt="platos"></div>');//corregir el for
      };
      
      // //creando el hover
      // $('#hover0').hover(
      //   function() {
      //     $('#hover-text0').text('holi'+[i]);
      //   }, function() {
      //     $('#hover-text0').text('');
      //   }
      // );
    };
  };
  //llamando a la funcion
  showRestaurant('Ancón');
});