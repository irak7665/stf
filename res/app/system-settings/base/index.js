
module.exports = angular.module('stf.system-settings.base', [])
    .run(['$templateCache', function($templateCache) {
      $templateCache.put(
        'system-settings/base/base.pug'
        , require('./base.pug')
      )
    }])
    .controller('BaseCtrl', require('./base-controller'))
