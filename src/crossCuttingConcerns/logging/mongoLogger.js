import BaseLogger from "./logger.js";

export default class MongoLogger extends BaseLogger {
    log(data) {
        console.log('Logged to Mongo' + data);
        console.log(`${data.firstName} ${data.lastName} loglandı.`);
    }
}