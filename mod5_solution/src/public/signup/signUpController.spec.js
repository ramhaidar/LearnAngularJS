describe("SignUpController", function () {
    var $httpBackend, $ctrl, $rootScope;

    beforeEach(module("public"));

    beforeEach(inject(function (
        $componentController,
        _$httpBackend_,
        _$rootScope_
    ) {
        $httpBackend = _$httpBackend_;
        $rootScope = _$rootScope_;

        $ctrl = $componentController("signUpController", {
            $http: _$httpBackend_,
        });
    }));

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it("should set menuItemExists to true when favorite dish exists", function () {
        // Arrange
        var shortName = "A1";
        var category = shortName.charAt(0);
        var menuNumber = shortName.slice(1) - 1;
        var url =
            "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/" +
            category +
            "/menu_items/" +
            menuNumber +
            ".json";

        $httpBackend.expectGET(url).respond(200, {name: "Existing Dish"});

        // Act
        $ctrl.user.favoriteDish = shortName;
        $ctrl.validateFavoriteDish();

        // Flush the backend to execute the request
        $httpBackend.flush();

        // Assert
        expect($ctrl.menuItemExists).toBe(true);
    });

    it("should set menuItemExists to false when favorite dish does not exist", function () {
        // Arrange
        var shortName = "A1";
        var category = shortName.charAt(0);
        var menuNumber = shortName.slice(1) - 1;
        var url =
            "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/" +
            category +
            "/menu_items/" +
            menuNumber +
            ".json";

        $httpBackend.expectGET(url).respond(404, "");

        // Act
        $ctrl.user.favoriteDish = shortName;
        $ctrl.validateFavoriteDish();

        // Flush the backend to execute the request
        $httpBackend.flush();

        // Assert
        expect($ctrl.menuItemExists).toBe(false);
    });
});
