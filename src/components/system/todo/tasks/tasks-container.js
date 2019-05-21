import React from 'react'

import Tasks from './tasks';

class TasksContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editing: false
        };
        this.editInput = this.editInput.bind(this)
        this.closeInput = this.closeInput.bind(this)
    }
    editInput(){
        this.setState({
            editing: true
        })
    }
    closeInput(){
        this.setState({
            editing: false
        })
    }
    
    render() {
        return(
            <Tasks 
            id={this.props.id}
            key={this.props.id}
            title={this.props.title} 
            deleteTask={this.props.deleteTask}
            editTask={this.props.editTask}
            editInput={this.editInput}
            closeInput={this.closeInput}
            editing={this.state.editing} />
            )
        }
    }
    
    
    export default TasksContainer
    