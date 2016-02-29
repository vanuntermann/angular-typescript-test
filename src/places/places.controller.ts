import {Place} from './place.ts';

module Places {

    export class PlacesController {

        /*@ngInject*/
        constructor(private places:Place[]){

        }
    }
}

export = Places;