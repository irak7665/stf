module.exports = angular.module('stf.chat-data', [
])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/chat-data', {
      template: require('./chat-data.pug')
    })
  }])
  .controller('SetChatdataCtrl', require('./set-chat-controller'))
