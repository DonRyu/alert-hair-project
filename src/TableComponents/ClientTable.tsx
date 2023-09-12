import React from 'react';
import CustomTable from '../Commons/CustomTable';
import { Button, Popconfirm, Tag } from 'antd';
import ClientFormInDrawer from '../DrawerComponents/ClientFormInDrawer';
import { labels } from '../constants';
import { DeleteOutlined } from "@ant-design/icons";

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
        {
          title:"",
          width: 100,
          render:()=>{
            return (
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                {/* Drawer component for CRUD product */}
                <ClientFormInDrawer
                  title={labels.Edit}
                  productNumber={0}
                  currentPage={0}
                />
                {/* For deleting, ask user one more time to make sure the data termination */}
                <Popconfirm
                  placement="leftTop"
                  title={"Delete"}
                  // onConfirm={() => {
                  //   deleteProduct(elm.productNumber);
                  // }}
                  okText={"Yes"}
                  cancelText={"Cancel"}
                >
                  <Button type={"primary"} danger icon={<DeleteOutlined />} />
                </Popconfirm>
              </div>
            );
          }
        }
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