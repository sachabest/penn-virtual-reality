namespace cis568.main {

    var app = angular.module('cis568', [
        'ui.bootstrap',
        'ui.router',
    ]);

    export var getModule = () => {
        return angular.module('cis568');
    }
}