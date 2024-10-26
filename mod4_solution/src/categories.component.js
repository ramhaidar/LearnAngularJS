(function () {
    "use strict";

    angular.module("MenuApp").component("categories", {
        templateUrl: "src/templates/categories.template.html",
        bindings: {
            categories: "<",
        },
    });

    angular
        .module("MenuApp")
        .controller("CategoriesController", CategoriesController);

    CategoriesController.$inject = ["categories", "$window"];
    function CategoriesController(categories, $window) {
        var ctrl = this;
        ctrl.categories = categories;

        ctrl.goBack = function () {
            $window.history.back();
        };
    }
})();
