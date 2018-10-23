import React from 'react';
import Formschild from './Formschild';

class Formsparent extends React.Component {
    constructor(props){
        super(props)
        this.state={arr_storage:[]}
    }
    

    //push that in the array
    pushitem=(item)=>{
        this.setState((prevState)=>({
            arr_storage: prevState.arr_storage.concat(item)
        }))
        console.log(this.state.arr_storage);

    }

render() {
    return(
        <div>
       
      <Formschild  storage_item={this.pushitem}/>
        {this.state.arr_storage.map((item,index)=>{
            return <p key={index}>{item.name} and {item.details} </p>
        })}
        
        </div>
    );
}
}
export default Formsparent;