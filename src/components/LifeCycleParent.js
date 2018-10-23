import React  from 'react';
import LifeCycleChild from './LifeCycleChild';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Form, Icon, Input, Button } from 'antd';
const FormItem = Form.Item;

class LifeCycleParent extends React.Component {
   constructor(props){
       super(props);
       this.state={
        counter:0
    }
   }
       
    
    componentWillMount(){
        this.setState((prevState)=>({counter:5}))
        console.log('Component Will mount');
    }
    componentDidMount(){
       
        console.log("component did mount")
    

    }
    
    componentWillUpdate(nextProps, nextState){
        
        console.log("Component Will Update");
    }
    
    
    
    
   
   incfun=(e)=>{
       console.log(e);
       e.preventDefault();
       let val=e.target.elements.count.value;
       e.target.elements.count.value=''
        this.incf(Number(val));
   }
   incf=(item)=>{
       this.setState((prevState)=>({counter:prevState.counter+item}))

   }
    
    render(){
        return(
            <MuiThemeProvider>
            <div>
           
            <form onSubmit={this.incfun}>
            <TextField hintText="Hint Text" name="count"/>
           
            <RaisedButton label="Click me" primary={true}  />
            </form>
            
            
            <LifeCycleChild count={this.state.counter}/>
           
            </div>
            </MuiThemeProvider>
        );
    }
}
export default LifeCycleParent;