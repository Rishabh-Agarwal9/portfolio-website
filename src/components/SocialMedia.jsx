import React from 'react'
import {BsInstagram} from 'react-icons/bs';
import {AiFillGithub,AiFillLinkedin} from 'react-icons/ai';

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <a href="https://www.linkedin.com/in/rishabh-agarwal-8a2855230/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin/></a>
            
        </div>
        <div>
            <a href="https://www.instagram.com/rishabh_agarwal9/" target="_blank" rel="noopener noreferrer"><BsInstagram/></a>
            
        </div>
        <div>
            <a href="https://github.com/Rishabh-Agarwal9" target="_blank" rel="noopener noreferrer"><AiFillGithub/></a>
            
        </div>

    </div>
  )
}

export default SocialMedia