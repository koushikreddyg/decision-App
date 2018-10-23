class FormObject  {
    constructor(user_name,user_details){
            this.name= user_name;
            this.details = user_details;
            this.created_date= new Date();
            this.updated_date= new Date();
    }

    
}
export default FormObject;