import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
} from '@coreui/react'

import CIcon from '@coreui/icons-react';
import unosecurLogo from "../assets/images/unosecurLogo.png";
import unosecurIcon from "../assets/icons/unosecurIcon.png";

// sidebar nav config
import navigation from './_nav'

const TheSidebar = () => {
  const dispatch = useDispatch()
  const show = useSelector(state => state.sidebarShow)

  return (
    <CSidebar
      show={show}
      unfoldable
      onShowChange={(val) => dispatch({type: 'set', sidebarShow: val })}
    >
      <CSidebarBrand className="d-md-down-none" to="/" style={{backgroundColor : "white" }}>
          <CIcon
            className="c-sidebar-brand-full"
            name="unosecur-logo"
            src={unosecurLogo}
            height={35}
          />
          <CIcon
            className="c-sidebar-brand-minimized"
            name="unosecur-icon"
            src={unosecurIcon}
            height={35}
        />
      </CSidebarBrand>

      <CSidebarNav>
        <CCreateElement
          items={navigation}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle
          }}
        />
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none"/>
    </CSidebar>
  )
}

export default React.memo(TheSidebar)
