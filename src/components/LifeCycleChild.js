import React  from 'react';
import LifeCycleParent from './LifeCycleParent';
class LifeCycleChild extends React.Component {

    shouldComponentUpdate(nextProps, nextState){
        return (this.props.count!==nextProps.count);
        //return false;

       
    }
    componentWillReceiveProps(nextProps){
       
        
        console.log("component will receive props");
    }
    componentDidUpdate(prevProps,prevState){
        console.log(this.props.count)
    
    
}
    
    render(){
        return(
            <div>
            <h1>{this.props.count}</h1>
            
            </div>
        );
    }
}
export default LifeCycleChild;