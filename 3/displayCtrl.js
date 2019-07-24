module.controller("displayCtrl",DisplayCtrl)

function DisplayCtrl($scope,$rootScope) {
    $scope.myobj = $rootScope.objNumber
    $scope.$watch('myobj.name', function(newX, old) {
        if(newX==='boaz')
        alert(`Identical`)
    })
}