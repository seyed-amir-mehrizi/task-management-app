
import {FaTrash} from 'react-icons/fa'
function Task(props) {


    const deleteItem = (item)=>{
        
        
    }
    return (
        <div className="card p-2 my-2">
             
                 <h5>{props.task.title} <FaTrash onClick={()=>props.deleteTask(props.task.id)} style={{color:"red" , float:"right" , cursor:"pointer"}}/></h5>
                 <p>
                     {props.task.time}
                 </p>

             
             
        </div>
    )
}

export default Task

