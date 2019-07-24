module.controller("parentCtrl", ParentCtrl)

//let value1 

// DI dependency injection - IOC
function ParentCtrl($scope, $rootScope) {

    $scope.devices = [
        new Mobile({model: "IPhone X", color: "black", price: 3500}),
        new Mobile({model: "Xiaomi", color: "green", price: 1000}),
        new Mobile({model: "Samsung Galaxy 11+", color: "black", price: 5500}),
        new Mobile({model: "LG V60", color: "White", price: 7500})
    ]
    $scope.add = function() {
        console.log($scope.model)
        $scope.devices.push(new Mobile({model: $scope.model,color: $scope.color, price: $scope.price}))
    }
    $scope.del = function(index) {
        console.log(index)
        $scope.devices.splice(index, 1);
    }
    $scope.sort = function(index) {
        $scope.devices.sort(function(a, b) {
            return parseFloat(a.price) - parseFloat(b.price);
        });
    }
}