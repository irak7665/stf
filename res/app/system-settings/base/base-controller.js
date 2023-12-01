
module.exports = function BaseCtrl(
    $scope
    , $http,
    $timeout
    ) {
        $scope.defaultData = {
            interval: '',
            pagesize: '',
            loop_message_time: '',
            init_message: '',
            add_contact_flag: false,
          wait_message_time: '',
            // globalApplication: false
        }
        $scope.switchChange = function() {
          console.log('复选框状态: ', $scope.defaultData.add_contact_flag)

        }
        $scope.submitForm = function() {
            console.log($scope.defaultData)
            $http({
                method: 'POST',
                url: 'http://192.168.1.102:5000/system_setting',
                data: $scope.defaultData
            }).then(function successCallback(res) {
                console.log(res)
            })

        }
        // $http({
        //     method: 'GET',
        //     url: 'http://127.0.0.1:5000/get_setting'
        // }).then(function successCallback(res) {
        //   // console.log(res.data)
        //   $scope.defaultData = res.data.data
        //   console.log($scope.defaultData)
        //   }
        // )
        $http({
            method: 'GET',
            url: 'http://192.168.1.102:5000/get_setting'

        }).then(function successCallback(res) {
          $timeout(function() {
            $scope.defaultData = res.data.data
            console.log(res)
          })
        })

}
