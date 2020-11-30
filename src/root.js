import React from 'react'
import { hot, setConfig } from 'react-hot-loader'
import { BrowserRouter, Route } from 'react-router-dom'
import { CssBaseline, createMuiTheme, MuiThemeProvider } from '@material-ui/core'
import AuthProvider from './contexts/auth'
import App from './App'

setConfig({
  showReactDomPatchNotification: false
})

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
})

const Root = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <AuthProvider>
        <CssBaseline />

        <BrowserRouter>
          <Route component={App} />
        </BrowserRouter>
      </AuthProvider>
    </MuiThemeProvider>
  )
}

export default hot(module)(Root)
