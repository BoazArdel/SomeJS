module.controller("letterCtrl",LetterCtrl)

//DI dependency injection
function LetterCtrl($scope) {
    $scope.change = () => { 
        var text = $scope.text
        $scope.namer = String(text).split("").reverse().join("");
    }
}