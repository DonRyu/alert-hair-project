import React, { useEffect, useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import Logo from "./Logo";
import { Route, Routes, useNavigate } from "react-router-dom";
import ClientTable from "../TableComponents/ClientTable";
import TypeTable from "../TableComponents/TypeTable";

const { Header, Sider, Content } = Layout;

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`${process.env.REACT_APP_BASIC_PATH}/client`);
  }, []);

  return (
    <Layout style={{ minHeight: 700 }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Logo />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "client",
              icon: <UserOutlined />,
              label: "Clients",
              onClick: () => navigate(`${process.env.REACT_APP_BASIC_PATH}/client`),
            },
            {
              key: "type",
              icon: <VideoCameraOutlined />,
              label: "Hair Types",
              onClick:()=>navigate(`${process.env.REACT_APP_BASIC_PATH}/type`)
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "nav 3",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            paddingLeft: 10,
            background: colorBgContainer,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <span>Login</span>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            height: "100%",
            background: colorBgContainer,
          }}
        >
          <Routes>
            <Route
              path={`${process.env.REACT_APP_BASIC_PATH}/client`}
              Component={ClientTable}
            />
            <Route
              path={`${process.env.REACT_APP_BASIC_PATH}/type`}
              Component={TypeTable}
            />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Sidebar;
