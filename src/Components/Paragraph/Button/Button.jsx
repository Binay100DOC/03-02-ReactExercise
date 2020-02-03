import React from 'react';
import {clickable} from './index';
import './Button.css';
console.log(clickable);
function Button(props){
    return(
    <div>
    <button type="button" className="button" onClick={clickable}>
        {props.buttonContent}
    </button>
    </div>
    );
}

export default Button;
