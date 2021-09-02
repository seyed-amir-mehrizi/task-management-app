import React, { ChangeEvent, FC, useState } from 'react';
import { ITask } from './model/task';
import './App.css';
import ToDoLits from './components/ToDoLits';

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadLine, setDeadLine] = useState<number>(0);
  const [toDoList, setToDoList] = useState<ITask[]>([]);

  const handleChangeTask = (event: ChangeEvent<HTMLInputElement>) : void => {
      setTask(event.target.value);
  }
  const handleChangeDeadLine = (event: ChangeEvent<HTMLInputElement>) : void => {
      setDeadLine(Number(event.target.value))
  }
  

  const addTask =()=>{
    const newTask = {
      taskName : task , 
      deadline : deadLine
    }
    setToDoList([...toDoList , newTask]);
    setTask("");
    setDeadLine(0);
  }


  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input type="text" placeholder="Task...." onChange={handleChangeTask} name="task" value={task}/>
          <input type="number" placeholder="Deadline (in days)" onChange={handleChangeDeadLine} name="deadLine" value={deadLine}/>
        </div>
        <button onClick={addTask}>
          Add Task
        </button>
      </div>
      <div className="toDoList">
           {<ToDoLits task={toDoList}/>}
      </div>

    </div>
  );
}

export default App;
