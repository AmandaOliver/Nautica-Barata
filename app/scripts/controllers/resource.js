//MODULO PARA CONTROLAR LAS CATEGORIAS

    nauticaBarataApp.factory('categoria', function($resource) {
        var Categorias =  $resource('https://api.mongolab.com/api/1/databases/nautica/collections/categorias/', {
            apiKey: 'T7WNQT6J_A_tcu-F2O7TzNTrhPYVdlkA ',
            id: 'DiegoManuel'
        });

    return Categorias;

})

     nauticaBarataApp.factory('carrito', function($resource) {
        var Carrito =  $resource('https://api.mongolab.com/api/1/databases/nautica/collections/carrito/', {
            apiKey: 'T7WNQT6J_A_tcu-F2O7TzNTrhPYVdlkA ',
            id: 'DiegoManuel'
        });

    return Carrito;

})

     nauticaBarataApp.factory('productos', function($resource) {
        var Productos =  $resource('https://api.mongolab.com/api/1/databases/nautica/collections/producto/', {
            apiKey: 'T7WNQT6J_A_tcu-F2O7TzNTrhPYVdlkA ',
            id: 'DiegoManuel'
        });

    return Producto;

})


    //Controladores
    nauticaBarataApp.controller('CategoriasCtrl', function ($scope, Categorias) {
                $scope.categorias = Categorias.query({});

                //Aqui se añadirian funciones para añadir y quitar categorias
})

     nauticaBarataApp.controller('CarritoCtrl', function ($scope, Carrito) {

                $scope.carrito = Carrito.query({});

                $scope.agregarCarrito = function(prod){
                    prod.$save();
                };

                $scope.eliminarCarrito = function(prod){
                    prod.$remove();
                };
})

     nauticaBarataApp.controller('ProductoCtrl', function ($scope, Producto) {

                $scope.producto = Productos.query({});

                $scope.agregarProducto = function(prod){
                    prod.$save();
                };

                $scope.eliminarCarrito = function(prod){
                    prod.$remove();
                };
})


     nauticaBarataApp.controller('UsuariosCtrl', function ($scope, Usuarios) {

                $scope.usuarios = Usuarios.query({});

                $scope.agregarUsuario = function(user){
                    user.$save();
                };

                $scope.eliminarUsuario = function(user){
                    user.$remove();
                };
});
