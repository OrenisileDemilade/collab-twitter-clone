import React from 'react'
import './Middle.css'
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import VerifiedIcon from '@mui/icons-material/Verified';
import Input from './Input';
import Post from './Post';


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

      <Post
      avatar="https://cdn.pixabay.com/photo/2017/09/25/13/12/cocker-spaniel-2785074__480.jpg"
      verified={<VerifiedIcon/>}
      displayName="Boogie"
      username="@boogieman"
      text="So the sacked dancing security men went abroad with their uniforms & continue dancing. 
      I love Nigerians "
      image="https://cdn.pixabay.com/photo/2015/02/04/17/18/space-624054__480.jpg"
      />
       <Post
      avatar="https://cdn.pixabay.com/photo/2017/09/25/13/12/cocker-spaniel-2785074__480.jpg"
      verified={<VerifiedIcon/>}
      displayName="Boogie"
      username="@boogieman"
      text="So the sacked dancing security men went abroad with their uniforms & continue dancing. 
      I love Nigerians "
      image="https://cdn.pixabay.com/photo/2015/02/04/17/18/space-624054__480.jpg"
      />
      
    </div>
  )
}

export default middle
