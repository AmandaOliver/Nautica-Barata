angular.module('getCategoria', ['ngResource']=
    .factory('categoría', function($resource) {
        var Productos =  $resource('https://api.mongolab.com/api/1/databases/nautica/collections/categorias/', {
            apiKey: 'T7WNQT6J_A_tcu-F2O7TzNTrhPYVdlkA ',
            id: 'diegomanuelmateos'
        });

