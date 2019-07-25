
module.controller("parentCtrl", ParentCtrl)

// DI dependency injection - IOC
function ParentCtrl($scope, $rootScope, $http, $q,logicService) {

    $scope.todos = []
    $scope.id = 0
    $scope.extracted = undefined

    logicService.httpGet()
    
    $scope.getID = function() {
        var intID = parseInt($scope.id)
        if((intID>0)&&(intID<$scope.todos.length -1))
            $scope.extracted =$scope.todos[intID]
        else
            alert('Error!')
    }

}