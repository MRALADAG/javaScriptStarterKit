import { users } from "../data/users.js"
import DataError from "../models/dataError.js"
import { CustomerCheckValidityForErrorsService, EmployeeCheckValidityForErrorsService } from "./userCheckValidityForErrorsService.js"
import UserAddModel from "../models/userAddModel.js"

export default class UserService {

    constructor(loggerService) {
        this.employees = []
        this.customers = []
        this.errors = []
        this.loggerService = loggerService
        this.checkCustomerValidityForErrors = new CustomerCheckValidityForErrorsService();
        this.checkEmployeeValidityForErrors = new EmployeeCheckValidityForErrorsService();
    }



    load() {
        for (const user of users) {

            new UserAddModel(user, this.customers, this.employees, this.errors);
        }
    }



    add(user) {

        new UserAddModel(user, this.customers, this.employees, this.errors);

        this.loggerService.log(user)
    }


    listCustomers() {
        return this.customers;
    }


    getCustomersById(id) {
        return this.customers.find(u => u.id === id)
    }

    getCustomersSorted() {
        return this.customers.sort((customer1, customer2) => {

            let value = customer1.firstName > customer2.firstName ? 1 : customer1.firstName === customer2.firstName ? 0 : -1;
            return value;

        })
    }

}