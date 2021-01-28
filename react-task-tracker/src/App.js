import logo from './logo.svg';
import './App.css';
import Header from './components/Header' 
import Tasks from './components/Tasks'  
import AddTask from './components/AddTask'
import {useState} from 'react'

function App() {

  const[tasks,setTasks] = useState([
    {
        id:1,
        text:'GYM',
        day:'1st FEB at 7.00 am',
        reminder:true,
    },
    {
        id:2,
        text:'Cricket Club',
        day:'2nd FEB at 9.00 am',
        reminder:true,
    },
    {
        id:3,
        text:'Car Washing',
        day:'3rd FEB at 9.00 am',
        reminder:false,
    }
])

const[showAddTask,setShowAddTask] = useState(false) 

const deleteTask = (id) =>{
  setTasks(tasks.filter((task)=>task.id !== id))
}

const toggleReminder = (id,reminder) =>{
  setTasks(tasks.map((task)=>task.id===id ? {...task,reminder: !task.reminder}: task)) 
  console.log(id,reminder)
}

const addTask = (task) => {
  const id = Math.floor(Math.random()*10000) + 1
  const newTask = {id, ...task}
  setTasks([...tasks,newTask])
}

  return (
    <div className="container">
      <Header onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length>0 ?<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : ("No tasks to show")}
    </div>
  );
}

export default App;
