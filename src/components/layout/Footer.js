import React from 'react'
import SidebarLink from '../SidebarLink';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import classes from './Footer.module.css'
import { useState } from 'react';


export default function Footer() {
  const [showMessage, setShowMessage] = useState(false)

  function showMessageHandler() {
    setShowMessage(true)
    console.log('hii')
  }
  function hideMessageHandler() {
    setShowMessage(false)
    console.log('hii')
  }

    return (
      <div className={`${classes.footer} ${!showMessage ? '' : classes.show_message}`}>      
        <div className={classes.new_message}>
            <p>Messages</p>
            <div className={classes.icons}>
            <SidebarLink Icon={EmailOutlinedIcon} text='New Messages' fontSize={'2.4rem'}/>
            {!showMessage && <SidebarLink Icon={KeyboardDoubleArrowUpIcon} text='New Messages' fontSize={'2.5rem'} onClick={showMessageHandler} />}
            {showMessage && <SidebarLink Icon={KeyboardDoubleArrowDownIcon} text='Collapse' fontSize={'2.5rem'} onClick={hideMessageHandler} />}
            </div>
        </div>
      </div>
  )
}
