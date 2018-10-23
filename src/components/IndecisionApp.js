import React from 'react';
import AddOptions from './AddOptions';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './optionModal'

class IndecisionApp extends React.Component {
    state ={
        options:[],
        selectedOption: undefined,
    }
    closeModal=(e)=> {
        e.preventDefault();
        this.setState((prevState)=>({
            selectedOption: false
        }))
    }
    componentDidMount(){
        try{
        const json=localStorage.getItem('options');
        const options=JSON.parse(json);
        if(options){
        this.setState((prevState)=>({options}));
        }
    }
    catch(e){

    }
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length!==this.state.options.length){
            const json1=JSON.stringify(this.state.options);
            localStorage.setItem('options',json1);
        }
    }
    handleRemoveAll=()=>{
        this.setState(()=>({options:[]}));
    }
    componentWillUnmount(){
        console.log('Component has unmounted');
    }
        
    handlePick=()=>{
        let rand= Math.floor(Math.random()*this.state.options.length)
        let opt1=this.state.options[rand];
        this.setState((prevState)=>({selectedOption:opt1}))
        
        
    }
    handledeleteone=(option1)=>{
        this.setState((prevState)=>({
            options:prevState.options.filter((item)=>{
                return option1!==item;
            }
        )
        }))
    }
    handleAddOptions=(store)=>{
        if (!store){
            return 'please enter the valid message';
        } else if(this.state.options.indexOf(store)>-1){
            return 'Item already exists';
        }
        this.setState((prevState)=>({options: prevState.options.concat(store)}));
    }
render(){
    const title="Indecision App";
    const subtitle="Put your life in the hands of computer";
    return(
        <div >
        <Header title={title} subtitle={subtitle}/>
        <div className="container">
        <Action hasOptions={this.state.options.length < 1} handlePick={this.handlePick}/>
        <div className="widget">
        <Options 
        handleRemoveAll={this.handleRemoveAll} 
        options={this.state.options}
        handledeleteone={this.handledeleteone}
        />
        <AddOptions handleAddOptions={this.handleAddOptions}/>
        </div>
        
        </div>
        
        <OptionModal selectedOption={this.state.selectedOption} closeModal={this.closeModal}/>
        </div>
        
    );
}
}
IndecisionApp.defaultProps={
options:[]
};
export default IndecisionApp;