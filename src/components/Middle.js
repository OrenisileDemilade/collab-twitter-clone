import React from 'react'
import './Middle.css'
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import Input from './Input';
import Post from './Post';
import { Verified } from '@mui/icons-material';



function Middle() {
 

  return (
    <div className='middle'>
      <div className='first-section'>
        <h2>Home</h2>
        <div className='star-icon'>
          <AutoAwesomeOutlinedIcon/>
        </div>
      </div>

      <Input/>

    
      <Post
      displayName="St.demo"
      username="@boogie"
      
      text="hello nature"
      image="https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297__480.jpg"
      avatar="https://cdn.pixabay.com/photo/2015/04/20/17/38/couple-731890__480.jpg"
       />
       <Post
      displayName="Anonymous"
      username="@dhannylite"
      
      text="I'm doing NFT and i'm in trouble cause i'm wasting the money on FOREX.. Someone please help me."
      image="https://cdn.pixabay.com/photo/2022/02/10/09/39/nft-7004985__480.jpg"
      avatar="https://cdn.pixabay.com/photo/2015/07/15/09/00/man-845847__480.jpg"
       />
   
    </div>
  )
}

export default Middle
