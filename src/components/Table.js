import React from 'react';


const Table = (props) => {
    return (


        <tr>
            <td>{props.month}</td>
            <td>{props.sales}</td>
            <td>{props.salesperson}</td>
        </tr>




    )
}

export default Table
