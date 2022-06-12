import React, { Suspense } from 'react'
import {
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
import { CContainer, CFade } from '@coreui/react'

// routes config
import { authRoutes } from '../Routes/routes';
import AuthMiddleware from 'src/Routes/AuthMiddleware';
  
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const TheContent = () => {
  return (
    <main className="c-main">
      <CContainer fluid>
        <Suspense fallback={loading}>
          <Switch>
              {authRoutes.map((route, idx) => (
                <AuthMiddleware
                  path={route.path}
                  component={route.component}
                  key={idx}
                />
              ))}
            {/* <Redirect from="/" to="/dashboard" /> */}
          </Switch>
        </Suspense>
      </CContainer>
    </main>
  )
}

export default React.memo(TheContent)
