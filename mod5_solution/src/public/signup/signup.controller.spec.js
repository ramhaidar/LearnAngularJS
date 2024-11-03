describe("SignUpController", function () {
    var $controller, $httpBackend, $rootScope, UserService;

    beforeEach(module("public"));

    beforeEach(inject(function (
        _$controller_,
        _$httpBackend_,
        _$rootScope_,
        _UserService_
    ) {
        $controller = _$controller_;
        $httpBackend = _$httpBackend_;
        $rootScope = _$rootScope_;
        UserService = _UserService_;

        // Mock the template requests
        $httpBackend.whenGET("src/public/public.html").respond(200, "");
        $httpBackend
            .whenGET("src/public/home/home.html")
            .respond(200, "<div>Mock Template</div>");
    }));

    it("should determine if the favorite item exists in the menu", function () {
        var $scope = $rootScope.$new();
        var controller = $controller("SignUpController", {$scope: $scope});

        // Mock valid menu item response
        var validMenuItem = {name: "Valid Item"};
        $httpBackend
            .whenGET(
                "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/A/menu_items/0.json"
            )
            .respond(200, validMenuItem);

        // Mock invalid menu item response
        $httpBackend
            .whenGET(
                "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/B/menu_items/0.json"
            )
            .respond(200, null);

        // Test valid menu item
        controller.user.favoriteDish = "A1";
        controller.validateFavoriteDish();
        $httpBackend.flush();
        expect(controller.menuItemExists).toBe(true);
    });

    it("should determine if the favorite item does not exist in the menu", function () {
        var $scope = $rootScope.$new();
        var controller = $controller("SignUpController", {$scope: $scope});

        // Mock invalid menu item response
        $httpBackend
            .whenGET(
                "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/C/menu_items/0.json"
            )
            .respond(200, null);

        // Test invalid menu item
        controller.user.favoriteDish = "C1";
        controller.validateFavoriteDish();
        $httpBackend.flush();
        expect(controller.menuItemExists).toBe(false);
    });
});
