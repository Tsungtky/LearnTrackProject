import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  AuditOutlined,
  UserOutlined,
  ReadOutlined
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';

const { Header, Sider, Content, Footer } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const navigate = useNavigate()

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '/ProfileManager',
              icon: <UserOutlined />,
              label: 'Profile',
              onClick:function({key}){
                navigate(key)
              }
            },
            {
              key: '/BookShareClub',
              icon: <ReadOutlined />,
              label: 'Book Share Club',
              onClick:function({key}){
                navigate(key)
              }
            },
            {
              key: '/CookingCourseList',
              icon: <AuditOutlined />,
              label: 'Cooking Course',
              onClick:function({key}){
                navigate(key)
              }
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            height: '76vh',
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >


          <Outlet/>


        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
