module.service("logicService", function (globalConst, $http, $scope) {

    this.httpGet = function () {
        let p = $http.get(globalConst['url'])
        p.then( (resp) => {
            // happens in the future - when the responsee will come back!
    
            console.log(resp.data)
    
            $scope.todos = resp.data
    
        }, (err) => {
            console.log(`ERROR === ${err}`)   
        }
        )
    }

})