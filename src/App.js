import React, { lazy, useContext, useEffect, Suspense, useState } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import t from 'prop-types'
import firebase from './services/firebase'
import { LinearProgress } from '@material-ui/core'
import { AuthContext } from './contexts/auth'

import { HOME, LOGIN } from './routes'

const MainPage = lazy(() => import('./pages/main'))
const Login = lazy(() => import('./pages/login'))

const App = ({ location }) => {
  const { userInfo, setUserInfo } = useContext(AuthContext)
  const [didCheckUserIn, setDidCheckUserIn] = useState(false)

  const { isUserLoggedIn } = userInfo

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUserInfo({
        isUserLoggedIn: !!user,
        user: user && {
          ...user,
          firstName: user.displayName.split(' ')[0]
        }
      })
      setDidCheckUserIn(true)
    })
  }, [setUserInfo])

  if (!didCheckUserIn) {
    return <LinearProgress />
  }

  if ((isUserLoggedIn) && (location.pathname === LOGIN)) {
    return <Redirect to={HOME} />
  }

  if ((!isUserLoggedIn) && (location.pathname !== LOGIN)) {
    return <Redirect to={LOGIN} />
  }

  return (
    <Suspense fallback={<LinearProgress />}>
      <Switch>
        <Route path={LOGIN} component={Login} />
        <Route component={MainPage} />
      </Switch>
    </Suspense>
  )
}

App.propTypes = {
  location: t.object.isRequired
}

export default App
