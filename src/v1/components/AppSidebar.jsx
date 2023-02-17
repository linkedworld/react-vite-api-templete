import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react'
import CIcon from '@coreui/icons-react'

import { AppSidebarNav } from './AppSidebarNav'

import { logoNegative } from '@assets/brand/logo-negative'
import { sygnet } from '@assets/brand/sygnet'

import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'

// sidebar nav config
import menu from '@system/menu'
import samples from '@system/menu/samples'

import { setSidebarUnfoldable, setSidebarShow } from '@system/store/slice/uiSlice'

const AppSidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.ui.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.ui.sidebarShow)

  return (
    <CSidebar
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch(setSidebarShow(visible))
      }}
    >
      <CSidebarBrand className="d-none d-md-flex h-[200px]" to="/">
          <CIcon className="sidebar-brand-full" icon={logoNegative} height={48} />
          {/* <CIcon className="sidebar-brand-narrow" icon={sygnet} height={48} /> */}
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav items={menu} />
          {/* <AppSidebarNav items={samples} /> */}
        </SimpleBar>
      </CSidebarNav>
      <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() => dispatch(dispatch(setSidebarUnfoldable(!unfoldable)))}
      />
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
