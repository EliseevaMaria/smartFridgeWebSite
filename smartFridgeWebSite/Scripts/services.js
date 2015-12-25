smartFridge
    .factory('api', function ($q, $http) {
        var api = {};

        api.showHideMenu = function () {
            $('.header').toggleClass('opened-menu');
            $('.content').toggleClass('opened-menu');
            $('.dark-div').toggleClass('opened-menu');
        };

        api.getFridges = function (email) {
            var deferred = $q.defer();

            $.getJSON('http://smartfridgeapi.azurewebsites.net/api/fridge/?email=' + email, function (data) {
                deferred.resolve(data);
            });

            return deferred.promise
        };

        return api;
    });