import {Prestacion} from './prestacion.ts';
import * as _ from 'lodash';

module Prestaciones {

    export function orFilter() {
        return function(inputArray: Prestacion[], args: string) : Prestacion[] {
            return inputArray.filter(item => _.includes(['concepto', 'rubro', 'palabrasClaves'].map(key => item[key]).join(), args));
        };
    }

}
export = Prestaciones;