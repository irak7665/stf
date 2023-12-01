module.exports = angular.module('stf.contact', ['ngDialog'])
  .config(function($routeProvider) {

    $routeProvider
      .when('/contact', {
        template: require('./contact.html')
      })
  })
  .controller('Contact', require('./contact-controller'))
