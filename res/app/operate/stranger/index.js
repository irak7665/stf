module.exports = angular.module('stf.stranger',[
    require('./set-stranger').name
])
    .config(function($routeProvider) {
        $routeProvider
            .when('/stranger/:serial',{
                template: require('./stranger.pug')
                ,controller: 'StrangerCtrl'
            })
    })
.controller('StrangerCtrl',require('./stranger-controller'))

