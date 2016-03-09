import {routes} from './prestaciones.routes.ts';
import 'angular-ui-bootstrap';
import 'bootstrap.css';
import 'BAstrap.css';
import './prestaciones.less';
import {navbarComponent} from './navbar.component.ts';
import {searchComponent} from './search.component.ts';
import {searchCategoryComponent} from './search.category.component.ts';

module Prestaciones {

    /*@ngInject*/
    export const prestaciones = angular.module('app.prestaciones', ['ui.bootstrap', 'ui.router'])
        .config(routes)
        .component('baNavbar', navbarComponent)
        .component('baReclamosSearch', searchComponent)
        .component('baSearchCategory', searchCategoryComponent)
        .name;
}

export = Prestaciones;

