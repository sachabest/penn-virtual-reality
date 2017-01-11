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