import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DataGrid, { Column, GroupPanel } from 'devextreme-react/data-grid';

function DxGrid01() {
  // const [collapsed, setCollapsed] = useState(false);
  const [dataGrid, setDataGrid] = useState([]);

  useEffect(() => {
    axios.get(`http://jsonplaceholder.typicode.com/posts`)
      .then(res => {
        console.log(res);
        setDataGrid(res.data);
      })
      .catch(err => {
        console.log(err);
      });

    return () => { alert('keluar'); }
  }, [])

  return (
    <div>
      <DataGrid
        dataSource={dataGrid}
        allowColumnReordering={true}
        showBorders={true}
      >
        <GroupPanel visible={true} />
        <Column dataField="userId" dataType="string" />
        <Column dataField="id" dataType="string" />
        <Column dataField="title" dataType="string" />
        <Column dataField="body" dataType="string" />
      </DataGrid>
    </div>
  )
}

export default DxGrid01
