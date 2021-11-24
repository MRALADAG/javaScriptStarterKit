import CustomerCheckValidityForErrorsService from "../sevices/customerCheckValidityForErrorsService.js"
import EmployeeCheckValidityForErrorsService from "../sevices/employeeCheckValidityForErrorsService.js"
import DataError from "./dataError.js";

export default class UserAddModel {

    constructor(user, customers, employees, errors) {

        this.user = user;
        this.errors = errors;
        this.customers = customers;
        this.employees = employees;

        switch (this.user.type) {
            case "customer":
                !(new CustomerCheckValidityForErrorsService(this.errors).checkUserValidityForErrors(this.user)) && this.customers.push(this.user);
                break;
            case "employee":
                !(new EmployeeCheckValidityForErrorsService(this.errors).checkUserValidityForErrors(this.user)) && this.employees.push(this.user);
                break;

            default:
                this.errors.push(new DataError("This user can not be added. Wrong user type", user))
                break;
        }
    }


}