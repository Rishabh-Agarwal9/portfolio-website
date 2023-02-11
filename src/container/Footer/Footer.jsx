import React,{useState} from 'react';
import {images} from '../../constants';
import { AppWrap, MotionWrap } from '../../wapper';
import {client} from '../../client';

import './Footer.scss';
const Footer = () => {
  const [formData, setFormData] = useState({name: '',email:'',message:''});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const{name,email,message} =formData;

  const handleChangeInput=(e)=>{
    const {name,value}=e.target;

    setFormData({...FormData, [name]:value});
  }

  const handleSubmit=()=>{
    setLoading(true);

    const contact={
      _type: 'contact',
      name: name,
      email: email,
      message: message
    }

    client.create(contact)
      .then(()=>{
        setLoading(false);
        setIsFormSubmitted(true);
      })
  }

  return (
    <>
      <h2 className='head-text footer-text'> Interested in working together? <span>Chat with me!</span> </h2>
      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt="email" />
          <a href="mailto:rishabh.9agarwal@gmail.com" className='p-text'>rishabh.9agarwal@gmail.com</a>
        </div>

        <div className='app__footer-card'>
          <img src={images.linkedin} alt="linkedin" />
          <a href="https://www.linkedin.com/in/rishabh-agarwal-8a2855230/" className='p-text'>Message me on Linkedin</a>
        </div>

      </div>


    {!isFormSubmitted?
      <div className='app__footer-form app__flex'>
        <div className='app__flex'>
          <input className='p-text' type="text" placeholder='Your Name' name="name" value={name} onChange={handleChangeInput}/>
        </div>

        <div className='app__flex'>
          <input className='p-text' type="email" placeholder='Your email' name="email" value={email} onChange={handleChangeInput}/>
        </div>

        <div>
          <textarea 
          placeholder='Your Message'
          className='p-text'
          value={message}
          name="message"
          onChange={handleChangeInput}
          ></textarea>
        </div>

       

        <button type='button' className='p-text' onClick={handleSubmit}>{loading?'Sending': 'Send Message'}</button>
      </div>
      : <div>
        <h3 className='head-text footer-text'>Thank you for getting in touch! </h3>
      </div>}


      <div className="copyright">
          <p className="p-text">@2023 RISHABH</p>
          <p className="p-text">All rights reserved</p>
        </div>

    </>
  )
}

export default AppWrap(
  MotionWrap(Footer,'app__footer'),
  'contact',
  'app__onecolor'
);