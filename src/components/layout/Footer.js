import React from 'react'
import SidebarLink from '../SidebarLink';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import classes from './Footer.module.css'


export default function Footer() {
    return (
      <div className={classes.footer}>      
        <div className={classes.new_message}>
            <p>Messages</p>
            <div className={classes.icons}>
            <SidebarLink Icon={EmailOutlinedIcon} text='New Messages' fontSize={'2.4rem'}/>
            <SidebarLink Icon={KeyboardDoubleArrowUpIcon} text='New Messages' fontSize={'2.5rem'}/>
            </div>
        </div>
      </div>
  )
}
