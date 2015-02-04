var productos = {};
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

nauticaBarataApp.controller('prodCtrl', function ($scope, auth) {
    $scope.productos = productos;
});
