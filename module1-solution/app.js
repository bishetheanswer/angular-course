(function () {
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);
    
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.textbox = ""
        $scope.result = ""
        $scope.check = function () {
            var input = $scope.textbox.split(',');
            if ($scope.textbox == ""){
                $scope.result = "Please enter data first"
            } else if (input.length <= 3){
                $scope.result = "Enjoy!"
            } else {
                $scope.result = "Too much!"
            }
        }
    }
})();