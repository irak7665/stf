module.exports = function DeviceSettingCtrl(

  $scope
  , SettingsService
  , $routeParams,
  $http
) {

  $scope.defaultData = ''

  $scope.submitForm = function() {
    var serial = $routeParams.serial
    $http({
      method: 'POST',
      url: 'http://192.168.1.102:5000/device_setting',
      data: {
        init_message_list: $scope.defaultData,
        serial: serial
      }
    }).then(function successCallback(res) {
    })
  }
  $http({
    method: 'GET',
    url: 'http://192.168.1.102:5000/get_device_setting',
    data: {
      serial: $routeParams.serial
    }
  }).then(function successCallback(res) {
    $scope.defaultData = res.data.data
  })
}
