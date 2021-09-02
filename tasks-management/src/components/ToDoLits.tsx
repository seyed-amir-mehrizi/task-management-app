import { ITask } from "../model/task"

const ToDoLits = (props:any) => {
    console.log(props);
    
    return (
        <div>
            {props.task.length > 0 ? 
             <table className="table table-striped text-center">
             <thead>
                 <tr>
                     <th>Title</th>
                     <th>DeadLine</th>
                     <th>Operation</th>
                 </tr>
             </thead>
             <tbody>
                 {props.task.map((res:any)=>{
                     return <tr>
                             <td>{res.taskName}</td>
                             <td>{res.deadline}</td>
                             <td></td>
                         </tr>
                 })}
             </tbody>
         </table>
         : "there is no task here"
        }
           
        </div>
    )
}
export default ToDoLits

