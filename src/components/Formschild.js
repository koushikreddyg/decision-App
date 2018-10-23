import React from 'react';
import Formsparent from './Formsparent';
import FormObject from './FormObject';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { FormComponentProps } from 'antd/lib/form/Form';
const FormItem = Form.Item;


class Formschild extends React.Component {
    constructor(props){
        super(props)

    }
Submitform=(e)=>{
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
        if (!err) {
          //console.log('Received values of form: ', values);
          console.log(values.userName)
          this.props.storage_item(new FormObject(values.userName, values.password));
        }
      });
    //const user_name=e.target.elements.username.value;
    //const user_details=e.target.elements.userdetails.value;
    //store this details in object and push that in array 
    
    

}

render() {
    const { getFieldDecorator } = this.props.form;
    return(
        <div>
        <Form onSubmit={this.Submitform} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </FormItem>
        
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}  placeholder="Password" />
          )}
        </FormItem>
        
        
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a className="login-form-forgot" href="">Forgot password</a><br/>
          <Button type="secondary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="">register now!</a>
        </FormItem>
        </Form>


        
        </div>
    );
}
}
//const WrappedNormalLoginForm = Form.create()(NormalLoginForm);
export default Form.create({}) (Formschild);