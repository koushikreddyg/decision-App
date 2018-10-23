class VisibilityToggle extends React.Component {
    constructor(props){
        super(props);
        this.state={visibility_t: false};
        this.Showme=this.Showme.bind(this);
    }

    Showme(e){
        e.preventDefault();
        this.setState((prevState)=>{
            return {
                visibility_t: !prevState.visibility_t
                
            };
            console.log(visibility_t);
        });
    }
    
    render(){
        return(
            <div>
            <h1>Visibility Toggle</h1>
                <button onClick={this.Showme}>{this.state.visibility_t?'hide':'show'}</button>
                {this.state.visibility_t && (<div>
                <p>THis comes up after hitting show button!</p>
                </div>)}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />,document.getElementById('app'));

