const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  status: {
    type: String,
    enum: ["active", "inactive"],
  },
  data: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});

//  instance methods
todoSchema.methods = {
  findActive: function () {
    return mongoose.model("Todo").find({ status: "inactive" });
  },
};

// static methods
todoSchema.statics = {
  findByJS: function () {
    return this.find({ title: /my name/i });
  },
};

// query helpers
todoSchema.query = {
  byLanguage: function (len) {
    return this.find({ title: new RegExp(len, "i") });
  },
};

module.exports = todoSchema;
