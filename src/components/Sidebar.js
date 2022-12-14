import React from 'react'
import './SideBar.css'
import {Tooltip} from '@mui/material'
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarLink from './SidebarLink';
import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PendingOutlinedIcon from '@mui/icons-material/PendingOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { BookmarkAddOutlined, ListAltOutlined } from '@mui/icons-material';


function Sidebar() {
  return (
    <div className='sideBar'>
      <div className='twitter-icon'>
        <TwitterIcon className='icon' fontSize='large'/>
      </div>
      <ul className='sidebarLinks'>
        <li><SidebarLink Icon={HomeIcon} text='Home' /></li>
        <li><SidebarLink Icon={TagIcon} text='Explore' /></li>
        <li><SidebarLink Icon={NotificationsNoneOutlinedIcon} text='Notifications' /></li>
        <li><SidebarLink Icon={EmailOutlinedIcon} text='Messages' /></li>
        <li><SidebarLink Icon={BookmarkAddOutlined} text='Messages' /></li>
        <li><SidebarLink Icon={ListAltOutlined} text='Messages' /></li>
        <li><SidebarLink Icon={PersonOutlineOutlinedIcon} text='Profile' /></li>
        <li><SidebarLink Icon={PendingOutlinedIcon} text='More' /></li>
      </ul>
      <Tooltip title='Tweet' enterDelay={300} >
        <button className='tweet'>
          <EditOutlinedIcon fontSize='large'/>
        </button> 
      </Tooltip>
      
      <div className='image-box'>
        <img className='image' src='https://cdn.pixabay.com/photo/2017/09/25/13/12/cocker-spaniel-2785074__480.jpg' alt=''/>
      </div>
    </div>
  )
}

export default Sidebar
