import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer'
import Star from '../assets/star.png'
import Star2 from '../assets/star pu.png'
import StarOpaque from '../assets/star-opaque.png'
import Champion from '../assets/award.png'
import Silver from '../assets/silver_medal 1.png'
import Gold from '../assets/gold_medal 1.png'
import Bronze from '../assets/bronze_medal 1.png'

export default function Prizes() {
    const [ref, inView] = useInView({
        triggerOnce: false,
    });
    const [ref2, inView2] = useInView({
        triggerOnce: false,
    });
    const [scrollY, setScrollY] = useState(false);
    const [scrollX, setScrollX] = useState(false);

    useEffect(() => {
        if (inView) {
          setScrollY(true);
        }
    }, [inView]);
    
    useEffect(() => {
        if (inView2) {
          setScrollX(true);
        }
    }, [inView2]);

    return (
        <div className='section lg:pt-[74px] pt-[46px] lg:pb-[149px] pb-[31px] px-[8%]'>
            <div className='flex flex-col lg:flex-row w-full gap-[37px]'>
                <div className='flex-1 h-full flex flex-col lg:gap-[150px] gap-[17px]'>
                    <img src={Star2} alt='star' className='animate__animated animate__flash animate__infinite animate__slower lg:w-[26px] w-[7px] lg:h-8 h-[9px]'/>
                    <div ref={ref} className={`${scrollY ? 'animate__slideInUp' : ''} animate__animated flex flex-col w-full items-center lg:hidden text-center`}>
                        <div className='flex'>
                            <div className='w-full'>
                                <h1 className='text-[20px] font-bold font-clash-display'>Prizes and</h1> 
                                <span className='text-secondary text-[20px] font-bold font-clash-display mb-[3px]'>Rewards</span>
                            </div>
                            <img src={Star2} alt='star' className='animate__animated animate__flash animate__infinite animate__slower lg:w-[26px] w-[7px] lg:h-8 h-[9px] absolute right-[25%] mt-[5%]'/>
                        </div>
                        <h2 className='text-[12px] w-full mb-[23px]'>Highlight of the prizes or rewards for winners and for participants.</h2>
                    </div>
                    <img src={Champion} alt='champion' className='w-full h-full object-contain' />
                </div>
                <div className='lg:w-[55%] w-full'>
                    <div className='w-full'>
                        <div ref={ref2} className={`${scrollX ? 'animate__slideInUp' : ''} animate__animated lg:flex flex-col w-full items-center hidden`}>
                            <div className='w-[401px]'>
                                <h1 className='text-[32px] font-bold font-clash-display'>Prizes and</h1> 
                                <span className='text-secondary text-[32px] font-bold font-clash-display mb-5'>Rewards</span>
                            </div>
                            <h2 className='text-[16px] w-[401px] mb-[83px]'>Highlight of the prizes or rewards for winners and for participants.</h2>
                        </div>
                        <div className='flex lg:mt-0 -mt-8'>
                            <img src={Star} alt='star' className='animate__animated animate__flash animate__infinite animate__slower lg:w-[26px] w-[10px] lg:h-8 h-3'/>
                            <img src={StarOpaque} alt='star' className='animate__animated animate__flash animate__infinite animate__slower lg:block hidden w-[26px] h-8 ml-[45%]'/>
                        </div>
                        <div className='flex lg:gap-[30px] gap-[12.99px] justify-center mt-[120px]'>
                            <div className='border border-secondary rounded-lg bg-gradient-100 lg:pb-[33px] pb-[22.5px] lg:h-[296px] h-[125.6px] lg:w-[212px] w-[90px] flex flex-col items-center'>
                                <div className='absolute lg:-mt-[75px] -mt-[30px] lg:w-[170px] w-[75.9px] lg:h-[171px] h-[76.4px]'>
                                    <img src={Silver} alt='silver' className='h-full w-full object-contain'/>
                                </div>
                                <div className='mt-[15px] flex items-center flex-col text-center h-full justify-end'>
                                    <p className='lg:text-[36px] text-[12px] font-bold'>2nd</p>
                                    <p className='lg:text-[24px] text-[12px] font-semibold -mt-2'>Runner</p>
                                    <p className='px-4 lg:text-[32px] text-[14px] font-bold text-secondary lg:-mt-2 mt-0'>N300,000</p>
                                </div>
                            </div>
                            <div className='border border-secondary relative rounded-lg bg-gradient-100 lg:h-[345px] h-[147.3px] -mt-[23px] lg:pb-[33px] pb-[22.5px] lg:w-[212px] w-[90px] flex flex-col items-center'>
                                <div className='absolute lg:-mt-[120px] -mt-[60px] lg:w-[256px] w-[125.6px] lg:h-[256px] h-[125.6px]'>
                                    <img src={Gold} alt='silver' className='h-full w-full object-contain'/>
                                </div>
                                <div className='mt-[15px] flex items-center flex-col text-center h-full justify-end'>
                                    <p className='lg:text-[36px] text-[12px] font-bold'>1st</p>
                                    <p className='lg:text-[24px] text-[12px] font-semibold -mt-2'>Runner</p>
                                    <p className='px-4 lg:text-[32px] text-[14px] font-bold text-secondary lg:-mt-2 mt-0'>N400,000</p>
                                </div>
                            </div>
                            <div className='border border-secondary rounded-lg bg-gradient-100 lg:h-[296px] h-[125.6px] lg:pb-[33px] pb-[22.5px] lg:w-[212px] w-[90px] flex flex-col items-center'>
                                <div className='absolute lg:-mt-[75px] -mt-[30px] lg:w-[170px] w-[75.9px] lg:h-[171px] h-[76.4px]'>
                                    <img src={Bronze} alt='silver' className='h-full w-full object-contain'/>
                                </div>
                                <div className='mt-[15px] flex items-center flex-col text-center h-full justify-end'>
                                    <p className='lg:text-[36px] text-[12px] font-bold'>3rd</p>
                                    <p className='lg:text-[24px] text-[12px] font-semibold -mt-2'>Runner</p>
                                    <p className='px-4 lg:text-[32px] text-[14px] font-bold text-secondary lg:-mt-2 mt-0'>N150,000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex w-[77%] justify-between lg:mt-[10px] mt-[53px]'>
                <img src={Star} alt='star' className='animate__animated animate__flash animate__infinite animate__slower lg:w-[15px] w-[10px] lg:h-[18px] h-3 absolute lg:static -mt-[70%] lg:mt-0 right-[20%]'/>
                <img src={StarOpaque} alt='star' className='animate__animated animate__flash animate__infinite animate__slower lg:w-[26px] w-[10px] lg:h-8 h-3'/>
            </div>
        </div>
    )
}
