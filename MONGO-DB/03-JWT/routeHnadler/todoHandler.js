const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const checkLoggin = require("../middlewares//checkLoggin");

// Import todo schema
const todoSchema = require("../schemas/todoSchema");

// Making  module
const Todo = mongoose.model("Todo", todoSchema);

//  !get all todo
router.get("/", checkLoggin, async (req, res) => {
  console.log(req.username, req.userId);
  try {
    const result = await Todo.find({ status: "inactive" })
      .select({
        _id: 0,
        __v: 0,
        date: 0,
        data: 0,
      })
      .limit(8)
      .skip(5);
    console.log(result);
    res.status(200).json({
      message: "successfull",
      result: result,
      Count: result.length,
    });
  } catch (err) {
    res.status(500).json({
      Error: "there was a server side Error",
    });
  }
});

//! Get active Todos
router.get("/active", async (req, res) => {
  try {
    const todo = new Todo();
    const data = await todo.findActive();
    console.log(data);
    res.status(200).send({
      data: data,
      Cound: data.length,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({
      Error: "there was a server side Error",
      Detaild: err.message,
    });
  }
});

//! Get JS todos
router.get("/js", async (req, res) => {
  try {
    const data = await Todo.findByJS();

    console.log(data);

    res.status(200).json({
      Count: data.length,
      Data: data,
    });
  } catch (err) {
    console.log(err.message);

    res.status(500).json({
      Error: "there was a server side Error",
      Details: err.message,
    });
  }
});

//! Get Todo by language
router.get("/language", async (req, res) => {
  try {
    const data = await Todo.find().byLanguage("ariyan");

    console.log(data);

    res.status(200).json({
      Count: data.length,
      Data: data,
    });
  } catch (err) {
    console.log(err.message);

    res.status(500).json({
      Error: "there was a server side Error",
      Details: err.message,
    });
  }
});

// ! get A todo by id
router.get("/:id", async (req, res) => {
  try {
    const result = await Todo.find({ _id: req.params.id });
    console.log(result);
    res.status(200).json({
      message: "successfull",
      Data: result,
    });
  } catch (err) {
    res.status(500).json({
      message: "there was a server side Error",
    });
  }
});

// !post A doto
router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const newTodo = new Todo(req.body);
    await newTodo.save();

    res.status(200).json({
      message: "Todo was inserted successfully!",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      Error: "there was a server side Error!",
      details: err.message,
    });
  }
});

//! Post muliple todo
router.post("/all", async (req, res) => {
  try {
    await Todo.insertMany(req.body);

    res.status(200).json({
      Message: "Todos were inserted successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      Error: "There was a server side Error",
      details: err.message,
    });
  }
});

// ! PUT A todo
router.put("/:id", async (req, res) => {
  try {
    const result = await Todo.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          title: "Israt ",
          status: "active",
        },
      },
      {
        new: true,
        useFindAndModify: false,
      },
    );
    console.log(result);
    console.log("Todo was updated successfully");
    res.status(200).json({
      Message: "Todo was updated successfully",
      Data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      Error: "There was server side Error",
      Details: err.message,
    });
  }
});

// ! Delete A todo
router.delete("/:id", async (req, res) => {
  try {
    await Todo.deleteOne({ _id: req.params.id });

    res.status(200).json({
      message: " Todo was Deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: "there was a server side Error",
    });
  }
});

module.exports = router;
