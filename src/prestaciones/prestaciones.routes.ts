import {IStateProvider} from 'angular-ui-router';
import {HomeController} from './home.controller.ts';
const templateUrl = require('./home.html');

module Places {
    
    /*@ngInject*/
    export function routes($stateProvider:IStateProvider) {
        $stateProvider
            .state('prestaciones', {
                url: '/prestaciones',
                abstract: true,
                template: '<ui-view/>'
            })
            .state('prestaciones.home', {
                url: '',
                templateUrl: templateUrl,
                controller: HomeController,
                controllerAs: "homeCtrl"
            })
            .state('prestaciones.view', {
              url: '/view/:id',
                template: 'In context of prestacion {{ viewCtrl.id }}. <a ui-sref="login">Go to login</a>',
                controller: function ($stateParams, $window) { 
                  this.id = $stateParams.id;
                  $window.localStorage.setItem('ba.auth.state', this.id);
                },
                controllerAs: 'viewCtrl'
            });
    }
}

export = Places;
