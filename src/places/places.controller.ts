import {Place} from './place.ts';

module Places {

    export class PlacesController {
        searchQuery : string;
        onSearchQuerySelect : ($item: Place) => any;

        /*@ngInject*/
        constructor(private places:Place[]){
          this.searchQuery = undefined;
          this.onSearchQuerySelect = function ($item) {
            console.log('selected a place!!!', $item);
          };
        }
    }
}

export = Places;
