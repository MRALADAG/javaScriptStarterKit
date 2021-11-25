import DataError from "../models/dataError.js";
import UserCheckValidityForErrorsService from "./userCheckValidityForErrorsService.js";

export default class CustomerCheckValidityForErrorsService extends UserCheckValidityForErrorsService {

    constructor(errors) {
        super(errors)
    }

    checkUserValidityForErrors(user) {
        let requiredFields = 'id firstName lastName age city'.split(" ");
        let hasErrors = false;
        for (const field of requiredFields) {
            if (!user[field]) {
                hasErrors = true;
                this.errors.push(new DataError(`There is a validation problem. ${field} is required`, user))
            }
        }

        if (Number.isNaN(Number.parseInt(+user.age))) {
            hasErrors = true;
            this.errors.push(new DataError(`There is a validation problem. ${user.age} is not a number`, user))
        }

        return hasErrors;

    }
}