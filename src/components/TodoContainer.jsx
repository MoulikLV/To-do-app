import React from "react";
import Todo from "./Todo";

const TodoContainer = ({todos,deleteTodo}) => {

  // console.log("todos",todos)
  return (
    <div className="container">
      <h3>{todos.length>0 ? `Tasks : ${todos.length} To Do` : "Add Task"}</h3>
      
      {todos.map((todo,index)=>{
        return (
            <Todo key={index} todo={todo} index={index} deleteTodo={deleteTodo}/>
        )
      })}
    </div>
  );
};

export default TodoContainer;
