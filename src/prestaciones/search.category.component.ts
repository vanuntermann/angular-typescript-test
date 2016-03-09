import {SearchCategory} from './search.category.ts';
const templateUrl = require('./search.category.html');

module Prestaciones {

    export class SearchCategoryController {
        category: SearchCategory;
    }

    export let searchCategoryComponent =  {
        bindings: {
            category: '='
        },
        templateUrl: templateUrl,
        controller: SearchCategoryController
    };

}
export = Prestaciones;



