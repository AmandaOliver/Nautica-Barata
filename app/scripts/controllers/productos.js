var productos = {};
//carga de productos de productos.json
nauticaBarataApp.run(function ($http) {
    $http.get("scripts/productos.json").success(function (data) {
        productos.items = data;
    });
});

nauticaBarataApp.filter("checkedProd", function () {
    return function (items) {
        var resultArr = [];
        angular.forEach(items, function (item, showComplete) {

            if (item.done == false || showComplete == true) {
                resultArr.push(item);
            }
        });
        return resultArr;
    }
});

//controlador para añadir nuevos productos
nauticaBarataApp.controller('prodCtrl', function ($scope) {
    $scope.productos = productos;
    $scope.addProd = function (prodDetails) {
        var valido = true;
        angular.forEach($scope.productos.items, function (item) {
            if ((item.nombre == prodDetails.nombre)) {
                valido = false;
            }
        })
        if (valido == true) {
            productos.items.push({
                categoria: prodDetails.username,
                nombre: prodDetails.nombre,
                precio: prodDetails.precio,
                descripcion: prodDetails.descripcion,
                imagen: prodDetails.imagen
            });
            alert("Producto registrado con existo");
        }
        if (valido == false) {
            $scope.valido = true;
        }
    };
});
