import {Place} from './place.ts';
const templateUrl = require('./place.list.html');

module Places {

    export class PlaceListController {
        places: Place[] = [{name: "place 1", point: new usig.Punto(102224.9040681,103284.11371559)} , {name: "place 2", point: new usig.Punto(103051,101533)}];
    }


    export let placeListComponent =  {
        templateUrl: templateUrl,
        controller: PlaceListController
    };

}
export = Places;