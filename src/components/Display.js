import React from 'react';
import Forms from './Forms';
class Display extends React.Component {
    render() {
        return(
            <div>
            <div>
            <button onClick={(e)=>{this.props.handledeleteone(this.props.displayitem)}}>delete me!</button>
            <p>first name is : {this.props.displayitem.f_name}</p>
            <p>last name is : {this.props.displayitem.l_name}</p>
            <p>Phone number is: {this.props.displayitem.p_number}</p>
            </div>
            <br/>
            </div>
        );
    }

}
export default Display;