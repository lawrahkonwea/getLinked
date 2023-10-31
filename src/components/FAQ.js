import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer'
import Manual from '../assets/question-mark.png'
import Star from '../assets/star pu.png'
import StarWhite from '../assets/star-opaque.png'
import Star2 from '../assets/star.png'
import Question from '../assets/question.png'
import Frequent from './frequent'
import { useLocation } from 'react-router-dom'

export default function Faq() {
    const location = useLocation()

    const [ref, inView] = useInView({
        triggerOnce: false,
    });
    const [scrollY, setScrollY] = useState(false);

    useEffect(() => {
        if (inView) {
          setScrollY(true);
        }
    }, [inView]);

    useEffect(() => {
        if (location.hash) {
            const targetElement = document.querySelector(location.hash);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);
    
    return (
        <div className='section-one '>
            <div className='flex flex-col lg:flex-row w-full items-center lg:pl-[13.54%] px-[47px] lg:pr-[6.51%] lg:pt-8 pt-[47px] pb-16' id='faq'>
                <div className={`${scrollY ? 'animate__slideInUp' : ''} animate__animated flex-1 mt-10`} ref={ref}>
                    <img src={Star} alt='star' className='animate__animated animate__flash animate__infinite animate__slower lg:w-[26px] w-[18px] lg:h-8 h-[22px] lg:-ml-6 lg:mb-5'/>
                    <h1 className='lg:text-[32px] text-[20px] font-bold font-clash-display lg:w-[253px] text-center lg:text-start'>Frequently Ask <br /><span className=' text-fuchsia-500'>Question</span></h1>
                    <h2 className='lg:mt-4 mt-[6px] lg:w-[342px] lg:text-[14px] text-[12px] w-full text-center lg:text-start'>We got answers to the questions that you might want to ask about <span className='font-bold'>getlinked Hackathon 1.0</span></h2>
                    <div className='flex flex-col lg:flex-row lg:gap-12'>
                        <div className='lg:mt-[68px] mt-[45.69px] flex flex-col gap-[13.39px] lg:gap-[25px] lg:w-[427px] w-full'>
                            <Frequent title={'Can I work on a project I started before the hackathon?'} content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod laboris nisi ut aliquip ex ea commodo consequat. Duis aute proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}/>
                            <Frequent title={'What happens if I need help during the hackathon?'} content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod laboris nisi ut aliquip ex ea commodo consequat. Duis aute proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}/>
                            <Frequent title={"What happens if I don't have an idea for a project?"} content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod laboris nisi ut aliquip ex ea commodo consequat. Duis aute proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}/>
                            <Frequent title={'Can I join a team or do I have to come with one?'} content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod laboris nisi ut aliquip ex ea commodo consequat. Duis aute proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}/>
                            <Frequent title={'What happens after the hackathon ends'} content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod laboris nisi ut aliquip ex ea commodo consequat. Duis aute proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}/>
                            <Frequent title={'Can I work on a project I started before the hackathon?'} content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod laboris nisi ut aliquip ex ea commodo consequat. Duis aute proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}/>
                        </div>
                        <img src={StarWhite} alt='star' className='animate__animated animate__flash animate__infinite animate__slower lg:block hidden w-[26px] h-8 ml-[10%] mt-[27%]'/>
                    </div>
                </div>
                <div className='lg:w-[60%] w-full flex flex-col h-full mt-[63px] lg:mt-0 items-center lg:items-start'>
                    <div className='flex justify-between w-[70%] -mb-[25px]'>
                        <div className='mt-12 lg:w-[114px] w-[50px] lg:h-[71px] h-8 relative faq -ml-10 lg:ml-0'>
                            <img src={Question} alt='question' className='w-full h-full object-contain' />
                        </div>
                        <div className='lg:w-[114px] w-[60px] lg:h-[71px] h-[60px]'>
                            <img src={Question} alt='question' className='w-full h-full object-contain'/>
                        </div>
                        <div className='mt-12 lg:w-[114px] w-[50px] lg:h-[71px] h-8 relative faq-two flex mr-[30px] lg:mr-0'>
                            <img src={Question} alt='question' className='w-full h-full object-contain' />
                        </div>
                    </div>
                    <div className='flex flex-col lg:gap-8 w-full'>
                        <img src={Manual} alt='manual' className='w-full h-full object-contain animate__animated animate__pulse animate__infinite animate__slower' />
                        <div className='lg:hidden block absolute mt-[50%]'>
                            <img src={StarWhite} alt='star' className='animate__animated animate__flash animate__infinite animate__slower w-[10px] h-3'/>
                        </div>
                        <img src={Star2} alt='star' className='animate__animated animate__flash animate__infinite animate__slower lg:w-[26px] w-4 lg:h-8 h-5 self-end mr-[17%]'/>
                    </div>
                </div>
            </div>
        </div>
    )
}
