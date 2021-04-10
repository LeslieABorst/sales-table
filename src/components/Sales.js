import React from 'react';
import Table from './Table';
import data from '../data.json';

const Sales = () => {
    const tableData = data;
    console.log(tableData);
    return (

        <div>
            <table>
                <thead>
                    <tr>
                        <th>Month</th>
                        <th>Sales</th>
                        <th>Salesperson</th>
                    </tr>
                </thead>
                <tbody>
            {tableData.map((value, index) => {
                return <Table key={index} month={value.month} sales={value.sales} salesperson={value.salesperson} />
            })}
            </tbody>
           </table>
        </div>
    )
}

export default Sales
