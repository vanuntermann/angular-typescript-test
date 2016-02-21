import {IStateProvider} from 'angular-ui-router';
const templateUrl = require('./places.html');

module Places {
    
    /*@ngInject*/
    export function routes($stateProvider:IStateProvider) {
        $stateProvider
            .state('places', {
                url: '/places',
                templateUrl: templateUrl,
            });
    }
}

export = Places;