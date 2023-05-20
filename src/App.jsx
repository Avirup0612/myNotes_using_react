import { useState } from 'react'
import NoteList from './Notelist'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  const [task, setTask] = useState({
    taskHeading:"",
    taskInfo:""
  });

  const [collapse, setCollapse] = useState(false);

  const [note, setNote] = useState([]);

  const handleChange = (event) =>{
    const{name, value}= event.target
    setTask((oldTask) =>{
      return{
        ...oldTask,
        [name]:[value]
      };
    });
  };

  const makeNote = (event) => {
    event.preventDefault();
    if(task.taskHeading !=="" || task.taskInfo !==""){
      setNote((oldNote)=>{
        return([...oldNote, task]);
      });
      setTask({
        taskHeading : "",
        taskInfo : ""
      });
    }else {
      alert("Can't take an empty note");
    };
    
  }

  const deleteItem = (id) => {
    setNote((oldNote)=>{
      return (oldNote.filter((currElem,index)=>{
          return index !== id;
      }))
    })
  }

  const handleCollapse = (event) => {
    event.preventDefault();
    setCollapse(!collapse);
  };

  return (
    <>
    <div className='maindiv'>
    <h1 className="main-heading">My Notes</h1>
    <div className="addlistbox">
        <form className="addlist">
            <div className="addtodo">
                <div className="collapsediv">
                    <input type="text" name='taskHeading' className={collapse ? "title" : "hide"} placeholder="Add Title" onChange={handleChange} value={task.taskHeading} readOnly={false}/>
                    <textarea className={collapse ? "task" : "hide"} name='taskInfo' placeholder="Add your task" id="" cols="40" rows="4" onChange={handleChange} value={task.taskInfo}></textarea>
                </div>
                <div className="aftercollapse">
                    <h1 className={collapse ?"hide" : "collapsediv-heading"}>Add tasks to do</h1>
                    <button type="btn" className="toggle-btn" onClick={handleCollapse}><ion-icon name={collapse ? "close-outline" : "add-outline"}></ion-icon></button>
                    <button type="submit" className={collapse ? "submit-btn" : "hide"} onClick={makeNote}><ion-icon name="arrow-forward-outline"></ion-icon></button>
                </div>
            </div>
            <div className="container-fluid">
                <ul className="row">
                  {note.map((val, index)=>{
                    return(<NoteList key={index} id={index} title={val.taskHeading} taskdata={val.taskInfo} toDelete={deleteItem}/>)
                  })}
                </ul>
            </div>
        </form>
    </div>
    </div>
    </>
  )
}

export default App
