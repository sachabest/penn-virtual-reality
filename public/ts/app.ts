namespace cis568.main {

    var app = angular.module('cis568', [
        'ui.bootstrap',
        'ui.router',
        'ui.router.title'
    ]);

    app.directive('title', ['$rootScope', '$timeout',
    function($rootScope, $timeout) {
        return {
        link: function() {

            var listener = function(event, toState) {

            $timeout(function() {
                $rootScope.title = (toState.data && toState.data.pageTitle) 
                ? toState.data.pageTitle 
                : 'PennVR';
            });
            };

            $rootScope.$on('$stateChangeSuccess', listener);
        }
        };
    }
    ]);

    export var getModule = () => {
        return angular.module('cis568');
    }
}