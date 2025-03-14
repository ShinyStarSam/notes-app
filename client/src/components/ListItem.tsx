import { Task } from "../types.ts"
import ProgressBar from "./ProgressBar.tsx";
import TickIcon from "./TickIcon.tsx";

interface ListItemProps {
  task: Task; // Type the task prop with Task interface
}

function ListItem({task} :ListItemProps) {
    return (
      <li className="list-item">
          <div className="info-container">
          <TickIcon/>
          <p className="task-title">{task.title}</p>
          <ProgressBar/>
          </div>

          <div className="button-container">
            <button className="edit">EDIT</button>
            <button className="delete">DELETE</button>
          </div>
     </li>
    )
  }
  
  export default ListItem