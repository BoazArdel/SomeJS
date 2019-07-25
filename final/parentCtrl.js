
module.controller("parentCtrl", ParentCtrl)

// DI dependency injection - IOC
function ParentCtrl($scope, valueService,$timeout) {

    var numbers = shuffle([1,1,2,2,3,3,4,4])
    $scope.X = ["X","X","X","X","X","X","X","X"]

    $scope.num = function(id) {
        if(($scope.X[id] == "X") && (!valueService['lock'])) {
            $scope.X[id] = numbers[id]
            valueService['tries'].push({val : numbers[id], index : id})
        }
        if((valueService['tries'].length >= 2) && (!valueService['lock'])){
            valueService['num_of_tries']++
            if(valueService['tries'][0].val==valueService['tries'][1].val){
                $scope.X[valueService['tries'][0].index] = valueService['tries'][0].val
                $scope.X[valueService['tries'][1].index] = valueService['tries'][1].val
                valueService['correct']++
                valueService['tries'] = []
            }
            else {
                valueService['lock'] = true;
                $timeout(() => {
                    $scope.X[valueService['tries'][0].index] = 'X'
                    $scope.X[valueService['tries'][1].index] = 'X'
                    valueService['tries'] = []
                    valueService['lock'] = false;
                },1000);
            }
        }
    }

}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }