import React from 'react';

function Request(props){
    return(
        <div>
            <table>
                <tr>
                    <th>Name</th>
                    <th className="row1">Description</th>
                    <th className="row1">Quantity</th>
                </tr>
                <tr>
                    <td className="row2">{props.name}</td>
                    <td className="row2">{props.description}</td>
                    <td className="row2">{props.quantity}</td>
                </tr>
                </table>
        </div>
    
    )
}
export default Request;