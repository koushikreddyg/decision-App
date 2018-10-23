class Practice extends React.Component{
    constructor(props){
        super(props);
        this.Resetval=this.Resetval.bind(this);
        this.pickOne=this.pickOne.bind(this);
        this.formSubmit=this.formSubmit.bind(this);
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
        if (prevState.options.length !== this.state.options.length){
            const str1= JSON.stringify(this.state.options);
            localStorage.setItem('options',str1)
        }
    }
    Resetval(){
        this.setState((prevState)=>{
            return{options:[]};
        })
        
    }
    pickOne(){
        let chooseIndex= Math.floor(Math.random()*this.state.options.length)
        let choosenval=this.state.options[chooseIndex];
        alert(choosenval);
    }
    handledeleteone(opt){
        this.setState((prevState)=>({
            options: prevState.options.filter((item)=> {
                return opt !==item
            }

            )
        }))
    }
        

    formSubmit(submit){
        if (!submit){
            return "Please Enter Something";
        } else if (this.state.options.indexOf(submit)>-1){
            return "Option already exist";
        }
        this.setState((prevState)=>{
            return{
                options:prevState.options.concat(submit)
            };
        });

    }
    render(){
        
        return(
            <div>
            <Title  />
            <Action pickOne={this.pickOne} optionlen={this.state.options.length===0}/>
            <Options 
            options={this.state.options} 
            Resetval={this.Resetval}
            handledeleteone={this.handledeleteone}
            />
            <AddOptions formSubmit={this.formSubmit}/>
            </div>

        );
    }
}
const Title =(props)=>{
    return(
        <div>
        <h1>{props.title}</h1>
        </div>
    );
}
Title.defaultProps ={
    title: 'koushik'
}
const Action =(props)=>{
    return(
        <div>
        <button disabled={props.optionlen} onClick={props.pickOne}>Pick One</button>
        </div>
    );

}

class Options extends React.Component {
    render() {
        return(
            <div>
            <button onClick={this.props.Resetval}>Reset</button>
            {this.props.options.map((item)=>{
                return <Option key={item} outputv={item} handledeleteone={this.props.handledeleteone}/>
            })}
            </div>
        );
    }
} 
class Option extends React.Component {
    render() {
        return(
            <div>
            <p>{this.props.outputv}<button onClick={(e)=>{this.props.handledeleteone(this.props.outputv)}}>remove</button></p>
            </div>
        );
    }
}
class AddOptions extends React.Component {
    constructor(props){
        super(props);
        this.formSubmit=this.formSubmit.bind(this);
        this.state={err:undefined};
    }
    formSubmit(e) {
        e.preventDefault();
        let store=e.target.elements.option.value.trim();
        let err=this.props.formSubmit(store);
        e.target.elements.option.value='';
        
            this.setState(()=>{
                return {err}
            });
        
    }
    render() {
        return(
            <div>
            {this.state.err && <p>{this.state.err}</p>}
            <form onSubmit={this.formSubmit}>
            <input name="option" type="text"/>
            <button>Submit!</button>
            </form>
            </div>
        );
    }
}
Practice.defaultProps= {
    options:[]
}
ReactDOM.render(<Practice />, document.getElementById('app'));