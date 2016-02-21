import {routes} from './places.routes.ts';
import {placeListComponent} from './place.list.component.ts';

module Places {

    /*@ngInject*/
    export const places = angular.module('app.places', ['ui.router'])
        .config(routes)
        .component("placeList", placeListComponent)
        .name;
}

export = Places;