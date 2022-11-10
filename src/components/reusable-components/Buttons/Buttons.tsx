import React from 'react'
import {
    Button,
} from '@material-ui/core'
import useStyles from './stylesheet'

const Buttons = () => {
    const classes = useStyles()
  return (
    <Button className={classes.checkoutButton}>
        Complete Checkout
    </Button>
  )
}

export default Buttons