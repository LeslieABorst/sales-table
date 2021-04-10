import React from 'react';
import Table from './Table';
import data from '../data.json';

const Sales = () => {
    const tableData = data;
    console.log(tableData);
    return (

        <div>
            {tableData.map((value, index) => {
                return <Table key={index} month={value.month} sales={value.sales} salesperson={value.salesperson} />
            })}

        </div>
    )
}

export default Sales
