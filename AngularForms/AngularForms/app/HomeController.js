angularFormsApp.controller("HomeController",
    function ($scope, $location, DataService) {

        $scope.showCreateEmployeeForm = function () {
            $location.path('/newEmployeeForm')
            //$modal.open({
            //    templateUrl: 'app/EmployeeForm/efTemplate.html',
            //    controller: 'efController'
            //});
        };

        $scope.showUpdateEmployeeForm = function (id) {
            $location.path('/updateEmployeeForm/' + id)
        };
    });

       