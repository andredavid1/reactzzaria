import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'
import t from 'prop-types'
import {
  Card as MaterialCard,
  CardActionArea,
  Divider as MaterialDivider,
  Grid,
  Typography
} from '@material-ui/core'

import pizzaFlavours from '../../fake-data/pizzas-flavours'
import { HOME } from '../../routes'

const ChoosePizzaFlavours = ({ location }) => {
  const [checkboxes, setCheckboxes] = useState(() => ({}))

  if (!location.state) {
    return <Redirect to={HOME} />
  }

  const { flavours, id } = location.state
  const title =
    flavours > 1 ? `Escolha até ${flavours} sabores` : 'Escolha 1 sabor'

  const handleChangeCheckbox = (pizzaId) => (e) => {
    if ((Object.values(checkboxes).filter(Boolean).length === flavours) && (e.target.checked)) {
      return
    }

    setCheckboxes((checkboxes) => {
      return {
        ...checkboxes,
        [pizzaId]: e.target.checked
      }
    })
  }

  return (
    <>
      <Grid container direction='column' alignItems='center'>
        <Title variant='h4'>{title}</Title>
      </Grid>

      <PizzasGrid>
        {pizzaFlavours.map((pizza) => (
          <Grid item key={pizza.id} xs>
            <Card checked={!!checkboxes[pizza.id]}>
              <Label>
                <input
                  type='checkbox'
                  checked={!!checkboxes[pizza.id]}
                  onChange={handleChangeCheckbox(pizza.id)}
                />
                <Img src={pizza.image} alt={pizza.name} />

                <Divider />

                <Typography>{pizza.name}</Typography>
                <Typography variant='h5'>
                  R$ {pizza.value[id]},00
                </Typography>
              </Label>
            </Card>
          </Grid>
        ))}
      </PizzasGrid>
    </>
  )
}

const Title = styled(Typography).attrs({
  align: 'center',
  gutterBottom: true
})``

const Divider = styled(MaterialDivider)`
  margin: 20px 0;
  width: 100%;
`

const PizzasGrid = styled(Grid).attrs({
  container: true,
  spacing: 2
})`
  padding: 20px;
`

const Card = styled(MaterialCard)`
  border: 2px solid transparent;
  border-color: ${({ checked }) => checked ? '#000' : ''}
`

const Label = styled(CardActionArea).attrs({
  component: 'label'
})`
  align-items: center;
  display: flex;
  flex-direction: column;
  min-width: 250px;
  padding: 20px 0;

  input {
    display: none;
  }
`

const Img = styled.img`
  width: 200px;
`

ChoosePizzaFlavours.propTypes = {
  location: t.object.isRequired
}

export default ChoosePizzaFlavours
