import 'antd/dist/antd.css';
import React, { useState, useRef } from 'react';

import {
  PieChartOutlined,
  SettingOutlined
} from '@ant-design/icons';

import { Form, Layout, Menu } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
const { Header, Content, Sider, Footer } = Layout;

const App: React.FC = () => {
  const [form]                    = Form.useForm();
  const [spinLoad, setSpinLoad]   = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const mainRef                   = useRef<HTMLDivElement>(null);

  const handleSubmit = (values: any) => {
    console.log(values);

    setSpinLoad(true);

    setTimeout(() => {
      setSpinLoad(false);
      form.resetFields();
    }, 1000);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header className="header"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0
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
      </Header>
      <Layout>
      <Sider
        collapsible
        onCollapse={() => {
          // if(mainRef.current) {
          //   let collapsedValue = !collapsed;
            
          //   if(collapsedValue) {
          //     mainRef.current.style.marginLeft = '';
          //     mainRef.current.style.marginLeft = '96px transition: margin 0.5s ease';
          //   }
          //   else {
          //     mainRef.current.style.margin = '';
          //     mainRef.current.style.margin = '80px 16px 10px 216px transition: margin 0.5s ease;';              
          //   }
          //   setCollapsed(!collapsed);
          // }
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
        <Content ref={mainRef} style={{ margin: "16px 16px", background: "#fff", marginLeft: '200px', marginTop: '64px' }}>
          <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
            <span>some item</span>
              {  Array.from({ length: 100 }, (_, index) => (
                  <span key={index}>
                    {index % 20 === 0 && index ? 'more' : '...'}
                    <br />
                  </span>
                ))
              }
          </div>
        </Content>
        <Footer style={{ textAlign: 'center', marginLeft: '200px' }}>Copyrights &copy; 2020 All Rights Reseverd by Company.</Footer>
      </Layout>
    </Layout>
    </Layout>
  );
}

export default App;
