import React, { useState } from "react";
import { PlusOutlined, SettingOutlined } from "@ant-design/icons";
import {
  Button,
  Drawer,
  Form,
  Row,
  Col,
  Input,
  Select,
  notification,
} from "antd";
import { labels } from "../constants";

function ClientFormInDrawer({
  title,
  productNumber,
  currentPage,
}: {
  title: string;
  productNumber: number;
  currentPage: number;
}) {
  const [visible, setVisible] = useState(false);

  const onClose = () => {
    setVisible(false);
    // form.resetFields();
  };

  const onOpen = () => {
    setVisible(true);
    // if (productNumber) {
    //   dispatch(
    //     productCRUD({
    //       method: "GET",
    //       id: `${productNumber}`,
    //     })
    //   ).then((res) => {
    //     form.setFieldsValue({ ...res.payload });
    //   });
    // }
  };


  return (
    <>
      {title === labels.Add ? (
        <Button type="primary" onClick={() => onOpen()}>
          <PlusOutlined />
          Add
        </Button>
      ) : (
        <Button
          type="primary"
          onClick={() => onOpen()}
          className={"editButton"}
        >
          <SettingOutlined />
        </Button>
      )}
      <Drawer
        title={
          title === labels.Add ? labels.AddDrawerTitle : labels.EditDrawerTitle
        }
        width={window.innerWidth > 900 ? 620 : window.innerWidth}
        onClose={() => onClose()}
        open={visible}
        bodyStyle={{ paddingBottom: 80 }}
      >
        <Button onClick={() => onClose()} style={{ marginRight: 8 }}>
          Cancel
        </Button>
        <Button htmlType="submit" type="primary">
          Save
        </Button>
      </Drawer>
    </>
  );
}

export default ClientFormInDrawer;
