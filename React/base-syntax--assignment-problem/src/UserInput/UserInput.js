import React from 'react';

// class UserInput extends Component {
    
//     render() {
//         return (
//             <div>
//                 <input type="text" onChange={this.props.handleOnChange}  />
//             </div>
//         );
//     }
// }

const UserInput = (props) => {
    const inputStyle = {
        border: '2px solid red'
    };
    return <input type="text" style={inputStyle} onChange={props.handleOnChange} value={props.currentName}/>
}

export default UserInput;

