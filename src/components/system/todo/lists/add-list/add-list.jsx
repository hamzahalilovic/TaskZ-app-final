import React from 'react';
import { CardFooter } from 'reactstrap';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave } from '@fortawesome/free-solid-svg-icons'

library.add(faSave)

const AddList = (props) =>  {
    const returnComponents = () => {
        if(props.activeInput) { 
            return(
                <form className="formList" onSubmit={props.handleSaveList}>
                <input onChange={props.getTitle} autoFocus="true" />
                <FontAwesomeIcon className="icon icon-save" icon="save" onClick={props.handleSaveList} />
                </form>
                )}
                else {
                    return(
                        <CardFooter className="addListBtn" onClick={props.openInput} >
                        <span >+ Add new list</span>
                        </CardFooter>
                        )}
                    }
                    return (
                        <div>
                        {returnComponents()}
                        </div>
                        );
                    }
                    export default AddList;