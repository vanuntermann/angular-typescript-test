import {SearchCategory} from './search.category.ts';
const templateUrl = require('./search.html');

module Prestaciones {

    function category(title : string, elements : string[]) : SearchCategory {
      return { title: title, elements: elements };
    }

    export class SearchController {
        categories : SearchCategory[];

        constructor() {
          this.categories = [
            category('Arbolado', ['Plazas y parques', 'Plantación' ]),
            category('Limpieza', ['Alcantarilla y/o sumidero', 'Animales' ])
          ];
        }
    }

    export let searchComponent =  {
        bindings: {
        },
        templateUrl: templateUrl,
        controller: SearchController
    };

}
export = Prestaciones;


