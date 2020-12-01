import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'

import Header from './header'

import { HOME, CHOOSE_PIZZA_FLAVOURS } from '../../routes'

const ChoosePizzaSize = React.lazy(() => import('../choose-pizza-size'))
const ChoosePizzaFlavours = React.lazy(() => import('../choose-pizza-flavours'))

const Main = () => {
  return (
    <>
      <Header />

      <Content>
        <Suspense fallback='Loading...'>
          <Switch>
            <Route path={HOME} exact component={ChoosePizzaSize} />
            <Route path={CHOOSE_PIZZA_FLAVOURS} component={ChoosePizzaFlavours} />
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
