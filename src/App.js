import { useState } from 'react';
import './App.css';
import Header from './components/Header';

function App() {
  const [task, setTask] = useState("");
  const [remark, setRemark] = useState("");
  const [data, setData] = useState([])
  function addTask() {
    setData([...data, { task, remark }])

    setTask('');
    setRemark('');
  }
  function removeTask(i){
    const arr = data;
    arr.splice(i, 1);
    setData([...arr]);
  }
  return (
    <div className="App">
      <Header />

      <div className="container">
        <div className="form">
          <div className="fields">
            <input type="text" placeholder='Enter Task' value={task} onChange={(e) => { setTask(e.target.value) }} />
            <input type="text" placeholder='Remarks' value={remark} onChange={(e) => { setRemark(e.target.value) }} />
          </div>
          <div className="btns">
            <button onClick={addTask}>Add</button>
          </div>
        </div>
        <div className="result">
          <div className="task">
            <h3>Sr. No</h3>
            <h3>Task</h3>
            <h3>Remarks</h3>
            <h3 >Action</h3>
          </div>
          {
            data.map((item, index) => {
              return (
                <div className="task">
                  <h5>{index + 1}</h5>
                    <h4>{item.task}</h4>
                    <h5>{item.remark}</h5>
                    <h3 className='remove-btn' onClick={()=>{removeTask(index)}}>&times;</h3>
                </div>
              )
            })
          }

        </div>
      </div>
    </div>
  );
}

export default App;
