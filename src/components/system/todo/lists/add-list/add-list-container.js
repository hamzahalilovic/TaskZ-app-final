import React from 'react';
import axios from 'axios';

import AddList from './add-list';
import { firebase } from 'firebase/app';


class AddListContainer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title: "",
            userId: null,
            activeInput: false,
            
        };
        this.getTitle = this.getTitle.bind(this)
        this.handleSaveList = this.handleSaveList.bind(this)
        this.openInput = this.openInput.bind(this)
    }
    // // get data fom DB
    // componentDidMount() {
    //     firebase.auth().onAuthStateChanged( (user) => {
    //         if (user) {
    //             this.setState({
    //                 userId: user.uid
    //             })
    //         } 
    //     });
    // }
    getTitle (e) {
        e.preventDefault()
        this.setState({
            title: e.target.value
        }) 
    }
    handleSaveList (e) {
        e.preventDefault()
        
        this.props.addList(this.state.title)
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
            <AddList 
            getTitle={this.getTitle} 
            handleSaveList={this.handleSaveList}
            activeInput={this.state.activeInput}
            openInput={this.openInput}
            closeInput={this.closeInput}
            />
            );
        }
    };
    
    export default AddListContainer;