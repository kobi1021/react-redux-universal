import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Switch } from 'react-router-dom';
import { Layout, Row, Button, Radio, Icon, Menu, Dropdown, Breadcrumb, Steps, Alert, Tabs } from 'antd';

const { Content } = Layout;

function handleMenuClick(e) {
  console.log('click', e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">1st item</Menu.Item>
    <Menu.Item key="2">2nd item</Menu.Item>
    <Menu.Item key="3">3rd item</Menu.Item>
  </Menu>
);

const ButtonGroup = Button.Group;

const Step = Steps.Step;

const TabPane = Tabs.TabPane;

const SubMenu = Menu.SubMenu;

const MenuItemGroup = Menu.ItemGroup;

import Header from 'client/components/header';
import Submenu from 'client/components/submenu';
import Footer from 'client/components/footer'
import RouteWithSubRoutes from 'client/routeWithSubRoutes';

//import './home.css';

class Element extends Component {
  
  state = {
    size: 'large',
    loading: false,
    iconLoading: false,
    current: 'mail',
  };

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
  }

  enterLoading = () => {
    this.setState({ loading: true });
  }

  enterIconLoading = () => {
    this.setState({ iconLoading: true });
  }
    
  render() {
    const {
      location,
      routes
    } = this.props;
      
    const size = this.state.size;

    return (
  <Layout className="layout">
    <Header/>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '12px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div className="card-container">
    <Tabs type="card">
      <TabPane tab="Buttons" key="1">
            <Row>
                <div>
                <Button type="primary">Primary</Button>
                <Button>Default</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="danger">Danger</Button>
                </div>
                <div>
                <Radio.Group value={size} onChange={this.handleSizeChange}>
                  <Radio.Button value="large">Large</Radio.Button>
                  <Radio.Button value="default">Default</Radio.Button>
                  <Radio.Button value="small">Small</Radio.Button>
                </Radio.Group>
                <br /><br />
                <Button type="primary" size={size}>Primary</Button>
                <Button size={size}>Normal</Button>
                <Button type="dashed" size={size}>Dashed</Button>
                <Button type="danger" size={size}>Danger</Button>
                <br />
                <Button type="primary" shape="circle" icon="download" size={size} />
                <Button type="primary" icon="download" size={size}>Download</Button>
                <br />
                <Button.Group size={size}>
                  <Button type="primary">
                    <Icon type="left" />Backward
                  </Button>
                  <Button type="primary">
                    Forward<Icon type="right" />
                  </Button>
                </Button.Group>
                </div>
                <div>
                <Button type="primary" shape="circle" icon="search" />
                <Button type="primary" icon="search">Search</Button>
                <Button shape="circle" icon="search" />
                <Button icon="search">Search</Button>
                <br />
                <Button shape="circle" icon="search" />
                <Button icon="search">Search</Button>
                <Button type="dashed" shape="circle" icon="search" />
                <Button type="dashed" icon="search">Search</Button>
                </div>
                <div>
                <Button type="primary">Primary</Button>
                <Button type="primary" disabled>Primary(disabled)</Button>
                <br />
                <Button>Default</Button>
                <Button disabled>Default(disabled)</Button>
                <br />
                <Button>Ghost</Button>
                <Button disabled>Ghost(disabled)</Button>
                <br />
                <Button type="dashed">Dashed</Button>
                <Button type="dashed" disabled>Dashed(disabled)</Button>
                </div>
                <div>
                <Button type="primary">primary</Button>
                <Button>secondary</Button>
                <Dropdown overlay={menu}>
                  <Button>
                    more <Icon type="down" />
                  </Button>
                </Dropdown>
                </div>
                <div>
                <span>
                <Button type="primary" loading>
                  Loading
                </Button>
                <Button type="primary" size="small" loading>
                  Loading
                </Button>
                <br />
                <Button type="primary" loading={this.state.loading} onClick={this.enterLoading}>
                  Click me!
                </Button>
                <Button type="primary" icon="poweroff" loading={this.state.iconLoading} onClick={this.enterIconLoading}>
                  Click me!
                </Button>
                <br />
                <Button shape="circle" loading />
                <Button type="primary" shape="circle" loading />
                </span>
                </div>
                <div>
                <h4>Basic</h4>
                <ButtonGroup>
                  <Button>Cancel</Button>
                  <Button type="primary">OK</Button>
                </ButtonGroup>
                <ButtonGroup>
                  <Button disabled>L</Button>
                  <Button disabled>M</Button>
                  <Button disabled>R</Button>
                </ButtonGroup>
                <ButtonGroup>
                  <Button type="primary">L</Button>
                  <Button>M</Button>
                  <Button>M</Button>
                  <Button type="dashed">R</Button>
                </ButtonGroup>

                <h4>With Icon</h4>
                <ButtonGroup>
                  <Button type="primary">
                    <Icon type="left" />Go back
                  </Button>
                  <Button type="primary">
                    Go forward<Icon type="right" />
                  </Button>
                </ButtonGroup>
                <ButtonGroup>
                  <Button type="primary" icon="cloud" />
                  <Button type="primary" icon="cloud-download" />
                </ButtonGroup>
                </div>
            </Row>
      </TabPane>
      <TabPane tab="Menu" key="2">
        <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="mail">
          <Icon type="mail" />Navigation One
        </Menu.Item>
        <Menu.Item key="app" disabled>
          <Icon type="appstore" />Navigation Two
        </Menu.Item>
        <SubMenu title={<span><Icon type="setting" />Navigation Three - Submenu</span>}>
          <MenuItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <Menu.Item key="alipay">
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
        </Menu.Item>
      </Menu>
      </TabPane>
      <TabPane tab="Steps" key="3">
        <Row>
        <Steps current={1}>
            <Step title="Finished" description="This is a description." />
            <Step title="In Progress" description="This is a description." />
            <Step title="Waiting" description="This is a description." />
        </Steps>
        </Row>
        <Row>
            <Steps>
            <Step status="finish" title="Login" icon={<Icon type="user" />} />
            <Step status="finish" title="Verification" icon={<Icon type="solution" />} />
            <Step status="process" title="Pay" icon={<Icon type="credit-card" />} />
            <Step status="wait" title="Done" icon={<Icon type="smile-o" />} />
            </Steps>
        </Row>
        <Row>
            <Steps direction="vertical" current={1}>
            <Step title="Finished" description="This is a description." />
            <Step title="In Progress" description="This is a description." />
            <Step title="Waiting" description="This is a description." />
            </Steps>
        </Row>
      </TabPane>
      
    </Tabs>
  </div>
      <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            <Row>
              <Breadcrumb>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item><a href="">Application Center</a></Breadcrumb.Item>
                <Breadcrumb.Item><a href="">Application List</a></Breadcrumb.Item>
                <Breadcrumb.Item>An Application</Breadcrumb.Item>
              </Breadcrumb>
            </Row>
            <Row>
            <div>
              <Alert message="Success Text" type="success" />
              <Alert message="Info Text" type="info" />
              <Alert message="Warning Text" type="warning" />
              <Alert message="Error Text" type="error" />
            </div>
            </Row>
            <Row>
              Sub Routes of /:
              <ul>
                {
                  routes && routes.length && routes.map(function(route,i){
                    return (<li key={i}><Link to={`${route.path}`}>{route.path}</Link></li>);
                  })
                }
              </ul>
              <Switch>
              {
                  routes && routes.length && routes.map((route, i) => ( 
                    <RouteWithSubRoutes key = { i } {...route }/>
                  ))
              } 
              </Switch>
            </Row>
      </div>
    </Content>
    <Footer/>
  </Layout>
    );
  }
}

export default connect(null)(Element);