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
            })
                .state('main.lectures', {
                url: 'lectures',
                templateUrl: 'html/lectures.html',
                controller: 'LecturesController',
                controllerAs: 'ctrl'
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
var cis568;
(function (cis568) {
    var main;
    (function (main) {
        var LecturesController = (function () {
            function LecturesController() {
                this.classes = [
                    {
                        "date": '01/12/17',
                        "topic": 'Introduction and Demos',
                        "recording": 'https://youtu.be/dcMHIaO-K-4',
                        "assignments": [
                            {
                                "name": 'Survey',
                                "link": 'https://docs.google.com/document/d/10VW1gqpBvRblBfY7fMgbAzmb7kFKb82e3Izhps_t7KI/edit?usp=sharing'
                            }
                        ]
                    },
                    {
                        "date": '01/17/17',
                        "topic": 'Graphics in 90 Minutes',
                        "recording": 'https://www.youtube.com/watch?v=MNQFxZWHWVA',
                        "assignments": [
                            {
                                "name": 'Graphics Handwritten',
                                "link": 'https://youtu.be/dd8OU_3ayrg'
                            }
                        ]
                    },
                    {
                        "date": '01/24/17',
                        "topic": 'Three.js basics and OpenGL',
                        "recording": 'none',
                        "assignments": [
                            {
                                "name": 'Three.js project',
                                "link": ''
                            }
                        ]
                    }
                ];
            }
            return LecturesController;
        }());
        main.LecturesController = LecturesController;
        main.getModule().controller("LecturesController", LecturesController);
    })(main = cis568.main || (cis568.main = {}));
})(cis568 || (cis568 = {}));
//# sourceMappingURL=lectures.controller.js.map