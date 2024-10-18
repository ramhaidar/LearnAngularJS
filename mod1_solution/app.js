(function () {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.lunchMenu = "";
        $scope.message = "";
        $scope.isError = false;

        $scope.checkIfTooMuch = function () {
            if ($scope.lunchMenu.trim() === "") {
                $scope.message = "Please enter data first";
                $scope.isError = true;
                return;
            }

            var items = $scope.lunchMenu.split(',').filter(function (item) {
                return item.trim() !== "";
            });

            if (items.length === 0) {
                $scope.message = "Please enter data first";
                $scope.isError = true;
            } else if (items.length <= 3) {
                $scope.message = "Enjoy!";
                $scope.isError = false;
            } else {
                $scope.message = "Too much!";
                $scope.isError = false;
            }
        };
    }
})();
