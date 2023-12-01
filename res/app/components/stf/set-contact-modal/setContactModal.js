angular.module('stf').component('setContactModal', {
  templateUrl: 'res/app/components/stf/set-contact-modal/set-contact-modal.html',
  controller: 'SetContactModalController',
  controllerAs: 'vm',
  bindings: {
    resolve: '<',
    close: '&',
    dismiss: '&'
  }
})
