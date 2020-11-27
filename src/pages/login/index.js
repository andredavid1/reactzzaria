import React from 'react'

import { Grid, Button } from '@material-ui/core'
import { ReactComponent as Logo } from './logo-react-zzaria.svg'

const Login = () => (
  <>
    <Grid container>
      <Grid item>
        <Logo />
      </Grid>

      <Grid item>
        <Button>Entrar com GitHub</Button>
      </Grid>
    </Grid>
  </>
)

export default Login
