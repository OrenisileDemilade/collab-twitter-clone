import React from 'react'
import './SidebarLink.css'
import {Tooltip} from '@mui/material'

function SidebarLink({Icon,text, fontSize}) {
  return (
    <Tooltip title={text} enterDelay={300} style={{fontSize:'3rem'}}>
        <div className='sidebar-links'>
        <Icon className='sidebar-icon' style={{fontSize: `${fontSize ? fontSize : '3rem'}`}} />
        </div>
    </Tooltip>
  )
}

export default SidebarLink
