angularFormsApp.controller("HomeController",
    function ($scope, $location, DataService) {

        $scope.showCreateEmployeeForm = function () {
            $location.path('/newEmployeeForm')
        }

        $scope.showUpdateEmployeeForm = function (id) {
            $location.path('/updateEmployeeForm/'+id)
        }
    });

       