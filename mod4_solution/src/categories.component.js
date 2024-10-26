(function () {
    "use strict";

    angular.module("MenuApp").component("categories", {
        templateUrl: "src/templates/categories.template.html",
        bindings: {
            categories: "<",
        },
    });

    // Categories Controller
    angular
        .module("MenuApp")
        .controller("CategoriesController", CategoriesController);

    CategoriesController.$inject = ["categories"];
    function CategoriesController(categories) {
        var ctrl = this;
        ctrl.categories = categories;
    }
})();
