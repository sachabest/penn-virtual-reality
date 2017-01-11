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
        })
        ;
    });
}