const EventEmitter = require("events");

class AppEvents extends EventEmitter {}

const appEvents = new AppEvents();

// listeners
appEvents.on("userLogin", () => {
    console.log("EVENT: User Logged In");
});

appEvents.on("dataFetched", () => {
    console.log("EVENT: Users Data Fetched");
});

module.exports = appEvents;
