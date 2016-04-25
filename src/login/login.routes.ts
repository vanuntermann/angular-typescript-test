import {IStateProvider} from "angular-ui-router";
const loginUrl = require('./login.html');


module Login {

    /*@ngInject*/
    export function routes($stateProvider:IStateProvider, $authProvider, $windowProvider) {
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: loginUrl,
                controller: 'LoginCtrl'
            });

        $authProvider.google({
            url: 'http://localhost:3000/auth/google',
            authorizationEndpoint: 'https://accounts.google.com/o/oauth2/auth',
            redirectUri: 'http://localhost:8080/prestaciones',
            requiredUrlParams: ['scope', 'state'],
            optionalUrlParams: ['display'],
            scope: ['openid', 'profile', 'email'],
            scopePrefix: 'openid',
            scopeDelimiter: ' ',
            display: 'popup',
            state: function () {
              return $windowProvider.$get().localStorage.getItem('ba.auth.state'); // TODO: validation / error handling.
            },
            type: '2.0',
            popupOptions: { width: 452, height: 633 },
            clientId: '525648621477-3u0h887rt0el7va1i1bbbo8hc885r3f9.apps.googleusercontent.com'
        });
    }
}

export = Login;
