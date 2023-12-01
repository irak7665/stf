module.exports = function SetStrangerCtrl(

    $scope
    , SettingsService
    , $routeParams,
    $http
    ) {

      $scope.defaultStrangers = ''

  $scope.submitForm = function() {
    var serial = $routeParams.serial
    $http({
        method: 'POST',
        url: 'http://192.168.1.102:5000/set_stranger_v1',
        data: {
          contacts: $scope.defaultStrangers,
          serial: serial
        }
      }).then(function successCallback(res) {
        console.log(res)
      })
    }
  $http({
    method: 'POST',
    url: 'http://192.168.1.102:5000/get_stranger',
    data: {
      serial: $routeParams.serial
    }
  }).then(function successCallback(res) {
    $scope.defaultStrangers = res.data.data
    console.log(res.data.data)
  })
}
