'use strict';

/**
 * @ngdoc function
 * @name nauticaBarataApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nauticaBarataApp
 */
var nauticaBarataApp = angular.module('nauticaBarataApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngCart'
  ]);

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
        .when('/venta', {
            templateUrl: 'views/venta.html',
            controller: 'homeController'
        })
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'loginController'
        })
        .when('/shop', {
            templateUrl: 'views/shop.html',
            controller: ''
        })
        .when('/product-details', {
            templateUrl: 'views/product.html',
            controller: 'prodCtrl'
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
        .when('/Cuenta', {
            templateUrl: 'views/cuenta.html',
            controller: 'homeController'
        })
        .otherwise({
            redirectTo: '/'
        });
});
