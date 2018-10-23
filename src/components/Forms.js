import React from 'react';
import Display from './Display';
class Forms extends React.Component {
    constructor(props) {
        super(props);
        this.formSubmit = this.formSubmit.bind(this);
        this.handledeleteone=this.handledeleteone.bind(this);
        this.formSubmit1=this.formSubmit1.bind(this);
        this.onEdit=this.onEdit.bind(this);
        this.Find=this.Find.bind(this);
        this.state = { firstname : '', lastname : '', Phonenumber : '', arrname: '', FinArr: [], err:'', finderr:'', finderr1:''};
    }
    onEdit(e){
        e.preventDefault();
        const sear=e.target.elements.Search.value.trim();
       const finderr=this.Find(sear);
       if(finderr){
       this.setState(()=>({finderr}))
       }
    }
    Find(item4){
        let fin_1=true;
        for (var j=0; j< this.state.FinArr.length; j++){
            if (this.state.FinArr[j].f_name===item4){
                var fin_2=true;
                console.log('value of j is ',j);
                //e.target.elements.first_name.value=FinArr[j].f_name;
                
                break;
            }
            else {
                fin_2=false;
            }
        }
        if (fin_2){
            return 'yes it is there';
        }
        else {
            return 'It is not there';
        }
    }
    formSubmit1(item1) {
        //console.log('item1 is',item1);
        //this.state.FinArr.push(item1);
        for (var i = 0; i < this.state.FinArr.length; i++) {
            if (this.state.FinArr[i].f_name === item1.f_name) {
                var same=true;
            }
            
        }
        if (!item1.f_name || !item1.l_name || !item1.p_number){
            return 'Please enter some thing';
        }else if(same) {
            return 'item already exist';
        }else{

        
        this.setState((prevState)=>({FinArr: prevState.FinArr.concat(item1)}));
        return 'you have entered correct value';
        }
            

    }
    handledeleteone(item1) {
        console.log(item1);
        this.setState((prevState)=>({
            FinArr: this.state.FinArr.filter((item)=>{
                return item1 !==item
            })
        }))
    }
    componentDidMount(){
        const json=localStorage.getItem('FinArr');
        const FinArr=JSON.parse(json);
        console.log('finarr value is: ',FinArr);
        if (FinArr){
            this.setState((prevState)=>({FinArr}));
        }
        
    }
        componentDidUpdate(prevProps, prevState) {
         console.log('component did update');
            const json2=JSON.stringify(this.state.FinArr);
            localStorage.setItem('FinArr',json2);
        }
    formSubmit (e) {
        e.preventDefault();
        const Firstname = e.target.elements.first_name.value.trim();
        const Lastname = e.target.elements.last_name.value.trim();
        const Phone = e.target.elements.Phone_number.value.trim();
        e.target.elements.first_name.value = '';
        e.target.elements.last_name.value = '';
        e.target.elements.Phone_number.value = '';
        this.setState((prevState) => ({
            firstname: Firstname
        }));
        this.setState((prevState) => ({
            lastname: Lastname,
        }));
        this.setState((prevState) => ({
            Phonenumber: Phone
        }));
        
         let item1= {
             f_name: Firstname,
             l_name: Lastname,
             p_number: Phone,
         };
         let err=this.formSubmit1(item1)
         if(err){
             this.setState(()=>({
                 err
             }))
         }
        
    }
    

    render() {
        return (
            <div>
             {this.state.err && <p>{this.state.err}</p>}
             {this.state.finderr && <p>{this.state.finderr}</p>}
                <h1>Iam going for this </h1>
                <form onSubmit={this.formSubmit}>
                Enter Your First name: 
                <input type="text" name="first_name" placeholder="Enter your first name" /><br/>
                <br/>
                Enter Your Last name: 
                <input type="text" name="last_name" placeholder="Enter your last name" /><br/>
                <br/>
                Enter Your Phone number: 
                <input type="text" name="Phone_number" placeholder="Enter your Phonenumber" /><br/>
                <br/>
                <button>Submit!</button>
                </form>
                <br/>
                <form onSubmit={this.onEdit}>
                <input name="Search" placeholder="type name you have to find"/><button>Search</button>
                </form>
                <br/>
               
                {this.state.FinArr.map((item)=>
                      <Display key={item.f_name} 
                      displayitem={item} handledeleteone={this.handledeleteone}
                      />
                )}
                
                
            </div>
        );
    }
}
export default Forms;