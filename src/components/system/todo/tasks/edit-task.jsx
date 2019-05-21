import React from 'react';
import {  Button, CardBody, Input } from 'reactstrap';

let taskTitle;
let taskDesc;

const EditTask = (props) => {
    const editTitle = (e) => {
        e.preventDefault()
        taskTitle = e.target.value
    }
    const onSaveTask = () => {
        props.saveTask(taskTitle, taskDesc)
    }
    return (
        <CardBody>
            <Input placeholder="Edit title" onChange={editTitle}></Input>
            <div align="center">
                <Button size="md" onClick={onSaveTask}>Save</Button>
            </div>
        </CardBody>
    );
};

export default EditTask;