(function () {
    "use strict";

    angular.module("public").controller("SignUpController", SignUpController);

    SignUpController.$inject = ["$http", "UserService"];
    function SignUpController($http, UserService) {
        var $ctrl = this;
        $ctrl.user = {};
        $ctrl.menuItemExists = true;
        $ctrl.infoSaved = false;

        $ctrl.validateFavoriteDish = function () {
            var shortName = $ctrl.user.favoriteDish;
            if (shortName) {
                var category = shortName.charAt(0);
                var menuNumber = parseInt(shortName.slice(1)) - 1; // Ensure menuNumber is correctly calculated
                var url =
                    "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/" +
                    category +
                    "/menu_items/" +
                    menuNumber +
                    ".json";

                $http
                    .get(url)
                    .then(function (response) {
                        if (response.data) {
                            $ctrl.menuItemExists = true;
                        } else {
                            $ctrl.menuItemExists = false;
                        }
                    })
                    .catch(function () {
                        $ctrl.menuItemExists = false;
                    });
            } else {
                $ctrl.menuItemExists = true;
            }
        };

        $ctrl.submit = function (isValid) {
            if (isValid) {
                var shortName = $ctrl.user.favoriteDish;
                var category = shortName.charAt(0);
                var menuNumber = parseInt(shortName.slice(1)) - 1; // Ensure menuNumber is correctly calculated
                var url =
                    "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/" +
                    category +
                    "/menu_items/" +
                    menuNumber +
                    ".json";

                $http
                    .get(url)
                    .then(function (response) {
                        if (response.data) {
                            console.log("User signed up:", $ctrl.user);
                            $ctrl.menuItemExists = true;
                            UserService.saveUser($ctrl.user);
                            $ctrl.infoSaved = true;
                        } else {
                            $ctrl.menuItemExists = false;
                            $ctrl.infoSaved = false;
                        }
                    })
                    .catch(function () {
                        $ctrl.menuItemExists = false;
                        $ctrl.infoSaved = false;
                    });
            }
        };
    }
})();
