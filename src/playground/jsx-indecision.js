console.log('App.js is running!');

const app = {
    title: 'Indecision App',
    subtitle: 'Put my life in hands of Computer', 
    options: [],
};
const Formsubmit = (e)=>{
    e.preventDefault();
    console.log("Form is submitted");
    const option = e.target.elements.Options.value;
    option?app.options.push(option):undefined;
    e.target.elements.Options.value='';
    console.log(app.options);
    tempaltefn();
};
const removeAll=(e)=>{
e.preventDefault();
app.options=[];
tempaltefn();
};
const removeoptions=(e)=>{
    e.preventDefault();
    const leng= Math.floor(Math.random()*app.options.length);
    console.log(leng);
    alert(app.options[leng]);
};

const appRoot=document.getElementById('app');
const tempaltefn=()=>{
const template = (
    <div>
    <h1>Title: {app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length>0?"here are the options":"No options"}</p>
    <ol>
    {app.options.map((opt)=> <li key={opt}>The options are: {opt}</li>) }
    </ol>
    <button disabled={app.options.length===0} onClick={removeoptions}>What should I Remove</button>
    <button onClick={removeAll}>Remove all</button>
    <p>The Length of the array is: {app.options.length}</p>
    <form onSubmit={Formsubmit}>
    <input name= "Options" type="text"/>
    <button>Add Options</button>
    </form>
    </div>
);
ReactDOM.render(template, appRoot);
};

tempaltefn();