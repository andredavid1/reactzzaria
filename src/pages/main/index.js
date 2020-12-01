import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'

import Header from './header'

const ChoosePizzaSize = React.lazy(() => import('../choose-pizza-size'))

const Main = () => {
  return (
    <>
      <Header />

      <Content>
        <Suspense fallback='Loading...'>
          <Switch>
            <Route path='/' exact component={ChoosePizzaSize} />
          </Switch>
        </Suspense>
      </Content>
    </>
  )
}

const Content = styled.main`
  padding: 20px;
`

export default Main
