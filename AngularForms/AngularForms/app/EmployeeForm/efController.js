angularFormsApp.controller('efController',
    function EmployeeFormController($scope, efService) {

        $scope.employee = efService.employee;

        $scope.departments = [
            "Engineering",
            "Marketing",
            "Finance",
            "Administration"
        ];

        $scope.submitForm(){

        };
    });