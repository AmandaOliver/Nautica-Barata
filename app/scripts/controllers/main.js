'use strict';

/**
 * @ngdoc function
 * @name nauticaBarataApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nauticaBarataApp
 */
var nauticaBarataApp=angular.module('nauticaBarataApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngCart'
  ]);
nauticaBarataApp.filter('slice', function() {
  return function(arr, start, end) {
    return arr.slice(start, end);
  };
});

nauticaBarataApp.controller('recomendadosCtrl', function($scope) {
  $scope.items = [];
  //sacar items de la tabla recomendados
  for (var i = 0; i < 100; i++) $scope.items.push(i);
});
nauticaBarataApp.controller ('cartCtrl', ['$scope', '$http', 'ngCart', function($scope, $http, ngCart) {
    ngCart.setTaxRate(7.5);
    ngCart.setShipping(2.99);
    console.log (ngCart);

    $scope.checkout = function() {
           $scope.summary = ngCart.toObject();

         // Post your cart to your resource
         //$http.post('cart/', ngCart.toObject());
    }

}]);
nauticaBarataApp.config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/index.html',
                controller: ''
            })
            .when('/cart', {
                templateUrl: 'views/cart.html',
                controller: ''
            })
            .when('/checkout', {
                templateUrl: 'views/checkout.html',
                controller: ''
            })
            .when('/login', {
                templateUrl: 'views/login.html',
                controller: ''
            })
            .when('/shop', {
                templateUrl: 'views/shop.html',
                controller: ''
            })
            .when('/product-details', {
                templateUrl: 'views/product.html',
                controller: ''
            })
            .when('/blog-single', {
                templateUrl: 'views/blog-single.html',
                controller: ''
            })
            .when('/blog', {
                templateUrl: 'views/blog.html',
                controller: ''
            })
            .when('/404', {
                templateUrl: 'views/404.html',
                controller: ''
            })
            .when('/contact-us', {
                templateUrl: 'views/contact-us.html',
                controller: ''
            })
            .when('/c-env', {
                templateUrl: 'views/condiciones-envio.html',
                controller: ''
            })
            .when('/horario-com', {
                templateUrl: 'views/horario.html',
                controller: ''
            })
            .when('/privacidad', {
                templateUrl: 'views/privacidad.html',
                controller: ''
            })
            .when('/cond-generales', {
                templateUrl: 'views/condiciones-generales.html',
                controller: ''
            })
            .otherwise({
                redirectTo: '/'
            });
    });

