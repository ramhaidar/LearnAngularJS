(function () {
    "use strict";

    angular.module("MenuApp").component("items", {
        templateUrl: "src/templates/items.template.html",
        bindings: {
            items: "<",
        },
    });

    // Items Controller
    angular.module("MenuApp").controller("ItemsController", ItemsController);

    ItemsController.$inject = ["items"];
    function ItemsController(items) {
        var ctrl = this;
        ctrl.items = items;
    }
})();
