﻿angularFormsApp.factory('DataService',
    function () {
        var getEmployee=function(id) {
            if(id==123){
                return(
                {
                    fullName: "Jakub Wójcicki",
                    notes: "Idealny pracownik",
                    department: "IT",
                    perkCar: true,
                    perkStock: false,
                    perkSixWeeks: true,
                    payrollType: "none"
                });
            }
            return undefined;
        };

        var insertEmployee=function(newEmployee){
            return true;
        }
        var updateEmployee=function(employee){
            return true;
        }

        return{
            insertEmployee:insertEmployee,
            updateEmployee:updateEmployee,
            getEmployee:getEmployee
        };
    });