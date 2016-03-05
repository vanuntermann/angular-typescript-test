import {Prestacion} from './prestacion.ts';
import * as _ from 'lodash';

module Prestaciones {

    export function orFilter() {
        return function(prestaciones: Prestacion[], palabra: string) : Prestacion[] {
            return prestaciones.filter(item => _.includes(['concepto', 'rubro', 'palabrasClaves'].map(key => item[key]).join(), palabra));
        };
    }

}
export = Prestaciones;