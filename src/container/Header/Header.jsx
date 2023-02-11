import React from 'react';
import {motion} from 'framer-motion';
import {AppWrap} from '../../wapper';
import {images} from '../../constants';

import './Header.scss';
const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => {

  const tech=[images.cpp,images.css,images.git,images.html,images.javascript,images.node,images.python,images.react,images.sass,];

  function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}
  return (
  <div className="app__header app__flex">

   
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span>💻</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hello, I am</p>
            <div className='typewriter'>
              <h1 className="head-text">Rishabh.</h1>
            </div>
            
          </div>
        </div>
        
        <div className="tag-cmp app__flex">
          <p className="p-text">Fullstack Web Developer</p>
          <p className="p-text">Engineering student</p>
        </div>
        
      </div>

      <div className="app__flex floating_island">
          <img className='bounce' src={images.island} alt="floating island" />
      </div>
    </motion.div>

   

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      {/* <img src={images.circle_logo} alt="profile_bg" /> */}
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle_logo}
        alt="profile_circle"
        className="overlay_circle"
      />
  
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {getRandom(tech,3).map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div>

  
  </div>
  );
};


export default AppWrap(Header,'home');