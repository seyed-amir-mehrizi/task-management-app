import Task from "./Task";

function Tasks(props) {
    console.log(props.tasks);
    return (
        <>
        {props.tasks.map((task)=>{
           return <Task deleteTask={props.onDelete} key={task.id} task={task}/>})
        }
        </>
    )
}
export default Tasks

