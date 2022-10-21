import 'antd/dist/antd.css';
import React, { useState, useRef } from 'react';

import {
  PieChartOutlined,
  LoadingOutlined,
  UserOutlined,

} from '@ant-design/icons';

import { Layout, Menu } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import {
  Button,
  Card,
  Col,
  Form,
  Input,
  Layout,
  Menu,
  MenuProps,
  Row,
  Spin,
  Space,
  Table,
  Tag,
  Modal,
  notification
} from 'antd';
const { Header, Content, Sider, Footer } = Layout;
const { Item } = Form;
const { Column, ColumnGroup } = Table;

const items1: MenuProps['items'] = ['1', '2', '3'].map(key => ({
  key,
  label: `nav ${key}`,
}));

interface DataType {
  key: React.Key;
  firstName: string;
  lastName: string;
  age: number;
  address: string;
  tags: string[];
}

const data: DataType[] = [
  {
    key: '1',
    firstName: 'John',
    lastName: 'Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    firstName: 'Jim',
    lastName: 'Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    firstName: 'Joe',
    lastName: 'Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const App: React.FC = () => {
  const [form]                    = Form.useForm();
  const [spinLoad, setSpinLoad]   = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const mainRef                   = useRef<HTMLDivElement>(null);
  const footerRef                 = useRef<HTMLDivElement>(null);

  const handleDelete = (id: string) => {
    Modal.confirm({
      title: 'Aceitar post?',
      onOk() {
        setTimeout(() =>
          notification['success']({
            message: 'Usuário excluído',
            duration: 3
          })
        , 1000);

        setTimeout(() =>
          Modal.error({ title: 'Erro', maskClosable: true, centered: true, content: 'Internal Server Error' })
        , 1000)
      }
    });  
  };

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

            <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>

              <Row justify="center" align="middle" gutter={[25, 25]}>
                <Col xs={24} sm={18}>
                  <Spin tip="Carregando..." size="large" indicator={<LoadingOutlined spin />} spinning={spinLoad}>
                    <div className="site-card-border-less-wrapper">
                      <Card title="Cadastro de Usuários" bordered={false} style={{ minWidth: 150 }}>
                        <Form layout="vertical" form={form} onFinish={handleSubmit}>
                          <Item label="First Name" name="firstName" rules={[ { min: 6, message: 'Min of 6 characters Required' }, { required: true, message: 'First Name Required' } ]}>
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="First Name" />
                          </Item>
                          <Item label="Last Name" name="lastName" rules={[ { min: 6, message: 'Min of 6 characters Required' }, { required: true, message: 'Last Name Required' }]}>
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Last Name" />
                          </Item>
                          <Item>
                            <Button type="primary" htmlType="submit">Submit</Button>
                          </Item>
                        </Form>
                      </Card>
                    </div>
                  </Spin>
                </Col>
                <Col xs={24} sm={18}>
                  <div className="site-card-border-less-wrapper">
                    <Card title="Listagem de Usuários" bordered={false} style={{ minWidth: 150 }}>
                      <Table dataSource={data} scroll={{ x: 1 }}>
                        <ColumnGroup title="Name">
                          <Column title="First Name" dataIndex="firstName" key="firstName" />
                          <Column title="Last Name" dataIndex="lastName" key="lastName" />
                        </ColumnGroup>
                        <Column title="Age" dataIndex="age" key="age" />
                        <Column title="Address" dataIndex="address" key="address" />
                        <Column
                          title="Tags"
                          dataIndex="tags"
                          key="tags"
                          render={(tags: string[]) => (
                            <>
                              {
                                tags.map(tag => (
                                  <Tag color="blue" key={tag}>
                                    {tag}
                                  </Tag>
                                ))
                              }
                            </>
                          )}
                        />
                        <Column
                          title="Action"
                          key="action"
                          render={(_: any, record: DataType) => (
                            <Space size="middle">
                              <a>Invite {record.lastName}</a>
                              <a onClick={() => handleDelete('id')}>Delete</a>
                            </Space>
                          )}
                        />
                      </Table>
                    </Card>
                  </div>
                </Col>
              </Row>
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
