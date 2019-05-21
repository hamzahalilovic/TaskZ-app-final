import React from 'react';
import { CardBody } from 'reactstrap';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash, faSave } from '@fortawesome/free-solid-svg-icons'

library.add(faPen)
library.add(faTrash)
library.add(faSave)


const Tasks = (props) => {
    let title = props.title
    const handleChange = (e) =>{
        title = e.target.value;  
    }
    const deleteTask = (e) => {
        e.preventDefault()
        props.deleteTask(props.id)
    }
    const editTask = (e) => {
        e.preventDefault()
        props.editTask(props.id, title)
        props.closeInput()
    }
    const editInput = () => {
        props.editInput()
    }
    return (
        <div> 
        {
            props.editing 
            ?  
            <div className="editbody">
            <form action="" onSubmit={editTask}>
            <input className="editInput" autoFocus="true" type="text" onChange={handleChange} defaultValue={props.title}/>
            {/* <FontAwesomeIcon className="icon icon-save" icon="save"onClick={editTask} /> */}
            </form>
            </div> 
            :
            <CardBody className="cardbody">
            <span className="taskTitle">
            {props.title}
            </span>
            <FontAwesomeIcon className="icon" icon="pen" onClick={editInput}/>
            <FontAwesomeIcon className="icon" icon="trash" onClick={deleteTask}/>
            </CardBody> 
        }
        </div>
        );
    };
    
    export default Tasks;