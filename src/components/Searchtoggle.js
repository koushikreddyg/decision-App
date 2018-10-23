import React  from 'react';
import LifeCycleResult from './LifeCycleResult';
class LifeCycle extends React.Component {
    state={
        search:'',
        arr:['koushik','ronaldo','mahesh','teja']
    }
    search(event){
        console.log(event.target.value);
       this.setState({search:event.target.value})
      
    }
    
    render(){
        let upd=this.state.arr.filter((item)=>{
            return item.indexOf(this.state.search)!== -1
        }     
        )
        
        return(
            <div>
            <input value={this.state.search} onChange={this.search.bind(this)}/>
            {upd.map((item, index)=>
            <p key={item}>{index+1}.{item}</p>
            )}
            </div>
        );
    }
}
export default LifeCycle;