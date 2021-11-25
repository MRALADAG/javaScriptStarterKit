import MongoLogger from "../crossCuttingConcerns/logging/mongoLogger.js";
import Customer from "../models/customer.js";
import UserService from "../sevices/userService.js";


console.log('User component yüklendi.');



let logger1 = new MongoLogger()

let userService = new UserService(logger1);

// let user1 = new User(1, 'Engin', 'Demiroğ', 'Ankara')
// let user2 = new User(2, 'Baran', 'Gökçe', 'Muğla')
// userService.add(user1)
// userService.add(user2)

// console.log(userService.list());
// console.log(userService.getById(2));

// userService.getById(1)
// userService.list()

// let customer = { id: 1, firstName: 'Engin' }

// customer.lastName = 'Demiroğ'

console.log("***********************************************");

userService.load();

// let customerToAdd = new Customer(1, 'Seda', 'Yılmaz', 'Ankara', 'ftyf');
// customerToAdd.type = "customer";
// userService.add(customerToAdd);

console.log(userService.customers);
console.log(userService.employees);
console.log(userService.errors);

console.log(userService.getCustomersSorted());