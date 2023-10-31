import React from 'react'
import Navigation from './navigation'
import HackathonGuy from '../assets/man-wearing-smart-glasses-touching-virtual-screen 1.png'
import Light from '../assets/vector.png'
import Star from '../assets/star.png'
import StarOpaque from '../assets/star-opaque.png'
import Chain from '../assets/chain-9365116-7621444.png'
import Flames from '../assets/1f4a5.png'
import { ReactComponent as Vector } from '../assets/svg/Vector 4.svg'
import Buttons from './Button'
import { useNavigate } from 'react-router-dom'
import Countdown from './Countdown'


export default function Hero() {
    const navigate = useNavigate();

    return (
        <div className='section-hero overflow-hidden lg:min-h-[110vh] min-h-auto'>
            <Navigation />
           
            <div  className="w-full flex justify-end typed-header text-right mt-[31px] lg:text-[36px] text-[16px] italic font-bold"> 'Igniting a Revolution in HR Innovation'</div>   
          
            <div className='flex lg:flex-row flex-col-reverse'>
                <img src={Star} alt='star' className='animate__animated animate__flash animate__infinite animate__slower desktop:w-[26px] w-[10px] desktop:h-8 h-3 ml-[182px] desktop:mt-0 mt-[18px]'/>
                <div className='w-full flex justify-end'>
                    <Vector className='lg:mr-[55px] mr-[33px] lg:w-fit w-[115px] lg:h-fit h-[7px]'/>
                </div>
            </div>
            <img src={StarOpaque} alt='star' className='animate__animated animate__flash animate__infinite animate__slower lg:w-[26px] w-[6px] lg:h-8 h-2 right-[45%] absolute'/>
            <div className='flex lg:flex-row flex-col lg:mt-[27px] mt-[30px] w-full lg:items-start items-center'>
                <div className='lg:ml-[8.4%] lg:mt-10 mt-[14px] lg:absolute'>
                    <h1 className='text-center lg:text-start text-[32px] lg:text-[80px] font-bold font-clash-display heading'>getlinked Te<span>c</span>h</h1>
                    <div className='flex items-center justify-center lg:justify-start -mb-[5px]'>
                        <h1 className='text-[32px] lg:text-[80px] font-bold font-clash-display text-fuchsia-500'>Hackathon <span className='text-secondary'>1.0</span></h1>
                        <img src={Chain} alt='chain' className='mix-blend-lighten lg:w-fit lg:h-fit w-8 h-8'/>
                        <img src={Flames} alt='flames' className='lg:w-[58px] w-[22.12px] lg:h-[58px] h-[22.12px]'/>
                    </div>
                    <div className='lg:w-[70%] w-full mt-2 '>
                        <h2 className='w-[264px] lg:w-full text-center lg:text-start lg:text-[20px] text-[13px]'>Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</h2>
                    </div>
                    <div className='lg:mt-10 mt-6 flex justify-center lg:justify-start'>
                        <Buttons functions={() => navigate('/registration')} text={'Register'} width={'172px'} bgColor={'linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%)'} />
                    </div>
                    <img src={StarOpaque} alt='star' className='animate__animated animate__flash animate__infinite animate__slower lg:w-[26px] w-[6px] lg:h-8 h-2 lg:mt-[5%] lg:ml-[35%] ml-[30%] absolute'/>
                    <Countdown />
                </div>
                <div className='w-full flex h-full lg:justify-end justify-center right-0 relative lg:static'>
                    <img src={HackathonGuy} alt='hackathon guy' className='relative lg:w-[55%] w-full h-full object-cover mix-blend-luminosity' /> 
                    <img src={Light} alt='light' className='App-logo absolute lg:right-0 lg:w-[50%] w-full lg:h-[641px] h-full mix-blend-hard-light object-contain -mt-[3%]' /> 
                </div>
            </div>
        </div>
    )
}
