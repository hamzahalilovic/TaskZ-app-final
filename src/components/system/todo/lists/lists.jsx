import React from 'react'
import { CardHeader, Col, Card, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
// import NavbarMenu from './Navbar';
import TasksContainer from '../tasks/tasks-container';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH, faPen, faTrash,  } from '@fortawesome/free-solid-svg-icons'
import AddTaskContainer from '../tasks/add-task/add-task-container';

library.add(faEllipsisH)
library.add(faPen)
library.add(faTrash)


const Lists = props => {
    let tasks = props.tasks
    let title = props.title
    
    const editInput = () => {
        props.editInput()
    }
    const handleChange = (e) => {
        title = e.target.value;
    }
    const editList = (e) => {
        e.preventDefault()
        props.editList(props.listId, title)
        props.closeInput()
    }
    const deleteList = () => {
        props.deleteList(props.listId)
    }
    return (
        <Col md="6" xs="12" lg="3" xl="2">
        <Card >
        {props.editing
            ?
            <form className="formList" onSubmit={editList}>
            <input onChange={handleChange} autoFocus="true" defaultValue={props.title}/>
            <FontAwesomeIcon className="icon icon-save" icon="save" onClick={editList} />
            </form>
            :
            <CardHeader>
            <div className="card-header_title">
            {props.title}
            </div>
            <Dropdown isOpen={props.dropdownOpen} toggle={props.toggle}>
            <FontAwesomeIcon aria-haspopup="true" className="icon icon-spread" icon="ellipsis-h" onClick={props.toggle} />
            <DropdownToggle className="hide-ntn">
            Dropdown
            </DropdownToggle>
            <DropdownMenu>
            <DropdownItem header>Actions on the list</DropdownItem>
            <DropdownItem divider />
            <DropdownItem className="header-action" onClick={editInput}>
            <FontAwesomeIcon className="icon header-icon" icon="pen" />
            Edit list
            </DropdownItem>
            {/* <DropdownItem divider /> */}
            <DropdownItem className="header-action" onClick={deleteList}>
            <FontAwesomeIcon className="icon header-icon" icon="trash" />
            Delete list
            </DropdownItem>
            </DropdownMenu>
            </Dropdown>
            </CardHeader>
        }
        
        <div id="tasksItems">
        {tasks.map(task => {
            if (task.listId === props.listId) {
                return <TasksContainer 
                id={task.id}
                key={task.id}
                title={task.title} 
                deleteTask={props.deleteTask}
                editTask={props.editTask}/>
            }
        }
        )}
        <AddTaskContainer 
        listId={props.listId}
        addTask={props.addTask}
        />
        </div>
        </Card>
        </Col>
        )
    }
    
    export default Lists
    