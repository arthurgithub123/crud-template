import 'antd/dist/antd.css';
import React, { useState, useRef } from 'react';

import {
  PieChartOutlined,
  SettingOutlined
} from '@ant-design/icons';

import { Layout, Menu } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
  MenuProps,
const { Header, Content, Sider, Footer } = Layout;
const items1: MenuProps['items'] = ['1', '2', '3'].map(key => ({
  key,
  label: `nav ${key}`,
}));

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const mainRef                   = useRef<HTMLDivElement>(null);
  const footerRef                 = useRef<HTMLDivElement>(null);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header className="header"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0
          right: 0,
          display: 'flex'
        }}
      >
        <div className="logo" />
        <Menu mode="horizontal" theme="dark" className="flex-setting">
          <Menu.Item>Home</Menu.Item>
          <Menu.Item>Contact</Menu.Item>
          <Menu.Item>About</Menu.Item>
          <SubMenu icon={<SettingOutlined />} title="Settings">
            <Menu.ItemGroup title="Basic Settings">
              <Menu.Item key="setting:2">
                <a href={"/sessions/logout/"} target="_self">
                  Signout
                </a>
              </Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
        </Menu>
        <div className="logo"
          style={{
            width: '201px',
            height: '64px',
            marginTop: '-2px',            
            marginLeft: '-50px',
            marginRight: '40px',
            color: 'white',
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1666205529095-ec35b4b9dfd0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="logo"
            style={{
              width: '100%',
              height: '100%'
            }}
          />
        </div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
      </Header>
      <Layout>
        <Sider
          collapsible
          onCollapse={() => {
            if (mainRef.current && footerRef.current) {
              let collapsedValue = !collapsed;

              if (collapsedValue) {
                mainRef.current.style.transition = 'margin 0.2s ease';
                mainRef.current.style.marginTop = '80px';
                mainRef.current.style.marginRight = '16px';
                mainRef.current.style.marginBottom = '10px';
                mainRef.current.style.marginLeft = '96px';
                footerRef.current.style.transition = 'margin 0.2s ease';
                footerRef.current.style.marginLeft = '80px';
              }
              else {
                mainRef.current.style.transition = 'margin 0.2s ease';
                mainRef.current.style.marginTop = '80px';
                mainRef.current.style.marginRight = '16px';
                mainRef.current.style.marginBottom = '10px';
                mainRef.current.style.marginLeft = '216px';
                footerRef.current.style.transition = 'margin 0.2s ease';
                footerRef.current.style.marginLeft = '200px';
              }

              setCollapsed(!collapsed);
            }
          }}
          style={{
            height: '83vh',
            position: 'fixed',
            top: '64px',
            left: '0px',
            overflow: 'auto',
            scrollbarWidth: 'thin',
          }}
        >
          <div className="logo" />
          <Menu theme="dark"
            defaultSelectedKeys={['key1']}
            selectedKeys={['key1']}
            mode="inline"
            style={{ height: '100%' }}
          >
            <Menu.Item key="key1" icon={<PieChartOutlined />}>
              <span>1 Products</span>
            </Menu.Item>
            <Menu.Item key="key2" icon={<PieChartOutlined />}>
              <span>2 Categories</span>
            </Menu.Item>
            <Menu.Item key="key3" icon={<PieChartOutlined />}>
              <span>3 Suppliers</span>
            </Menu.Item>
            <Menu.Item key="key4" icon={<PieChartOutlined />}>
              <span>4</span>
            </Menu.Item>
            <Menu.Item key="key5" icon={<PieChartOutlined />}>
              <span>5</span>
            </Menu.Item>
            <Menu.Item key="key6" icon={<PieChartOutlined />}>
              <span>6</span>
            </Menu.Item>
            <Menu.Item key="key7" icon={<PieChartOutlined />}>
              <span>7</span>
            </Menu.Item>
            <Menu.Item key="key8" icon={<PieChartOutlined />}>
              <span>8</span>
            </Menu.Item>
            <Menu.Item key="key9" icon={<PieChartOutlined />}>
              <span>9</span>
            </Menu.Item>
            <Menu.Item key="key10" icon={<PieChartOutlined />}>
              <span>10</span>
            </Menu.Item>
            <Menu.Item key="key11" icon={<PieChartOutlined />}>
              <span>11</span>
            </Menu.Item>
            <Menu.Item key="key12" icon={<PieChartOutlined />}>
              <span>12</span>
            </Menu.Item>
            <Menu.Item key="key13" icon={<PieChartOutlined />}>
              <span>13</span>
            </Menu.Item>
            <Menu.Item key="key14" icon={<PieChartOutlined />}>
              <span>14</span>
            </Menu.Item>
            <Menu.Item key="key15" icon={<PieChartOutlined />}>
              <span>15</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Content
            ref={mainRef}
            style={{
              marginTop: '80px',
              marginRight: '16px',
              marginBottom: '10px',
              marginLeft: '216px'
            }}>
            <div style={{ padding: 24, minHeight: 360 }}>
              <span>some item</span>
              {Array.from({ length: 100 }, (_, index) => (
                <span key={index}>
                  {index % 20 === 0 && index ? 'more' : '...'}
                  <br />
                </span>
              ))
              }
            </div>
          </Content>
          <Footer
            ref={footerRef}
            style={{
              textAlign: 'center',
              marginLeft: '200px'
            }}
          >
            Copyrights &copy; 2020 All Rights Reseverd by Company.</Footer>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default App;
