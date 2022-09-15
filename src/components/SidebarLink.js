import React from 'react'
import './SidebarLink.css'
import {Tooltip} from '@mui/material'

function SidebarLink({Icon,text, fontSize, onClick}) {
  return (
    <Tooltip title={text} enterDelay={300} fontSize="larger">
        <div className='sidebar-links' onClick={onClick}>
        <Icon className='sidebar-icon' style={{fontSize: `${fontSize ? fontSize : '3rem'}`}} />
        </div>
    </Tooltip>
  )
}

export default SidebarLink
