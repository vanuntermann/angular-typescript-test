import {Place} from './place.ts';
const templateUrl = require('./place.list.html');

module Places {

    export class PlaceListController {
        places: Place[] = [{name: "place 1"} , {name: "place 2"}, {name: "place 3"}];
    }


    export let placeListComponent =  {
        templateUrl: templateUrl,
        controller: PlaceListController
    };

}
export = Places;