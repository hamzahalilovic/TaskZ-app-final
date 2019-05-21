import React from 'react';
import { CardFooter } from 'reactstrap';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave } from '@fortawesome/free-solid-svg-icons'
import "./add-task.css"

library.add(faSave)



const AddTask = (props) =>  {
    const returnComponents = () => {
        if(props.activeInput) { 
            return(
                <form className="formList" onSubmit={props.handleSaveList}>
                <input onChange={props.getTitle} autoFocus="true"/>
                <FontAwesomeIcon className="icon icon-save" icon="save" onClick={props.handleSaveList} />
                </form>
                )}
                else {
                    return(
                        <CardFooter onClick={props.openInput} className="addCardBtn">
                        <span>+ Add new card</span>
                        </CardFooter>
                        )}
                    }
                    return (
                        <div>
                        {returnComponents()}
                        </div>
                        );
                    }
                    
                    export default AddTask;