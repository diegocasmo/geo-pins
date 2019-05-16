import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'

import Context from './context'

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { state } = useContext(Context)

  return (
    <Route
      render={props => state.isAuth
        ? <Component {...props}/>
        : <Redirect to='/login'/>
      }
      {...rest}/>
  )
}

export default ProtectedRoute
