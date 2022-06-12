import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {
  CSidebar,
  CSidebarClose
} from '@coreui/react'
import { Button } from 'reactstrap';

const TheAside = () => {
  const show = useSelector(state => state.asideShow)
  const dispatch = useDispatch()
  const setState = (state) => dispatch({type: 'set', asideShow: state})

  return (
    <CSidebar
      aside
      colorScheme='light'
      size='lg'
      overlaid
      show={show}
      onShowChange={(state) => setState(state)}
    >
      <CSidebarClose onClick={() => setState(false) } />
      {/*aside content*/}
      <div className="nav-underline">
        <div className="nav nav-tabs">
          <div className="nav-item text-center">
            <button type="button" className="btn btn-outline-danger btn-lg mt-5 mb-5 ml-5">Logout</button>
          </div>
        </div>
      </div>
    </CSidebar>
  )
}

export default React.memo(TheAside)
