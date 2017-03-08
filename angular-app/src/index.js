import vendors from 'vendor';

import services from 'services/services.module';
import components from 'components/components.module';
import statesModule from 'states/all-comments/states.moudle';


function appConfig($stateProvider, $urlRouterProvider, $httpProvider) {
   $urlRouterProvider.otherwise('/all-comments');

}

angular.module('bigpanda.test', [
    'ui.router',
    'ui.bootstrap',
    services.name,
    statesModule.name,
    components.name
]).config(appConfig)

angular.bootstrap(document, ['bigpanda.test']);
