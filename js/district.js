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
      //creando los div que contienen la imagen con el logo dandole el enlace hacia el modal
      $('#restaurants-option').append('<div class="col-xs-6 logo-restaurant" data-toggle="modal" data-target="#myModal'+i+'"><img src="' +imgRuta+ '" alt="restaurant"></div>')
      //creando el modal
      $('#restaurants-option').append(
        '<div class="modal fade" id="myModal'+i+'" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">'+
          '<div class="modal-dialog" role="document">'+
            '<div class="modal-content">'+
              '<div class="modal-header">'+
                '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
                '<h4 class="modal-title" id="myModalLabel">'+restaurantsList[i]+'</h4>'+
              '</div>'+
              '<div class="modal-body">'+
                '...'+
              '</div>'+
            '</div>'+
          '</div>'+
        '</div>'
      );
    };
  };
  //llamando a la funcion
  showRestaurant('Ancón');
  //evenbto click a la imagen, debe botar el modal
  // $('.logo-restaurant').click(function(){
  //   console.log(this); 
  // });
});