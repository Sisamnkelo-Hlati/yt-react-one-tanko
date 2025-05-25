import React, { useState } from 'react'
import MaterialTable from 'material-table'

const MasterSiteListTable = () => {

    const [tableData, settableData] = useState([])  
    
        const columns = [
            {title:"Name", field:"name"},
            {title:"Email", field:"email"},
            {title:"Addres", field:"addres"},
            {title:"Phone", field:"phone"},
            {title:"Code", field:"code"}
            
        ]


  return (
    <div>
      <MaterialTable columns={columns} data={tableData}/>
    </div>
  )
}

export default MasterSiteListTable
