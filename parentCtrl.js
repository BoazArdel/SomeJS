
module.controller("parentCtrl", ParentCtrl)

// DI dependency injection - IOC
function ParentCtrl($scope, valueService,$timeout) {

    var numbers = [1,3,6,5,3,5,1,6]
    $scope.X = ["X","X","X","X","X","X","X","X"]

    $scope.num = function(id) {
        if($scope.X[id] == "X") {
            $scope.X[id] = numbers[id]
            valueService['tries'].push({val : numbers[id], index : id})
        }
        if(valueService['tries'].length >= 2){
            valueService['num_of_tries']++
            if(valueService['tries'][0].val==valueService['tries'][1].val){
                $scope.X[valueService['tries'][0].index] = valueService['tries'][0].val
                $scope.X[valueService['tries'][1].index] = valueService['tries'][1].val
                valueService['correct']++
                valueService['tries'] = []

            }
            else {
                $timeout(() => {
                    $scope.X[valueService['tries'][0].index] = 'X'
                    $scope.X[valueService['tries'][1].index] = 'X'
                    valueService['tries'] = []

                },1000);
            }
        }
    }

}

function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}