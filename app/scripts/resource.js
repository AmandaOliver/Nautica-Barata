//MODULO PARA CONTROLAR LAS CATEGORIAS
angular.module('recursos', ['ngResource'])
    .factory('categoria', function($resource) {
        var Categorias =  $resource('https://api.mongolab.com/api/1/databases/nautica/collections/categorias/', {
            apiKey: 'T7WNQT6J_A_tcu-F2O7TzNTrhPYVdlkA ',
            id: 'DiegoManuel'
        });

    return Categorias;

})

    .factory('carrito', function($resource) {
        var Carrito =  $resource('https://api.mongolab.com/api/1/databases/nautica/collections/carrito/', {
            apiKey: 'T7WNQT6J_A_tcu-F2O7TzNTrhPYVdlkA ',
            id: 'DiegoManuel'
        });

    return Carrito;

})

    .factory('productos', function($resource) {
        var Productos =  $resource('https://api.mongolab.com/api/1/databases/nautica/collections/producto/', {
            apiKey: 'T7WNQT6J_A_tcu-F2O7TzNTrhPYVdlkA ',
            id: 'DiegoManuel'
        });

    return Producto;

})

    .factory('recomendados', function($resource) {
        var Recomendados =  $resource('https://api.mongolab.com/api/1/databases/nautica/collections/recomendados/', {
            apiKey: 'T7WNQT6J_A_tcu-F2O7TzNTrhPYVdlkA ',
            id: 'DiegoManuel'
        });

    return Recomendados;

})


    //Controladores
    .controller('CategoriasCtrl', function ($scope, Categorias) {
                $scope.categorias = Categorias.query({});

                //Aqui se añadirian funciones para añadir y quitar categorias
})

    .controller('CarritoCtrl', function ($scope, Carrito) {

                $scope.carrito = Carrito.query({});

                $scope.agregarCarrito = function(prod){
                    prod.$save();
                };

                $scope.eliminarCarrito = function(prod){
                    prod.$remove();
                };
})

    .controller('ProductoCtrl', function ($scope, Producto) {

                $scope.producto = Productos.query({});

                $scope.agregarProducto = function(prod){
                    prod.$save();
                };

                $scope.eliminarCarrito = function(prod){
                    prod.$remove();
                };
})

  .controller('RecomendadosCtrl', function ($scope, Recomendados) {

                $scope.recomendados = Recomendados.query({});

                $scope.agregarRecomendado = function(prod){
                    prod.$save();
                };

                $scope.eliminarRecomendado = function(prod){
                    prod.$remove();
                };
})

    .controller('UsuariosCtrl', function ($scope, Usuarios) {

                $scope.usuarios = Usuarios.query({});

                $scope.agregarUsuario = function(user){
                    user.$save();
                };

                $scope.eliminarUsuario = function(user){
                    user.$remove();
                };
});
