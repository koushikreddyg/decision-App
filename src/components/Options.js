import React from 'react';
import Option from './Option'
const Options =(props)=>
    (
        <div>
       
        <div className="widget-header"><h3 className="widget-header--title">Your Options</h3>
        <button className="button button--link" onClick={props.handleRemoveAll}>Remove All</button></div>
        {props.options.length===0 && <p className="widget__message">Please enter some value</p>}
        {props.options.map((item,index)=> (<Option key={item} 
        item={item}
        count={index+1}
        handledeleteone={props.handledeleteone}
        />
        )  
        )}
        </div>
    );
    
    export default Options;