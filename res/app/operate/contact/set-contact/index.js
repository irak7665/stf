module.exports = angular.module('stf.contact.set-contact',[
    
])

.run(['$templateCache', function($templateCache) {
    $templateCache.put(
      'contact/set-contact/set-contact.pug'
    , require('./set-contact.pug')
    )
  }])
.controller('SetContactCtrl',require('./set-contact-controller'))
