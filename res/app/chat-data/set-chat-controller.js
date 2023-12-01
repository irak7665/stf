module.exports = function SetChatdataCtrl(

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
      url: 'http://192.168.1.102:5000/init_message_list',
      data: {
        init_message_list: $scope.defaultData,
        // serial: serial
      }
    }).then(function successCallback(res) {
    })
  }
  $http({
    method: 'GET',
    url: 'http://192.168.1.102:5000/get_init_message_list',
  }).then(function successCallback(res) {
    $scope.defaultData = res.data.data
  })
}
