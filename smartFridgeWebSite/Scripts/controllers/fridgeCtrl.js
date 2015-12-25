smartFridge.controller('FridgeCtrl', function ($scope, api) {

    $scope.fridges;
    $scope.email = $('#email').val();

    api.getFridges($scope.email).then(function (response) {
        $scope.fridges = response;
    });
    setInterval(function () {
        api.getFridges($scope.email).then(function (response) {
            $scope.fridges = response;
        });
    }, 15000);

    $scope.showHideMenu = function () {
        $('.header').toggleClass('opened-menu');
        $('.content').toggleClass('opened-menu');
        $('.dark-div').toggleClass('opened-menu');
    };

});