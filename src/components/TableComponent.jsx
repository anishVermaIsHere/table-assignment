import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { BiSortAlt2 } from 'react-icons/bi';
import BootstrapTable from 'react-bootstrap-table-next';
import TableHeaderColumn from 'react-bootstrap-table-next';

const TableComponent = (props) => {
    // destructuring from props
    const { tableTitle, data, config } = props;
    // const [sort,setSort]=useState(false);
    // state initialise
    const [tableData, setTableData] = useState(data);
    const tableArr = [];

    const tableUpdate = () => {
        const newData = data.forEach(d => {
            const fields = config.map(e => e.ref);
            const obj = fields.reduce((acc, field) => {
                acc[field] = d[field];
                return acc;
            }, {})
            console.log('table data', obj)
            return obj;
        })
        setTableData(newData);
    }

    const test = () => {
        data.forEach(d => {
            const res = config.map(e => {
                return e.ref == d[e.ref];

            });
        })
    }

    test();

    useEffect(() => {
        tableUpdate();
    }, []);

    // for table headings
    const tableHead = () => {
        return config.map((item, index) =>
            <th className="col-head" key={index}>
                {item.head}
                {item.sort ? <BiSortAlt2 className='sort-icon' /> : ''}
            </th>
        )
    }

    return (
        <div className='section'>
            <h4 className="table-head-title">{tableTitle}</h4>
            <BootstrapTable keyField='id' data={data} columns={config} />

            {/* <h4 className="table-head-title">{tableTitle}</h4>
            <table className="table">
                <thead>
                    <tr>{tableHead()}</tr>
                </thead>
                <tbody>
                    {/* {   tableData.map(pr=>
                        <>
                            <tr>
                                <td className='td-item'>
                                    <span className='avatar'>
                                        <img src={pr.person.avatar} alt='#' />
                                    </span>
                                    {pr.person.name}
                                </td>
                                <td className='td-item'>{pr.city}</td>
                                <td className='td-item'>
                                    <NavLink to='#'>
                                        {pr.email}
                                    </NavLink>
                                </td>
                                <td className='td-item'>{pr.joiningDate}</td>
                                <td className='td-item'>{pr.role}</td>

                            </tr>
                        </> 
                        )
                            
                    } */}

            {/* </tbody> */}
            {/* </table> */}
        </div>
    )
}

export default TableComponent