//module created on bootstrap.js
module.controller("timerCtrl",TimeCtrl)

//DI dependency injection
function TimeCtrl($scope) {
    $scope.time = 0;
    $scope.increase = () => { 
        if($scope.time==9)
            $scope.time = 0;
        else
            $scope.time++; }
}