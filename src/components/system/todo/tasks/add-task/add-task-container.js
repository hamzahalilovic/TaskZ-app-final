import React from 'react';
import axios from 'axios';
import AddTask from './add-task';
import firebase from '../../../../../firebase'


class AddTaskContainer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title: "",
            userId: null,
            activeInput: false
        };
        this.getTitle = this.getTitle.bind(this)
        this.handleSaveList = this.handleSaveList.bind(this)
        this.openInput = this.openInput.bind(this)
    }
    // get data fom DB
    componentDidMount() {
        firebase.auth().onAuthStateChanged( (user) => {
            if (user) {
                this.setState({
                    userId: user.uid
                })
            } 
        });
    }
    getTitle (e) {
        e.preventDefault()
        this.setState({
            title: e.target.value
        }) 
    }
    handleSaveList (e) {
        e.preventDefault()
        
        this.props.addTask(this.state.title, this.props.listId)
        
        this.setState({
            activeInput: false
        })
    }
    openInput(){
        this.setState({
            activeInput: true
        })
    }
    render(){
        return (
            <AddTask 
            getTitle={this.getTitle} 
            handleSaveList={this.handleSaveList}
            activeInput={this.state.activeInput}
            openInput={this.openInput}
            closeInput={this.closeInput}
            />
            );
        }
    };
    
    export default AddTaskContainer;