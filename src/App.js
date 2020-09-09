import React, { useState } from 'react';
import './App.css';
import DisplayTask from './components/DisplayTask';
import Task from './components/Task';

function App() {

  const [list, setList] = useState([])

  return (
    <div className="container">
      <h1 className="text-center mt-5">Check List</h1>
      <DisplayTask list={list} setList={setList}/>
        {
          list.map( ((task, index) => 
            <Task 
              task={task}
              list={list}
              setList={setList}
              index={index}/>
            ))
        }
    </div>
  );
}

export default App;
