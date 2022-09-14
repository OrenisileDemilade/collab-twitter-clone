import { ChatBubbleOutline, FavoriteBorder, Publish, Repeat } from '@mui/icons-material'
import React from 'react'
import './Post.css'

function Post({displayName, username, verified,text,image,avatar,}) {
  return (
    <div className='post-container'>
      <div className='post'>
        <img className='post-avatar' src={avatar} alt=''/>
        <div className='post-body'>
            <div className='name'>
                <div className='display-name'>{displayName}</div>    
                <div className='verified'>{verified}</div>
                <div className='user-name'>{username}</div>
            </div>
            <p className='text'>{text}</p>
            <img className='post-image' src={image} alt=''/>
            <div className='post-footer'>
                <ChatBubbleOutline fontSize='large'/>
                <Repeat fontSize='large'/>
                <FavoriteBorder fontSize='large'/>
                <Publish fontSize='large'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Post
