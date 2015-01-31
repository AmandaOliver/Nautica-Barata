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
