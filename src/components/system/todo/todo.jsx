import React from 'react'
import { Card, Row, Col } from 'reactstrap';


import NavbarMenu from '../navbar/navbar';
import AddListContainer from './lists/add-list/add-list-container';
import ListsContainer from './lists/lists-container';


const Todo = props => {
    let lists = props.lists
    let token = localStorage.getItem('token')
    return (
        <div className="todo-view">
        <NavbarMenu />
        <div className="taskBlocks">
        <Row className="taskBlock dragscroll">
        {lists.map(list => {
            if(list.userId === token){
                return <ListsContainer
                key={list.id} 
                title={list.title} 
                listId={list.id}
                deleteList={props.deleteList}
                editList={props.editList}
                />
            }
            
        })}
        <Col md="6" xs="12" lg="3" xl="2">
        <Card>
        <AddListContainer addList={props.addList}/>
        </Card>
        </Col>
        </Row>
        </div>
        </div>
        )
    }
    
    export default Todo
    