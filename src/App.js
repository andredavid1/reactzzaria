import React, { lazy, useContext, useEffect, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import firebase from './services/firebase'
import { LinearProgress } from '@material-ui/core'
import { AuthContext } from './contexts/auth'

const MainPage = lazy(() => import('./pages/main'))
const Login = lazy(() => import('./pages/login'))

const App = () => {
  const { setUserInfo } = useContext(AuthContext)
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log('dados do usuário: ', user)
      setUserInfo({
        isUserLoggedIn: !!user,
        user
      })
    })
  }, [])

  return (
    <Suspense fallback={<LinearProgress />}>
      <Switch>
        <Route path='/login' component={Login} />
        <Route component={MainPage} />
      </Switch>
    </Suspense>
  )
}

export default App
