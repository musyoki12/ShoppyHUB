import React from 'react';

function Message(props){
    return(
        <div>
            <table>
                <tr>
                    <th>Name</th>
                    <th className="row1">Reviews</th>
                </tr>
                <tr>
                    <td className="row2">{props.name}</td>
                    <td className="row2">{props.message}</td>
                </tr>
                </table>
        </div>
    
    )
}
export default Message;