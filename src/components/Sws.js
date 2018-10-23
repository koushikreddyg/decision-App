import React from 'react';
class Sws extends React.Component{
constructor(props){
    super(props)
    this.state={value: '', arr: []}
}
submit=(e)=>{
e.preventDefault();
const value1= e.target.elements.search.value;
this.setState((prevState)=>({
    arr: value1.split('')
}))
console.log(this.state.arr);
}
delete=(item)=>{
    console.log(item);
     this.state.arr.splice(item,1)

}
render(){
    return (
        <div>
        <form onSubmit={this.submit}>
        <input name="search"/>
        <button type="submit">submit</button>
        </form>
        {this.state.arr.map((item,index)=>{
        return <div key={index} onClick={(e)=>{this.delete(index)}}>{item}</div>
        })}
        <br/>
        </div>
    );
}
}
export default Sws;