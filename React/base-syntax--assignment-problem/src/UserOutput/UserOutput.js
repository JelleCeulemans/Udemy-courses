import React from 'react';
import './UserOutput.css';

// class UserOutput extends Component {
//     render() {
//         return (
//             <div>
//                 <p>Username: {this.props.username}</p>
//                 <p>Test 2</p>
//             </div>
//         );
//     }
// }

const UserOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>Username: {props.username}</p>
        </div>
    )
}

export default UserOutput;