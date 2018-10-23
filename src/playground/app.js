class IndecisionApp extends React.Component {
        constructor(props){
            super(props);
            this.handlePick=this.handlePick.bind(this);
            this.handleRemoveAll=this.handleRemoveAll.bind(this);
            this.handleAddOptions=this.handleAddOptions.bind(this);
            this.handledeleteone=this.handledeleteone.bind(this);
            this.state={options:props.options};
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
        handleRemoveAll(){
            this.setState(()=>({options:[]}));
        }
        componentWillUnmount(){
            console.log('Component has unmounted');
        }
            
        handlePick(){
            let rand= Math.floor(Math.random()*this.state.options.length)
            let opt1=this.state.options[rand];
            alert(opt1);
            
        }
        handledeleteone(option1){
            this.setState((prevState)=>({
                options:prevState.options.filter((item)=>{
                    return option1!==item;
                }
            )
            }))
        }
        handleAddOptions(store){
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
            <div>
            <h1>Title</h1>
            <Header title={title} />
            <Action hasOptions={this.state.options.length < 1} handlePick={this.handlePick}/>
            <Options 
            handleRemoveAll={this.handleRemoveAll} 
            options={this.state.options}
            handledeleteone={this.handledeleteone}
            />
            <AddOptions handleAddOptions={this.handleAddOptions}/>
            </div>
        );
    }
}
IndecisionApp.defaultProps={
    options:[]
};
const Header =(props)=>{
    return (
        <div>HI
    <h1>{props.title}</h1>
    {props.subtitle&&<h2>{props.subtitle}</h2>}
    </div>
    );
}
Header.defaultProps={
    title:"Koushik App!"
};

const Action =(props)=>{
    return(
        <div >
        <button disabled={props.hasOptions} onClick={props.handlePick}>What should I Do!</button>
        </div>
    );
}

const Options =(props)=>{
    return(
        <div>
        {props.options.length===0 && <p>Please enter some value</p>}
        <button onClick={props.handleRemoveAll}>Remove All</button>
        {props.options.map((item)=> (<Option key={item} 
        item={item}
        handledeleteone={props.handledeleteone}
        />
        )  
        )}
        </div>
    );
}
const Option=(props)=>{
    return (
        <div>
        {props.item}<button onClick={(e)=>{props.handledeleteone(props.item)}}>remove</button>
        </div>
    );
}

class AddOptions extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOptions=this.handleAddOptions.bind(this);
        this.state={res:undefined};
    }
    handleAddOptions(e){
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
            {this.state.res&&<p>{this.state.res}</p>}
            <form onSubmit={this.handleAddOptions} >
            <input type="text" name="AddOption"/><button>Submit</button>
            </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp  />, document.getElementById('app'))