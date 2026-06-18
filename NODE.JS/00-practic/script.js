const EventEmitter = require("events");

class school extends EventEmitter {
  startPeriod() {
    console.log("start period");
  }
}

module.exports = school;
