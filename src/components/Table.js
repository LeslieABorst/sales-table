import React from 'react';


const Table = (props) => {
    return (
        <div>
           <table>
                <thead>

                </thead>
                <tbody>
                    <tr>
                        <td>{props.month}</td>
                        <td>{props.sales}</td>
                        <td>{props.salesperson}</td>
                    </tr>
                </tbody>
           </table>

        </div>

    )
}

export default Table
