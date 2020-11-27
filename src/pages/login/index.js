import React from 'react'
import styled from 'styled-components'
import firebase from 'firebase/app'
import 'firebase/auth'

import { Grid, Button } from '@material-ui/core'
import { ReactComponent as MainLogo } from './logo-react-zzaria.svg'

const firebaseConfig = {
  apiKey: 'AIzaSyBAGZjW7pUWcd-HSkWCiI6PCplTaeJvIn0',
  authDomain: 'reactzzariafirebase.firebaseapp.com',
  databaseURL: 'https://reactzzariafirebase.firebaseio.com',
  projectId: 'reactzzariafirebase',
  storageBucket: 'reactzzariafirebase.appspot.com',
  messagingSenderId: '663962955720',
  appId: '1:663962955720:web:e21abc97f63d2f17a35afd',
  measurementId: 'G-G0L75LYP7D'
}

firebase.initializeApp(firebaseConfig)

const Login = () => (
  <Container>
    <Grid container justify='center' spacing={10}>
      <Grid item>
        <Logo />
      </Grid>

      <Grid item xs={12} container justify='center'>
        <GitHubButton onClick={() => {
          const provider = new firebase.auth.GithubAuthProvider()
          firebase.auth().signInWithRedirect(provider)
        }}
        >Entrar com GitHub
        </GitHubButton>
      </Grid>
    </Grid>
  </Container>
)

const Container = styled.div`
  padding: 20px;
`

const Logo = styled(MainLogo)`
  width: 100%;
`

const GitHubButton = styled(Button).attrs({
  variant: 'contained',
  fullWidth: true
})`
  && {
    font-size: 20px;
    max-width: 480px;
    padding: 15px;
    text-transform: none;
  }
`

export default Login
