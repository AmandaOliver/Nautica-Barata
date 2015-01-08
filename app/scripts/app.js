'use strict';

/**
 * @ngdoc overview
 * @name nauticaBarataApp
 * @description
 * # nauticaBarataApp
 *
 * Main module of the application.
 */
angular
    .module('nauticaBarataApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
    .config(function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'views/index.html',
                    controller: 'MainCtrl'
                })
                .when('/cart', {
                    templateUrl: 'views/cart.html',
                    controller: 'MainCtrl'
                })
                .when('/checkout', {
                    templateUrl: 'views/checkout.html',
                    controller: 'MainCtrl'
                })
                .when('/login', {
                    templateUrl: 'views/login.html',
                    controller: 'MainCtrl'
                })
                .when('/shop', {
                    templateUrl: 'views/shop.html',
                    controller: 'MainCtrl'
                })
                .when('/product-details', {
                    templateUrl: 'views/product-details.html',
                    controller: 'MainCtrl'
                })
                .when('/blog-single', {
                    templateUrl: 'views/blog-single.html',
                    controller: 'MainCtrl'
                })
                .when('/blog', {
                    templateUrl: 'views/blog.html',
                    controller: 'MainCtrl'
                })
                .when('/404', {
                        templateUrl: 'views/404.html',
                        controller: 'MainCtrl'
                    }
                    .when('/contact-us', {
                        templateUrl: 'views/contact-us.html',
                        controller: 'MainCtrl'
                    })
                    .when('/c-env', {
                        templateUrl: 'views/condiciones-envio.html',
                        controller: 'MainCtrl'
                    })
                    .when('/horario', {
                        templateUrl: 'views/horario.html',
                        controller: 'MainCtrl'
                    })
                    .otherwise({
                        redirectTo: '/'
                    });
            });
