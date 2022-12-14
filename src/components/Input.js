import React from 'react'
import { useRef, useState } from "react"
import './Input.css'
import CloseIcon from '@mui/icons-material/Close';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import TodayOutlinedIcon from '@mui/icons-material/TodayOutlined';
import Picker from '@emoji-mart/react'





function Input() {
  const [input, setInput] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const filePickerRef = useRef(null);
  
  const [showEmojis, setShowEmojis] = useState(false);
  const [loading, setLoading] = useState(false);

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  };

  const addEmoji = (e) => {
    let sym = e.unified.split("-");
    let codesArray = [];
    sym.forEach((el) => codesArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codesArray);
    setInput(input + emoji);
  };

  const sendPost = async () => {
    if (loading) return;
    setLoading(true);
  };


  return (
    <div className='input'>
      <div className='input-container'>
        <img className='input-pic' src='https://cdn.pixabay.com/photo/2017/09/25/13/12/cocker-spaniel-2785074__480.jpg' alt=''/>

        <div className='text-container'>
          <div className='inner-container'  >
            <textarea value={input} onChange={(e) => setInput(e.target.value)} rows="2" className='text-area' placeholder="What's happening? "/>

            {selectedFile &&(
            <div className='close-icon-container'>
              <div className='close-icon' onClick={() => setSelectedFile(null)}>
                <CloseIcon/>
              </div>
              <img src={selectedFile} alt="" className='selected-file'/>
            </div>  
            )}
          </div>

          {!loading &&
            <div className='middle-icons-container'>
              <div className='middle-icons'>
                <div className='photo-icon-container' onClick={() => filePickerRef.current.click()} >
                  <InsertPhotoIcon className='photo-icon' fontSize='large'/>
                  <input type='file' className='photo-icon-input' onChange={addImageToPost} ref={filePickerRef} />
                </div>

                <div className='photo-icon-container'>
                  <GifBoxOutlinedIcon fontSize='large' />
                </div>

                <div className='photo-icon-container' style={{transform: "rotateZ(90deg)"}} >
                   <LeaderboardOutlinedIcon fontSize='large' />
                </div>

                <div className='photo-icon-container' onClick={() => setShowEmojis(!showEmojis)}>
                   <SentimentSatisfiedAltOutlinedIcon fontSize='large' />
                </div>

                <div className='photo-icon-container'>
                   <TodayOutlinedIcon fontSize='large' />
                </div>      

              

              <div className='picker' >
                {showEmojis && (
                  <Picker className="picker"
                  onSelect={addEmoji}
                  theme="dark"
                  />
                )}         
              </div>  
              </div>

              <button className='tweet-btn' 
               disabled={!input.trim() && !selectedFile } 
              onClick={sendPost} 
              >Tweet</button>


            </div>
            }
        </div>
        
      </div>
    </div>
  )
}

export default Input
