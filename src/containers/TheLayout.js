import React from 'react'
import { useSelector } from 'react-redux'
import classNames from 'classnames'
import {
  TheContent,
  TheSidebar,
  TheAside,
  TheHeader
} from './index'

const TheLayout = (props) => {
  const darkMode = useSelector(state => state.darkMode)
  const classes = classNames(
    'c-app c-default-layout',
    darkMode && 'c-dark-theme'
  )

  return (
    <div className={classes}>
      <TheSidebar/>
      <TheAside/>
      <div className="c-wrapper">
        <TheHeader/>
        <div className="c-body">
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default TheLayout
