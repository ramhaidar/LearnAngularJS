(function () {
    "use strict";

    angular.module("MenuApp").component("items", {
        templateUrl: "src/templates/items.template.html",
        bindings: {
            items: "<",
        },
    });

    angular.module("MenuApp").controller("ItemsController", ItemsController);

    ItemsController.$inject = ["items", "$window"];
    function ItemsController(items, $window) {
        var ctrl = this;
        ctrl.items = items;

        ctrl.goBack = function () {
            $window.history.back();
        };
    }
})();
