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
                abstract: true,
                resolve: {
                    $title: function ($title) {
                        return 'Penn Virtual Reality';
                    }
                }
            })
                .state('main.home', {
                url: '',
                templateUrl: 'html/home.html',
                controller: 'HomeController',
                controllerAs: 'ctrl',
                resolve: {
                    $title: function ($title) {
                        return $title + ' - Home';
                    }
                }
            })
                .state('main.lectures', {
                url: 'lectures',
                templateUrl: 'html/lectures.html',
                controller: 'LecturesController',
                controllerAs: 'ctrl',
                resolve: {
                    $title: function ($title) {
                        return $title + ' - Lectures';
                    }
                }
            });
        });
    })(main = cis568.main || (cis568.main = {}));
})(cis568 || (cis568 = {}));
//# sourceMappingURL=app.routes.js.map