import {IStateProvider} from 'angular-ui-router';
import {PeopleController} from './people.controller.ts';
import {CreateController} from './create.controller.ts';
const templateUrl = require('./people.html');
const templateUrlCreate = require('./create.html');


module People {
    /*@ngInject*/
    export function routes($stateProvider:IStateProvider) {
        $stateProvider
            .state('people', {
                url: '/people',
                templateUrl: templateUrl,
                controller: PeopleController,
                controllerAs: 'vm'
            })
            .state('create', {
                url:'/create',
                templateUrl: templateUrlCreate,
                controller: CreateController,
                controllerAs: 'vm'
            });
    }
}

export = People;