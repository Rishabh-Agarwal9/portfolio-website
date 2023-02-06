import React from 'react'
import {BsInstagram} from 'react-icons/bs';
import {AiFillGithub,AiFillLinkedin} from 'react-icons/ai';

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <a href="https://www.linkedin.com/in/rishabh-agarwal-8a2855230/"><AiFillLinkedin/></a>
            
        </div>
        <div>
            <a href="https://www.instagram.com/rishabh_agarwal9/"><BsInstagram/></a>
            
        </div>
        <div>
            <a href="https://github.com/Rishabh-Agarwal9"><AiFillGithub/></a>
            
        </div>

    </div>
  )
}

export default SocialMedia