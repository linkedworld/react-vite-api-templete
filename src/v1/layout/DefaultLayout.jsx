import React from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'

const DefaultLayout = () => {
  return (
    <div className='w-full p-0 b-0 flex flex-row'>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        {/* <div className="w-full body flex-grow-1 px-0"> */}
          <AppContent lg={true} xl={true} xxl={true} fluid={true} className="w-full body flex-grow-1 p-0 m-0"/>
        {/* </div> */}
        <AppFooter />
      </div>
    </div>
  )
}

export default DefaultLayout
