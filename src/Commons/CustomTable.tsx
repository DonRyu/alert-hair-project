import React from 'react';
import type { ColumnsType } from 'antd/es/table';
import Table from 'antd/es/table';


interface CustomTableProps {
    columns: ColumnsType<any>;
    data: any[];
  }

function CustomTable({columns,data}:CustomTableProps) {

    return (
        <Table columns={columns} dataSource={data} />
    );
}

export default CustomTable;