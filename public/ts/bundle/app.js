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
                var _this = this;
                this.datePattern = "/(\d{2})\/(\d{2})\/(\d{4})/;";
                this.getRowClass = function (classObject) {
                    var date = new Date(classObject.date.replace(_this.datePattern, "$3/$2/$1"));
                    var today = new Date();
                    if (date.toDateString() == today.toDateString()) {
                        return "success";
                    }
                    else if (date < today) {
                        return "active";
                    }
                    return "";
                };
                this.classes = [
                    {
                        "date": '01/12/17',
                        "topic": 'Introduction and Demos',
                        "recording": 'https://youtu.be/dcMHIaO-K-4',
                        "assignments": [
                            {
                                "name": 'Survey',
                                "link": 'https://docs.google.com/document/d/10VW1gqpBvRblBfY7fMgbAzmb7kFKb82e3Izhps_t7KI/edit?usp=sharing'
                            },
                            {
                                "name": 'Proposal Feedback',
                                "link": 'https://docs.google.com/document/d/1we4VxLXi1Ywfcaere2z1zyuP3zEk5zWRLU_MIxh_SGE/edit?usp=sharing'
                            }
                        ]
                    },
                    {
                        "date": '01/17/17',
                        "topic": 'Graphics in 90 Minutes',
                        "recording": 'https://youtu.be/dd8OU_3ayrg',
                        "assignments": [
                            {
                                "name": 'Graphics Handwritten',
                                "link": 'https://docs.google.com/document/d/1Ij3S_3zrBSl_7sbwDZeJV-Em1Fmkz2-ffyOX8SfLtyI/edit?usp=sharing'
                            }
                        ]
                    },
                    {
                        "date": '01/19/17',
                        "topic": 'Teh rest of Graphics in another 90 minutes',
                        "recording": 'https://youtu.be/MxxumFDt6Ek',
                        "assignments": [
                            {
                                "name": 'Go to PennApps',
                                "link": 'https://pennapps.com'
                            }
                        ]
                    },
                    {
                        "date": '01/24/17',
                        "topic": 'Three.js basics and OpenGL',
                        "recording": 'https://youtu.be/Pg8TG4M-V7o',
                        "assignments": [
                            {
                                "name": 'Three.js project',
                                "link": 'https://docs.google.com/document/d/1G0a5_OgVqy5dQ9mHTtOPbZU8ibySzAVlTJY0uG3RmDA/edit?usp=sharing'
                            }
                        ]
                    },
                    {
                        "date": '01/26/17',
                        "topic": 'Three.js Demos and Getting Started',
                        "recording": 'none',
                        "assignments": []
                    },
                    {
                        "date": '01/31/17',
                        "topic": 'Noise and Three.js Gaze Input',
                        "recording": 'https://youtu.be/ejTNjYWsIwU',
                        "assignments": []
                    },
                ];
            }
            return LecturesController;
        }());
        main.LecturesController = LecturesController;
        main.getModule().controller("LecturesController", LecturesController);
    })(main = cis568.main || (cis568.main = {}));
})(cis568 || (cis568 = {}));
//# sourceMappingURL=lectures.controller.js.map