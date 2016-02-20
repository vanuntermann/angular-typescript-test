import {routes} from "./people.routes.ts";
import * as angular from 'angular';
import {PeopleController} from './people.controller.ts';
import {PeopleService} from './people.service.ts'

module People {

    export const people = angular.module('app.people', ['ui.router'])
        .config(routes)
        .controller('PeopleController', PeopleController)
        .service('peopleService', PeopleService)
        .name;
}

export = People;