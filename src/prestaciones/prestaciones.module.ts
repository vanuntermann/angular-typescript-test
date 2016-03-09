import {routes} from './prestaciones.routes.ts';
import 'angular-ui-bootstrap';
import 'bootstrap.css';
import 'BAstrap.css';
import './prestaciones.less';

module Prestaciones {

    /*@ngInject*/
    export const prestaciones = angular.module('app.prestaciones', ['ui.bootstrap', 'ui.router'])
        .config(routes)
        .name;
}

export = Prestaciones;

