import {routes} from "./login.routes.ts";
import * as angular from "angular";

module Login {

    export const login = angular.module('app.login', ['ui.router', 'satellizer'])
        .config(routes)
        .controller('LoginCtrl', function($scope, $auth) {

            $scope.authenticate = function(provider) {
                $auth.authenticate(provider);
            };

        })
        .name;
}

export = Login;