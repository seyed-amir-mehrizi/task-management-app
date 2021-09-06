import React, { ChangeEvent, FC, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';


const App: FC = () => {

const [tasks , setTasks]=useState([
  {id : 1 , title : "do homework" , time : "3 hours"},
  {id : 2 , title : "do yoga" , time : "1 hours"},
  {id : 3 , title : "watch TV" , time : "2 hours"},
]);

const deleteItem = (id)=>{
  setTasks(tasks.filter(task=>{
    return task.id !== id;
  })) 
}
  return (
    <>
        <div className="app-container">
          <Header />
          {tasks.length === 0 ? "There is No Task Here" : <Tasks onDelete={deleteItem} tasks = {tasks} />}
        
        </div>


    </>
  );
}

export default App;
