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
            $location.path("/login");
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
            var rutasPrivadas = ["/Cuenta"];
            if (this.in_array($location.path(), rutasPrivadas) && typeof ($cookies.username) == "undefined") {
                alert("Para administrar la cuenta tienes que iniciar sesion");
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

nauticaBarataApp.run(function ($http) {
    $http.get("scripts/users.json").success(function (data) {
        users.items = data;
    });
});
var users = {};
//creamos el controlador pasando $scope y $http, así los tendremos disponibles
nauticaBarataApp.controller('loginController', function ($scope, auth) {
    //la función login que llamamos en la vista llama a la función
    //login de la factoria auth pasando lo que contiene el campo
    //de texto del formulario
    $scope.users = users;
    $scope.login = function () {
        var encontrado = false;
        angular.forEach($scope.users.items, function (item) {
            if ((item.username == $scope.username) && (item.password == $scope.password)) {
                encontrado = true;
            }
        })
        if (encontrado == false) {
            alert("Error contraseña o usuario incorrecto");
        } else {
            auth.login($scope.username, $scope.password);
            alert("Sesion iniciada");
        }
    }
    $scope.addUser = function (userDetails) {
        var valido = true;
        angular.forEach($scope.users.items, function (item) {
            if ((item.username == userDetails.username)) {
                valido = false;
            }
        })
        if (valido == true) {
            users.items.push({
                username: userDetails.username,
                password: userDetails.password
            });
            alert("registrado con existo");
        }
        if (valido == false) {
            alert("El usuario ya existe");
        }
    };
});

//creamos el controlador pasando $scope y auth
nauticaBarataApp.controller('homeController', function ($scope, $cookies, auth) {
    //devolvemos a la vista el nombre del usuario
    $scope.users = users;
    $scope.username = $cookies.username;
    $scope.password = $cookies.password;
    //la función logout que llamamos en la vista llama a la función
    //logout de la factoria auth
    $scope.changePassword = function (pass) {
        var valido = false;
        if (pass.password == pass.password2) {
            valido = true;
        }
        if (valido == true) {
            angular.forEach($scope.users.items, function (item) {
                if ((item.username == $cookies.username)) {
                    item.password = pass.password;
                }
            })
        }
        alert("contraseña cambiada");
    }
    $scope.logout = function () {
        auth.logout();
        alert("sesion cerrada");
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
});
