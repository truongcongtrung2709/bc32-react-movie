import React from 'react'
import { Outlet } from 'react-router-dom'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
// Layout cho phần authen
const Auth = () => {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
      <Outlet/>

      </Tab>
      <Tab eventKey="profile" title="Profile">
      <Outlet/>

      </Tab>
    </Tabs>
  )
}

export default Auth;