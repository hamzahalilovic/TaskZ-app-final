import React from 'react'
import axios from 'axios';

import listService from '../../../services/lists-service';
import Todo from './todo';


class TodoContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            lists: []
        };
        
        this.addList = this.addList.bind(this)
        this.deleteList = this.deleteList.bind(this)
        this.editList = this.editList.bind(this)
    }

    componentDidMount() {
        listService.getLists()
        .then(res => {
            let lists = res;
            this.setState({ lists });
        })
    }

    addList(title){
        listService.addList(title)
        .then(listService.getLists()
        .then(res => {
            let lists = res;
            this.setState({ lists });
        }))
    } 

    deleteList(id) {
        listService.deleteList(id)
        let lists = this.state.lists.filter(list => list.id !== id);
        this.setState({ lists });
    }
    
    editList(id, title) {
        let list = {
            id,
            title
        }
        listService.editList(list)
        
        .then(res => {
        })
        let lists = this.state.lists.map(list => {
            if (list.id === id) {
                list.title = title;
            }
            return list;
        });
        this.setState({
            lists
        });
    }
    render() {
        return <Todo 
        lists={this.state.lists} 
        addList={this.addList}
        deleteList={this.deleteList}
        editList={this.editList}
        />
    }
}

export default TodoContainer
