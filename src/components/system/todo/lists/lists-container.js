import React from 'react'
import axios from 'axios';

import Lists from './lists'
import taskService from '../../../../services/tasks-servise';

class ListsContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listId: this.props.listId,
            tasks: [],
            editing: false,
            dropdownOpen: false
        };
        this.addTask = this.addTask.bind(this)
        this.deleteTask = this.deleteTask.bind(this)
        this.editTask = this.editTask.bind(this)
        this.editInput = this.editInput.bind(this)
        this.closeInput = this.closeInput.bind(this)
        this.toggle = this.toggle.bind(this);
    }
    
    componentDidMount() {
        taskService.getTasks()
        .then(res => {
            let tasks = res;
            this.setState({ tasks });
        })
    }
    
    addTask(title, listId) {
        taskService.addTask(title, listId)
        .then(taskService.getTasks()
        .then(res => {
            let tasks = res;
            this.setState({ 
                tasks: tasks
            });
        }))
    }
    
    deleteTask(id) {
       
        taskService.deleteTask(id)
        let tasks = this.state.tasks.filter(task => task.id !== id);
        this.setState({ tasks });
    }
    
    editTask(id, title){
        let task = {
            id,
            title,
            listId: this.state.listId
        }
        taskService.editTask(task)
        let tasks = this.state.tasks.map(task => {
            if (task.id === id) {
                task.title = title;
            }
            return task;
        });
        
        this.setState({ 
            tasks
        });
    }
    
    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }
    
    editInput() {
        this.setState({
            editing: true
        })
    }
    
    closeInput() {
        this.setState({
            editing: false
        })
    }
    render() {
        return <Lists 
        listId = {this.props.listId}
        tasks={this.state.tasks} 
        title={this.props.title} 
        editing={this.state.editing} 
        addTask={this.addTask}
        deleteTask={this.deleteTask}
        editTask={this.editTask}
        closeInput={this.closeInput}
        editInput={this.editInput}
        toggle={this.toggle}
        dropdownOpen={this.state.dropdownOpen} 
        deleteList={this.props.deleteList}
        editList={this.props.editList}
        
        />
    }
}

export default ListsContainer
