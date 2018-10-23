console.log('practice all is working');
const details ={
    name:'Koushik',
    age: 26,
    hobbies: []
}

const change=(e)=>{
    e.preventDefault();
    let store= e.target.elements.caption.value;
    store?details.hobbies.push(store):undefined;
    console.log(details.hobbies);
    e.target.elements.caption.value='';
    display();
}

const Reset=(e)=> {
    e.preventDefault();
    details.hobbies=[];
    display();
};
const randomhobbies=(e)=> {
    e.preventDefault();
    let number= Math.floor(Math.random()*details.hobbies.length)
    console.log(number);
    alert(details.hobbies[number]);
    display();
}
let vision=false;
const toggle =(e)=>{
    e.preventDefault();
    vision=!vision;
    display();
};


const display=()=> {
const practice_all = (
    <div>
    <form onSubmit={change}>
    <input name="caption" type="text"/>
    <button>Submit!</button><br/><br/>
    </form>
    <button disabled={details.hobbies.length===0} onClick={Reset}>Reset!</button>
    <button disabled={details.hobbies.length===0} onClick={randomhobbies}>Show me Specific task!</button>
    <h1>This ia my TODO list Application</h1>
    <h2>Name of the applicant is: {details.name}</h2>
    {details.hobbies.length>0?<h4>Your hobbies are</h4>:<h4>No hobbies are there for you</h4>}
    {details.hobbies.length>0 && <h3>Here are the hobbies</h3>}
    {<p>number of hobbies are: {details.hobbies.length}</p>}
    <ol>
    {
        details.hobbies.map((item)=>{
            return <li key={item}>Your hobbies are: {item}</li>
        })
    }
    </ol>
    <h1>Visibility toggle</h1>
    <button onClick={toggle}>{vision?'hide':'show'}</button>
    {
        vision && (
            <div>
            <p>This is content</p>
            </div>
        )
    }

    </div>
);
ReactDOM.render(practice_all,document.getElementById('app'));
};
display();