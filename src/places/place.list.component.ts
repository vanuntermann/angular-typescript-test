import {Place} from './place.ts';
const templateUrl = require('./place.list.html');

module Places {

    export class PlaceListController {
        places: Place[];
    }


    export let placeListComponent =  {
        bindings: {
            places : '='
        },
        templateUrl: templateUrl,
        controller: PlaceListController
    };

}
export = Places;