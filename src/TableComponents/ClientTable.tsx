import React from 'react';
import CustomTable from '../Commons/CustomTable';
import { Tag } from 'antd';

function ClientTable() {

  interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
  }

    const columns  = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Date',
          dataIndex: 'date',
          key: 'date',
        },
        {
          title: 'Types',
          key: 'types',
          dataIndex: 'types',
          render: (types:[]) => (
            <>
              {types.map((tag:string) => {
                return (
                  <Tag>
                    {tag.toUpperCase()}
                  </Tag>
                );
              })}
            </>
          ),
        },
      ];
      
      const data = [
        {
          key: '1',
          name: 'John Brown',
          date: '2024-09-04',
          types: ['Perm', 'Normal Cut'],
        },
        {
          key: '2',
          name: 'John Kim',
          date: '2024-09-05',
          types: ['Perm'],
        }
      ];

    return (
        <div>
            <CustomTable columns={columns} data={data}/>
        </div>
    );
}

export default ClientTable;