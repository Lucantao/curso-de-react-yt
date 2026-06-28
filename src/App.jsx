import Tasks from "./assets/Tasks"
import AddTasks from "./assets/AddTasks"
import { useEffect, useState } from "react";
import {v4} from 'uuid'
import Title from "./assets/components/Title";

function App () {



  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
    
  );


  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  },[tasks])


useEffect(() => {
  const fetchTasks = async () => {
    // Chamar a api
  const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10", {method: 'GET'});
  
  const data = await response.json();
  setTasks(data);
  
  }

fetchTasks()
}, [])






  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {

      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted}
      }

      return task;


    });
    setTasks(newTasks)
  }


 function onDeleteTaskClick (taskid){
   const newTasks = tasks.filter((task) => task.id !== taskid);
   setTasks(newTasks) 

  };

  function onAddTaskSubmit (title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask])

   }

  return (
    
     <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w- [500px] space-y-4">
        <Title>
          Gerenciador de Tarefas
        </Title>
        
        <AddTasks onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick} />
        

      </div>
      
     </div>
    
  )


}
  
export default App;







