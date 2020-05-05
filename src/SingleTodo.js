import React, {Component} from 'react';

// class SingleTodo extends Component{
//     constructor(){
//         super();
//     }

//     render(){
//         return(
//             <li>{this.props.todo}<button onClick={this.props.delete}>X</button></li>
//         )
//     }
// }

//using function to perfom above task since this component does not have internal state
const SingleTodo = props => {
    return(
        <li>{props.todo}<button onClick={props.delete}>X</button></li>
    );
}

export default SingleTodo;