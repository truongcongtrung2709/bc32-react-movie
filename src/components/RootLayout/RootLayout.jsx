import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header'

const RootLayout = () => {
  return (
    <div className='container' style={{minHeight: "100vh"}}>
        <Header/>
        <Outlet/>
    </div>
  )
}

export default RootLayout