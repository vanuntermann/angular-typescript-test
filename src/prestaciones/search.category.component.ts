import {SearchCategory} from './search.category.ts';
const templateUrl = require('./search.category.html');

module Prestaciones {

    export class SearchCategoryController {
        category: SearchCategory;
        toggleViewMore: () => void;
        more: boolean;
        constructor() {
          this.more = false;
          this.toggleViewMore = () => {
            this.more = !this.more;
          }
        }
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



