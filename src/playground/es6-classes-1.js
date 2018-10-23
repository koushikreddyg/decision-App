console.log('es6-clases-1.js is running');
class Person {
    constructor(name='Anonymous',age=0){
        this.name=name;
        this.age=age;
    }
    getgreeting(){
        return `Hi. My name is ${this.name}`;
    }
    getdescription(){
        return `${this.name} is ${this.age} year(s) old!`;
    }
}

class Student extends Person {
    constructor(name,age,major=''){
        super(name,age);
        this.major=major;
    }
    FindDegee(){
            return !!this.major;
    
    }
    getdescription(){
    let description= super.getdescription();
    if (this.FindDegee()){
     description+= ` and he has a degree of ${this.major}` ;
    }
    return description;
    }
}
class Traveller extends Person {
    constructor(name='anonymous',age=0,homelocation=''){
        super(name,age);
        this.homelocation=homelocation;
    }
    getverify(){
        return !!this.homelocation;
    }
    getgreeting(){
        let getgreeting=super.getgreeting();
        if(this.homelocation){
            getgreeting +=` and has lived in ${this.homelocation}`;
        }
        return getgreeting;
    }
}

let tr1= new Traveller('Andrew Mead',26,'Philadelphia');
console.log(tr1.getgreeting());
let tr2= new Traveller('Andrew Mead',undefined,undefined);
console.log(tr2.getgreeting());






