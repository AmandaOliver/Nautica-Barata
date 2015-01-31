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
nauticaBarataApp.filter('slice', function () {
    return function (arr, start, end) {
        return arr.slice(start, end);
    };
});

nauticaBarataApp.controller('recomendadosCtrl', function ($scope) {
    $scope.items = [];
    //sacar items de la tabla recomendados
    for (var i = 0; i < 100; i++) $scope.items.push(i);
});
nauticaBarataApp.controller('cartCtrl', ['$scope', '$http', 'ngCart',
    function ($scope, $http, ngCart) {
        ngCart.setTaxRate(7.5);
        ngCart.setShipping(2.99);
        console.log(ngCart);

        $scope.checkout = function () {
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
            controller: 'loginController'
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


//factoria que controla la autentificación, devuelve un objeto
//$cookies para crear cookies
//$cookieStore para actualizar o eliminar
//$location para cargar otras rutas
nauticaBarataApp.factory("auth", function ($cookies, $cookieStore, $location) {
    return {
        login: function (username, password) {
            //creamos la cookie con el nombre que nos han pasado
            $cookies.username = username,
            $cookies.password = password;
            //mandamos a la home
            $location.path("/idex");
        },
        logout: function () {
            //al hacer logout eliminamos la cookie con $cookieStore.remove
            $cookieStore.remove("username"),
            $cookieStore.remove("password");
            //mandamos al login
            $location.path("/login");
        },
        checkStatus: function () {
            //creamos un array con las rutas que queremos controlar
            var rutasPrivadas = ["/index", "/login"];
            if (this.in_array($location.path(), rutasPrivadas) && typeof ($cookies.username) == "undefined") {
                $location.path("/login");
            }
            //en el caso de que intente acceder al login y ya haya iniciado sesión lo mandamos a la home
            if (this.in_array("/login", rutasPrivadas) && typeof ($cookies.username) != "undefined") {
                $location.path("/index");
            }
        },
        in_array: function (needle, haystack) {
            var key = '';
            for (key in haystack) {
                if (haystack[key] == needle) {
                    return true;
                }
            }
            return false;
        }
    }
});

var users = {};
nauticaBarataApp.run(function ($http) {
    $http.get("scripts/users.json").success(function (data) {
        users.items = data;
    });
});

//creamos el controlador pasando $scope y $http, así los tendremos disponibles
nauticaBarataApp.controller('loginController', function ($scope, auth) {
    //la función login que llamamos en la vista llama a la función
    //login de la factoria auth pasando lo que contiene el campo
    //de texto del formulario
    console.log($scope.username);
    $scope.users = users;
    var encontrado = false;
    angular.forEach($scope.users.items, function (item) {
        if ((item.usuario == $scope.username) && (item.password == $scope.password)) {
            encontrado = true;
        }
        if (encontrado == false) {
            alert("Error contraseña o usuario incorrecto");
        } else {
            $scope.login = function () {
                auth.login($scope.username, $scope.password);
            }
        }
    })
});


//creamos el controlador pasando $scope y auth
nauticaBarataApp.controller('homeController', function ($scope, $cookies, auth) {
    //devolvemos a la vista el nombre del usuario
    $scope.username = $cookies.username;
    $scope.password = $cookies.password;
    //la función logout que llamamos en la vista llama a la función
    //logout de la factoria auth
    $scope.logout = function () {
        auth.logout();
    }

});

//mientras corre la aplicación, comprobamos si el usuario tiene acceso a la ruta a la que está accediendo
nauticaBarataApp.run(function ($rootScope, auth) {
    //al cambiar de rutas
    $rootScope.$on('$routeChangeStart', function () {
        //llamamos a checkStatus, el cual lo hemos definido en la factoria auth
        //la cuál hemos inyectado en la acción run de la aplicación
        auth.checkStatus();
    })
})
