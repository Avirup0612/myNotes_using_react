import React, {useState} from "react"
import './App.css'

const NoteList = (props) => {

    const [edit, setEdit] = useState(false);
    const [done, setDone] = useState(false);


    const deleteNote = () =>{
        props.toDelete(props.id)
    };

    return(
    <>
        <li className={`taskdiv col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mx-1 ${edit ? "boundary1" : ""} ${done ? "boundary2" : ""}`}>
            <p className={edit ? "status" : "hide"}>Edit mode</p>
            <h3 className="taskheading" contentEditable={edit}>{props.title}</h3>
            <p className="task-info" contentEditable={edit}>{props.taskdata}</p>
            <div className="buttondiv">
                <button type="button" className={done || edit ? "hide" : "action-btn"} onClick={()=>{setDone(true)}}><ion-icon name="checkmark-done-outline" className="done-btn"></ion-icon></button>
                <button type="button" className={done || edit ? "hide" : "action-btn"} onClick={()=>{setEdit(true)}}><ion-icon name="pencil-outline"></ion-icon></button>
                <button type="button" className={edit ? "action-btn" : "hide"} onClick={()=>{setEdit(false)}}><ion-icon name="checkmark-outline"></ion-icon></button>
                <button type="button" className="action-btn" onClick={deleteNote}><ion-icon name="close-outline"></ion-icon></button>                                           
            </div>  
        </li>
    </>
    )
}

export default NoteList