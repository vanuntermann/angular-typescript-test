import {routes} from './places.routes.ts';
import {PlacesService} from './places.service';
import 'angular-ui-bootstrap';
import {placeListComponent} from './place.list.component.ts';

module Places {

    /*@ngInject*/
    export const places = angular.module('app.places', ['ui.bootstrap', 'ui.bootstrap.typeahead', 'ui.router'])
        .config(routes)
        .component("placeList", placeListComponent)
        .service("placesService", PlacesService)
        .name;
}

export = Places;
