module.controller("calcCtrl",CalcCtrl)

function CalcCtrl($scope,$rootScope) {
    $rootScope.objNumber = { x : 0 , y : 0, name : ''}
    
    $scope.change1 = function() {
        $rootScope.objNumber.x++
    }
    $scope.change2 = function() {
        $rootScope.objNumber.y++
    }
    /*
    $scope.$watch('x', function(newX, old) {
        alert(`old x = ${old} new x = ${newX}`)
    })
    */
}