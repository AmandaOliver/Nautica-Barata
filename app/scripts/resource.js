angular.module('getCategoria', ['ngResource']=
    .factory('categoría', function($resource) {
        var Categorias =  $resource('https://api.mongolab.com/api/1/databases/nautica/collections/categorias/', {
            apiKey: 'T7WNQT6J_A_tcu-F2O7TzNTrhPYVdlkA ',
            id: 'DiegoManuel'
        });

    return Categorias;

})

    .controller('contCategorias', funcion ($scope, Categorias) {

                $scope.categorias = Categorias.query({});

                //Aqui se añadirian funciones para añadir y quitar categorias





