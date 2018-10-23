import React from 'react';
import Options from './Options';
import ReactDOM from 'react-dom';
const Option=(props)=>
     (
        <div className="options">
        <p className="option__text">{props.count}.{props.item}</p>
        <button className="button button--link" onClick={(e)=>{props.handledeleteone(props.item)}}>remove</button>
        </div>
    );
    
    export default Option;