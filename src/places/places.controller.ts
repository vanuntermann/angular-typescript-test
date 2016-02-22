import {Place} from './place.ts';

module Places {

    export class PlacesController {
        places: Place[] = [{name: "place 1", point: new usig.Punto(102224.9040681,103284.11371559)} , {name: "place 2", point: new usig.Punto(103051,101533)}];
        
    }
}

export = Places;