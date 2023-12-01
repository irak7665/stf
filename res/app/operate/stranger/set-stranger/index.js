module.exports = angular.module('stf.stranger.set-stranger',[
    
])

.run(['$templateCache', function($templateCache) {
    $templateCache.put(
      'stranger/set-stranger/set-stranger.pug'
    , require('./set-stranger.pug')
    )
  }])
.controller('SetStrangerCtrl',require('./set-stranger-controller'))
