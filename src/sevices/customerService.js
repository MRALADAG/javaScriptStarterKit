import { users } from "../data/users.js";
import CustomerAddModel from "../models/customerAddModel.js";
import UserAddModel from "../models/userAddModel.js";
import UserService from "./userService.js";

export default class CustomerService extends UserService {

    constructor(loggerService) {
        super(loggerService)
    }

    load() {

        for (const user of users) {
            new UserAddModel(user, this.customers, this.employees, this.errors);
        }
        return this.customers;
    }

    add(customer) {

        new CustomerAddModel(customer, this.customers, this.employees, this.errors)

        this.loggerService.log(customer);
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