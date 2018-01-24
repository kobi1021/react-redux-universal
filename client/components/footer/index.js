import React, { Component } from 'react';
import { Layout } from 'antd';
const { Footer } = Layout;

export default class Element extends Component {

  render() {
    return (
        <Footer style={{ textAlign: 'center' }}>
          ©2017 Created By Biko Allen {`<biko.allen@gmail.com>`}
        </Footer>
    );
  }
}