
class CounterApp extends React.Component {
    constructor(props){
        super(props);
        
        this.handleAddOne=this.handleAddOne.bind(this);
        this.handleMinusOne=this.handleMinusOne.bind(this);
        this.handleReset=this.handleReset.bind(this);
        this.state={counter: 0};
    }
    componentDidMount(){
        const json=localStorage.getItem('count');
        const numCount=parseInt(json, 10);
        if(!isNaN(numCount)){
        this.setState((prevState)=>({counter:numCount}));
        }

    }
    componentDidUpdate(prevProps,prevState){
        if (prevState.counter!==this.state.counter){
            const count_s= this.state.counter;
            localStorage.setItem('count', count_s);
        }
        
    }
    handleAddOne(){
        this.setState({counter: this.state.counter+1});
        };
        
    handleMinusOne(){
        this.setState({counter: this.state.counter-1});
    }
    handleReset(){
        this.setState({
            counter:0
        });
    };
    render(){
        
        return (
            <div>
            <h1>Count:{this.state.counter}</h1>
            <button onClick={this.handleAddOne}>+1</button>
            <button onClick={this.handleMinusOne}>-1</button>
            <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

ReactDOM.render(<CounterApp counter={0}/>, document.getElementById('app'));












/*
let count = 0;
let addOne = () => {
    count++;
    console.log('Add One',count);
    rendercomp();
};
let minusOne = () => {
    count--;
    console.log('minusOne',count);
    rendercomp();
};
let reset = () => {
    console.log('reset');
    count=0;
    rendercomp();
};

const rendercomp = () => {

    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick= {addOne} >+1</button>
            <button onClick= {minusOne}>-1</button>
            <button onClick= {reset}>Reset</button>
        </div>
    );
    ReactDOM.render(templateTwo, document.getElementById('app'));

};
rendercomp();*/