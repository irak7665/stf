module.exports = angular.module('ui-system-settings', [
  require('./base').name
])
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/system-settings', {
        template: require('./system-settings.pug')
      })
    }])
    .controller('SystemSettingsCtrl', require('./system-settings-controller'))
