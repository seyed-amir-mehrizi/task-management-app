import React, { ChangeEvent, FC, useState } from 'react';
import { ITask } from './model/task';
import './App.css';

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadLine, setDeadLine] = useState<number>(0);
  const [toDoList, setToDoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) : void => {
    if(event.target.name === task){
      setTask(event.target.value)
    }
    else{
      setDeadLine(Number(event.target.value))
    }

  }

  const addTask =()=>{
    const newTask = {
      taskName : task , 
      deadline : deadLine
    }
    setToDoList([...toDoList , newTask]);
    setTask("");
    setDeadLine(0);
    console.log("toDo : " , toDoList);
    
    
  }


  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input type="text" placeholder="Task...." onChange={handleChange} name="task" />
          <input type="number" placeholder="Deadline (in days)" onChange={handleChange} name="deadLine" value={deadLine}/>
        </div>
        <button onClick={addTask}>
          Add Task
        </button>
      </div>
      <div className="toDoList">

      </div>

    </div>
  );
}

export default App;
