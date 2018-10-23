import React from 'react';
import ReactDOM from 'react-dom';
class AddOptions extends React.Component{
    state={
        res:undefined
    }
    handleAddOptions=(e)=>{
        e.preventDefault();
        let store=e.target.elements.AddOption.value.trim();
        const res=this.props.handleAddOptions(store);
        this.setState(()=>({res:res}))
        if (!res){
            e.target.elements.AddOption.value=''
        }
     }
     
    render(){
        
        return(
            <div>
            {this.state.res&&<p className="add-option-error">{this.state.res}</p>}
            <form className="AddOption" onSubmit={this.handleAddOptions} >
            <input  className="AddOption__input" type="text" name="AddOption"/><button className="button">Submit</button>
            </form>
            </div>
        );
    }
    }
    export default AddOptions;