import React from 'react'
import classes from './Aside.module.css'
import Header from './layout/Header'

function Aside(){
  return (
    <div className={classes.aside}>
      <Header />
    </div>
  )
}

export default Aside
