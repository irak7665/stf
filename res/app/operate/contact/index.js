module.exports = angular.module('stf.contact',[
    require('./set-contact').name
])
    .config(function($routeProvider) {
        $routeProvider
            .when('/contact/:serial',{
                template: require('./contact.pug')
                ,controller: 'ContactCtrl'
            })
    })
.controller('ContactCtrl',require('./contact-controller'))

