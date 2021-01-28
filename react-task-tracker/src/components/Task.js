import React from 'react'
import {FaTimes} from 'react-icons/fa'
function Task({ task, onDelete, onToggle }) {
    return (
        <div className={`task ${task.reminder ? 'reminder': ''}`} onDoubleClick={()=>onToggle(task.id,task.reminder)}>
            <h3>{task.text} 
            <FaTimes style={{color:'red',cursor:'pointer'}} onClick={()=>onDelete(task.id)}/></h3>
            <h5>{task.day}</h5>
            
        </div>
    )
}

export default Task
