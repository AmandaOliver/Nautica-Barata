nauticaBarataApp.controller('recomendadosCtrl', function ($scope) {
    $scope.items = [];
    //sacar items de la tabla recomendados
    for (var i = 0; i < 100; i++) $scope.items.push(i);
});
