import React, { useState } from 'react'
import { headData } from '../utils/data/tableHeadData';

const TableA = (props) => {
    const { mockData } = props;
    const [head,setHead]=useState(headData);
    const [menu,setMenu]=useState();
    const [tableData,setTableData]=useState(mockData);

    const sortByASC=(key)=>{
        if(key=='time'){
            tableData.sort((p,q)=>{
                const newp=p.time.split('/');
                const newq=q.time.split('/')
    
                const date1=`${newp[1]}/${newp[0]}/${newp[2]}`;
                const date2=`${newq[1]}/${newq[0]}/${newq[2]}`;
    
                const dt1=date1.split('/');
                const dt2=date2.split('/');
                
                const d1 = dt1.reverse();
                const d2 = dt2.reverse();
            return new Date(d1) - new Date(d2);
            })
        }
        else {
            tableData.sort((p,q)=>
            {
               return p[key]>q[key]?1:-1
            })
        }
    }
    const sortByDESC=(key)=>{
        if(key=='time'){
            tableData.sort((p,q)=>{
            const newp=p.time.split('/');
            const newq=q.time.split('/')

            const date1=`${newp[1]}/${newp[0]}/${newp[2]}`;
            const date2=`${newq[1]}/${newq[0]}/${newq[2]}`;

            const dt1=date1.split('/');
            const dt2=date2.split('/');
            
            const d1 = dt1.reverse();
            const d2 = dt2.reverse();
            return new Date(d2) - new Date(d1);
            })
        }
        else {
            tableData.sort((p,q)=>
            {
            return q[key]>p[key]?1:-1
            })
        }
    }

    return (
        <div className='section'>
            <h4 className="table-head-title">{props.tableTitle}</h4>
            <table className="table">
                <thead>
                    <tr>
                        {head.map((h, index) => 
                        <th key={index} onClick={()=>setMenu(p=>p=!p)}>
                            {h.head}
                            {menu&&
                            <ul className='menuDropdown' key={'menu'+index}>
                                <li>Unsort</li>
                                <li onClick={()=>sortByASC(h.key)}>Sort by ASC</li>
                                <li onClick={()=>sortByDESC(h.key)}>Sort by DESC</li>
                            </ul>}
                        </th>)}

                    </tr>
                </thead>
                <tbody>
                    {tableData.map((row, index) => {
                        return (
                        <tr>
                            <td>
                                {row.id}
                            </td>
                            <td>
                                {row.first_name}
                            </td>
                            <td>
                                {row.last_name}
                            </td>
                            <td>
                                {row.email}
                            </td>
                            <td>
                                {row.gender}
                            </td>
                            <td>
                                {row.ip_address}
                            </td>
                            <td>
                                {row.airport_code}
                            </td>
                            <td>
                                {row.time}
                            </td>
                            <td style={row.status?{backgroundColor:'rgb(94, 206, 94)'}:{backgroundColor:'rgb(238, 113, 113)'}}>
                                {row.status}
                            </td>
                            <td>
                                {row.mobile}
                            </td>
                            <td>
                                {row.area}
                            </td>
                            <td>
                                {row.show?'true':'false'}
                            </td>
                            <td>
                                {row.edit?'true':'false'}
                            </td>
                        </tr>
                        
                    )}
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default TableA