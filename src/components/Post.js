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
               {verified && <div className='verified'>{verified}</div>}
                <div className='user-name'>{username}</div>
            </div>
            <p className='text'>{text}</p>
            <img className='post-image' src={image} alt=''/>
            <div className='post-footer'>
              <div className='chat-bubble-container'>
                <ChatBubbleOutline className='chat-bubble' fontSize='large'/>
              </div>
              <div className='repeat-container'>
                <Repeat className='repeat' fontSize='large'/>
              </div>
              <div className='favorite-container'>
                <FavoriteBorder className='favorite-border' fontSize='large'/>
              </div>
              <div className='publish-container'>
                <Publish className='publish' fontSize='large'/>
              </div>
                
                
                
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default Post
