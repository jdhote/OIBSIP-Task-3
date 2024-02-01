const express= require("express");
const app = express();
const mongoose = require('mongoose');
const Todo = require("./models/todo.js");
const cors = require("cors");
const methodOverride =require("method-override");

app.use(cors());
main().catch(err => console.log(err));
app.use(express.json())
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/todo-list');
  console.log("connected to db")
}
 
app.use(methodOverride("_method"));

//home route
app.get("/",(req,res)=>{
    res.send("home");
});


// Get all todos
app.get("/todo", async (req, res) => {
    try {
      const todos = await Todo.find();
      res.json(todos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Create a new todo
  app.post("/todo", async (req, res) => {
    const { task } = req.body;
    try {
      const newTodo = await Todo.create({ task });
      res.json(newTodo);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });


    // edit todo
  app.put("/update/:id",async (req,res)=>{
    try {
     
      const { id } = req.params;
      
      await Todo.findByIdAndUpdate({ _id: id }, { done: true });
      
      res.json({ success: true });
     
    }
      catch (error) {
       res.status(500).json({ error: error.message });
     }
  })
  
//delete
  app.put("/delete/:id",async (req,res)=>{
    try {
     
      const { id } = req.params;
     
      await Todo.findByIdAndDelete({ _id: id });
      
      res.json({ success: true });
     
    }
      catch (error) {
       res.status(500).json({ error: error.message });
     }
  })
  
 // Get all completed todos
app.get("/completed", async (req, res) => {
  try {
    const completedTodos = await Todo.find({ done: true });
    res.json(completedTodos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


app.listen(3000,()=>{
    console.log("server is listening to port 3000");
})