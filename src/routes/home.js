import React, { useEffect } from 'react'
import { motion } from "framer-motion";
import Faqs from '../components/Faqs';
import { Header } from '../components/Header';
import { Homepage } from '../components/Home';
import { useLocation } from 'react-router-dom';
// import 'animate.css';


const Home = () => {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const targetElement = document.querySelector(location.hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <motion.div
    initial={{opacity: 0, y: 200}}
    animate={{opacity: 1, y: 0}}
    exit={{opacity:0, y: 0}}
    transition={{delay: 0.25, type: "spring"}}
    className='landing'
>
    <Header />
    <Homepage />
    <Faqs />
     </motion.div>
  )
}


export default Home;