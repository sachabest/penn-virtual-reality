var cis568;
(function (cis568) {
    var main;
    (function (main) {
        var app = angular.module('cis568', [
            'ui.bootstrap',
            'ui.router',
        ]);
        main.getModule = function () {
            return angular.module('cis568');
        };
    })(main = cis568.main || (cis568.main = {}));
})(cis568 || (cis568 = {}));
//# sourceMappingURL=app.js.map
var cis568;
(function (cis568) {
    var main;
    (function (main) {
        var AppController = (function () {
            function AppController($state) {
                this.$state = $state;
            }
            return AppController;
        }());
        main.AppController = AppController;
        main.getModule().controller("AppController", AppController);
    })(main = cis568.main || (cis568.main = {}));
})(cis568 || (cis568 = {}));
//# sourceMappingURL=app.controller.js.map
var cis568;
(function (cis568) {
    var main;
    (function (main) {
        main.getModule().config(function ($stateProvider, $locationProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });
            $stateProvider.state('main', {
                url: '/',
                templateUrl: 'html/layout.html',
                controller: 'AppController',
                controllerAs: 'ctrl',
                abstract: true
            })
                .state('main.home', {
                url: '',
                templateUrl: 'html/home.html',
                controller: 'HomeController',
                controllerAs: 'ctrl',
            });
        });
    })(main = cis568.main || (cis568.main = {}));
})(cis568 || (cis568 = {}));
//# sourceMappingURL=app.routes.js.map
var cis568;
(function (cis568) {
    var main;
    (function (main) {
        var HomeController = (function () {
            function HomeController() {
            }
            return HomeController;
        }());
        main.HomeController = HomeController;
        main.getModule().controller("HomeController", HomeController);
    })(main = cis568.main || (cis568.main = {}));
})(cis568 || (cis568 = {}));
//# sourceMappingURL=home.controller.js.map