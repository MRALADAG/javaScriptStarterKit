import { users } from "../data/users.js";
import EmployeeAddModel from "../models/employeeAddModel.js";
import UserAddModel from "../models/userAddModel.js";
import UserService from "./userService.js";

export default class EmployeeService extends UserService {

    constructor(loggerService) {
        super(loggerService)
    }

    load() {

        for (const user of users) {
            new UserAddModel(user, this.customers, this.employees, this.errors);
        }

        return this.employees;
    }

    add(employee) {

        new EmployeeAddModel(employee, this.customers, this.employees, this.errors)

        this.loggerService.log(employee)

    }

    listEmployees() {

        return this.employees;

    }

    getEmployeeById(id) {

        return this.employees.find(val => val.id === id);

    }

    getEmployeesSorted() {

        return this.employees.sort((employee1, employee2) => {

            let value = employee1.firstName > employee2.firstName ? 1 : employee1.firstName === employee2.firstName ? 0 : -1;
            return value;

        })

    }

}