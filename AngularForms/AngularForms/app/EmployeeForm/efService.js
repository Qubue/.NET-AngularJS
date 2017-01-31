angularFormsApp.factory('efService',
    function () {
        return {
            employee: {
                fullName: "Jakub Wójcicki",
                notes: "Idealny pracownik",
                department: "IT",
                perkCar: true,
                perkStock: false,
                perkSixWeeks: true,
                payrollType: "none"
            }
        }
    });