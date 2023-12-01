module.exports = function SetContactCtrl(

    $scope
    , SettingsService
    , $routeParams,
    $http
    ) {

  $scope.defaultContacts = ''

  $scope.submitForm = function() {
    var serial = $routeParams.serial
    console.log('contact:', $scope.defaultContacts)
    console.log('serial:', serial)
    $http({
      method: 'POST',
      url: 'http://192.168.1.102:5000/set_contact',
      data: {
        contact: $scope.defaultContacts,
        serial: serial
      }
    }).then(function successCallback(res) {
      console.log(res)
    })

  }

  $http({
    method: 'POST',
    url: 'http://192.168.1.102:5000/get_contact',
    data: {
      serial: $routeParams.serial
    }
  }).then(function successCallback(res) {
    $scope.defaultContacts = res.data.data
    console.log($scope.defaultContacts)
  })
}
