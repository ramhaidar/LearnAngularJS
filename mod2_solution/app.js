(function () {
    "use strict";

    angular
        .module("ShoppingListCheckOff", [])
        .controller("ToBuyController", ToBuyController)
        .controller("AlreadyBoughtController", AlreadyBoughtController)
        .service("ShoppingListCheckOffService", ShoppingListCheckOffService);

    ToBuyController.$inject = ["ShoppingListCheckOffService"];
    function ToBuyController(ShoppingListCheckOffService) {
        var toBuyCtrl = this;

        // Expose "to buy" list from the service
        toBuyCtrl.items = ShoppingListCheckOffService.getToBuyItems();

        // Handle item buying
        toBuyCtrl.buyItem = function (itemIndex) {
            ShoppingListCheckOffService.buyItem(itemIndex);
        };
    }

    AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var boughtCtrl = this;

        // Expose "already bought" list from the service
        boughtCtrl.items = ShoppingListCheckOffService.getBoughtItems();
    }

    function ShoppingListCheckOffService() {
        var service = this;

        // Pre-populate the to buy list
        var toBuyItems = [
            { name: "cookies", quantity: 10 },
            { name: "chips", quantity: 5 },
            { name: "soda", quantity: 8 },
            { name: "chocolate", quantity: 3 },
            { name: "apples", quantity: 6 },
        ];

        // List to hold bought items
        var boughtItems = [];

        // Get the "to buy" items
        service.getToBuyItems = function () {
            return toBuyItems;
        };

        // Get the "bought" items
        service.getBoughtItems = function () {
            return boughtItems;
        };

        // Move item from "to buy" to "bought"
        service.buyItem = function (itemIndex) {
            var item = toBuyItems[itemIndex];
            toBuyItems.splice(itemIndex, 1);
            boughtItems.push(item);
        };
    }
})();
