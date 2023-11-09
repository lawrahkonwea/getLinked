import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/navigation';
import StarOpaque from '../assets/star-opaque.png';
import { ReactComponent as Group } from '../assets/svg/Group 1.svg';
import Star from '../assets/sata gra.png';
import Guy from '../assets/3d-graphic-designer-showing-thumbs-up-png 1.png';
import Girl from '../assets/1f6b6-2640.png';
import GuyWalk from '../assets/image_processing20200511-10310-13mnlsx.png';
import RegistrationForm from '../components/forms/registrationForm';
import Confirmation from '../components/confirmation';

export default function Registration() {
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 0 }}
      transition={{ delay: 0.25, type: 'spring' }}
      className="section lg:min-h-[110vh] min-h-auto registration"
    >
      <Navigation />
      <div className="lg:hidden w-full pt-[47px] px-[13%]" onClick={() => navigate('/')}>
        <Group />
      </div>
      <h1 className="lg:hidden px-[17.1%] pt-6 text-[15px] font-bold text-secondary">Register</h1>
      <div className="lg:mt-[68px] mt-[31px] px-[6.7%] flex flex-col lg:flex-row lg:pb-[57px] pb-6 lg:gap-[30px] gap-[11.73px]">
        <div className="flex-1 flex px-[10%] lg:px-0">
          <img src={Guy} alt="3d" className="w-full h-full object-cover" />
          <div className="absolute right-[15%] mt-[40%] lg:hidden">
            <img src={Star} alt="star" className="animate__animated animate__flash animate__infinite animate__slower lg:w-[26px] w-[14px] lg:h-8 h-[13px]" />
          </div>
        </div>

        <div className="lg:w-[55%] w-full">
          <div className="lg:rounded-[12px] flex lg:flex-col contact-box w-full gap-[17px] lg:gap-0">
            <div className="flex justify-end lg:w-full lg:-ml-[15%] mt-[30%] lg:mt-0">
              <img src={StarOpaque} alt="star" className="animate__animated animate__flash animate__infinite animate__slower lg:w-[26px] w-[14px] lg:h-8 h-[18px] object-contain" />
            </div>
            <div className="w-full lg:w-auto">
              <h1 className="mt-[15px] text-[32px] font-semibold text-secondary hidden lg:block">Register</h1>
              <div className="lg:mt-[33px] flex gap-[7px] items-center">
                <h2 className="lg:text-[14px] text-[12px]">Be part of this movement!</h2>
                <div className="flex walk -mt-5">
                  <img src={Girl} alt="walkingirl" className="animate__animated animate__fadeInLeft animate__slower animate__infinite lg:w-[26px] w-[22.94px] lg:h-[26px] h-[22.94px]" />
                  <img src={GuyWalk} alt="walkinguy" className="animate__animated animate__fadeInLeft animate__slower animate__infinite lg:w-[30px] w-[26.47px] lg:h-[30px] h-[26.47px]" />
                </div>
              </div>
              <h1 className="lg:mt-[19px] lg:text-[24px] text-[20px]">CREATE YOUR ACCOUNT</h1>
              <RegistrationForm setSuccess={setSuccess} success={success} />
            </div>
            <div className="flex items-end mb-[17%] lg:hidden">
              <img src={Star} alt="star" className="animate__animated animate__flash animate__infinite animate__slower lg:w-[26px] w-[14px] lg:h-8 h-[13px]" />
            </div>
          </div>
        </div>
      </div>
      {success && <Confirmation success={success} setSuccess={setSuccess} />}
    </motion.div>
  );
}
