
module.controller("parentCtrl", ParentCtrl)

// DI dependency injection - IOC
function ParentCtrl($scope, $rootScope) {

    $scope.name = ''
    $scope.email = ''
    $scope.age = ''
    $scope.getClass = function() {
        if ($scope.name == '' &&  $scope.email == '' && $scope.age == '')
            return 'red'
        else if(($scope.name == '') ||  ($scope.email == '') || ($scope.age == ''))
            return 'orange'
        else if(parseInt($scope.age)<18)
            return 'blue'
        else
            return 'green'
    }
}