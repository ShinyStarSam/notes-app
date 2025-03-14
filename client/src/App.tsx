import { useEffect, useState } from "react"
import ListHeader from "./components/ListHeader.tsx"
import ListItem from "./components/ListItem.tsx"
import { Task } from "./types.ts"


function App() {

  const userEmail = "ShinyStarSam123@gmail.com"
  const [tasks, setTasks] = useState<Task[] | null>(null);

  async function getData(){
    try {
      const response = await fetch(`http://localhost:8000/todos/${userEmail}`)
      const json: Task[] = await response.json(); // Ensure the fetched data matches the Task[] type
      setTasks(json)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getData();  // Call the async function here
  }, []);  // Empty dependency array to run on mount only
  
  console.log(tasks)

  const sortedTasks = tasks?.sort((a,b) => new Date(a.date).getTime() - new Date(b.date).getTime())

  return (
    <div className="app">
      <ListHeader listName={"🏝 Holiday Tick List"} />
      {sortedTasks?.map((task) => <ListItem key={task.id} task={task}/>)}
    </div>
  )
}

export default App