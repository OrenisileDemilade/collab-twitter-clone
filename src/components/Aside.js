import React from 'react'
import classes from './Aside.module.css'
import Header from './layout/Header'
import Trend from './layout/Trend'


function Aside(){
  return (
    <div className={classes.aside}>
      <Header />
      <div className={classes.trend_container}>
        <Trend />
      </div>
      
    </div>
  )
}

export default Aside
