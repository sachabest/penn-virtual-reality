namespace cis568.main {

    getModule().config(($stateProvider: ng.ui.IStateProvider, $locationProvider: ng.ILocationProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider) => {
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
                $title: ($title) => {
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
                $title: ($title) => {
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
                $title: ($title) => {
                    return $title + ' - Lectures';
                }
            }
        })
        ;
    });
}