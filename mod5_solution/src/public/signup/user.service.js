(function () {
    "use strict";

    angular.module("public").service("UserService", UserService);

    function UserService() {
        var service = this;
        service.user = null;

        service.saveUser = function (user) {
            service.user = user;
        };

        service.getUser = function () {
            return service.user;
        };
    }
})();
