import React from "react";
import Task from './Task'

function TaskList({ tasks, removeTask }) {
  return (
    <div className="tasks">
      {
        tasks.map((element, index) => {
          return ( 
            <Task key={index} text={element.text} category={element.category} removeTask={removeTask} />
          )
        })
      }
    </div>
  );
}

export default TaskList;
