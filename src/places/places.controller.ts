import {Place} from './place.ts';

module Places {

    export class PlacesController {
        searchQuery : string;

        /*@ngInject*/
        constructor(private places:Place[]){
          this.searchQuery = undefined;
        }
    }
}

export = Places;
