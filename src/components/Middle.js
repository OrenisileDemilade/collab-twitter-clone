import React from 'react'
import './Middle.css'
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import Input from './Input';


function middle() {
  return (
    <div className='middle'>
      <div className='first-section'>
        <h2>Home</h2>
        <div className='star-icon'>
          <AutoAwesomeOutlinedIcon/>
        </div>
      </div>

      <Input/>

    </div>
  )
}

export default middle
