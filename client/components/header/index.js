import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Layout, Menu } from 'antd';
const { Header } = Layout;

export default class Element extends Component {

  render() {
    return (
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
    );
  }
}
