(function () {
    "use strict";

    // Module declaration
    angular
        .module("NarrowItDownApp", [])
        .controller("NarrowItDownController", NarrowItDownController)
        .service("MenuSearchService", MenuSearchService)
        .directive("foundItems", FoundItemsDirective);

    // Controller Definition
    NarrowItDownController.$inject = ["MenuSearchService"];
    function NarrowItDownController(MenuSearchService) {
        var ctrl = this;
        ctrl.searchTerm = "";
        ctrl.found = [];
        ctrl.message = "";

        // Function to search and narrow down menu items
        ctrl.narrowItDown = function () {
            if (!ctrl.searchTerm) {
                ctrl.found = [];
                ctrl.message = "Nothing found";
                return;
            }

            MenuSearchService.getMatchedMenuItems(ctrl.searchTerm)
                .then(function (result) {
                    ctrl.found = result;
                    ctrl.message = ctrl.found.length ? "" : "Nothing found";
                })
                .catch(function () {
                    ctrl.message = "Error retrieving menu items";
                });
        };

        // Function to remove an item from the list
        ctrl.removeItem = function (index) {
            ctrl.found.splice(index, 1);
        };
    }

    // Service Definition
    MenuSearchService.$inject = ["$http"];
    function MenuSearchService($http) {
        var service = this;

        // Function to get matched menu items
        service.getMatchedMenuItems = function (searchTerm) {
            return $http({
                method: "GET",
                url: "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json",
            }).then(function (response) {
                var allCategories = response.data;
                var foundItems = [];

                // Iterating through each category in the JSON data
                angular.forEach(allCategories, function (category) {
                    angular.forEach(category.menu_items, function (item) {
                        if (
                            item.description &&
                            item.description
                                .toLowerCase()
                                .includes(searchTerm.toLowerCase())
                        ) {
                            foundItems.push({
                                name: item.name,
                                short_name: item.short_name,
                                description: item.description,
                            });
                        }
                    });
                });

                return foundItems;
            });
        };
    }

    // Directive Definition
    function FoundItemsDirective() {
        var ddo = {
            templateUrl: "loader/itemsloaderindicator.template.html",
            scope: {
                items: "<",
                onRemove: "&",
            },
            controller: FoundItemsDirectiveController,
            controllerAs: "list",
            bindToController: true,
        };

        return ddo;
    }

    // Directive Controller (optional if additional logic is needed)
    function FoundItemsDirectiveController() {
        var list = this;
    }
})();
