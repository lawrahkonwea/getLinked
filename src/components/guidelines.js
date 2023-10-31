import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer'
import Manual from '../assets/sittinglady.png'
import Star from '../assets/star-opaque.png'
import Star2 from '../assets/star.png'

export default function Guidelines() {
    const [ref, inView] = useInView({
        triggerOnce: false,
    });
    const [scrollY, setScrollY] = useState(false);

    useEffect(() => {
        if (inView) {
          setScrollY(true);
        }
    }, [inView]);

    return (
        <div className='section border-bt'>
            <div className='flex flex-col-reverse lg:flex-row items-center w-full px-12 lg:pl-[11.6%] lg:pr-[6.58%] lg:py-1 pb-[19px]'>
                <div className={`${scrollY ? 'animate__slideInUp' : ''} animate__animated flex-1 mt-[10px] lg:mt-0`} ref={ref}>
                    <div className='flex flex-col lg:flex-row lg:gap-[88px]'>
                        <h1 className='text-center lg:text-start lg:text-[32px] text-[20px] font-bold font-clash-display lg:w-[170px]'>Rules and <br /><span className='text-secondary'>Guidelines</span></h1>
                        <div className='w-full flex justify-end lg:block'>
                            <img src={Star} alt='star' className='animate__animated animate__flash animate__infinite animate__slower lg:w-[26px] w-3 lg:h-8 h-[14px]'/>
                        </div>
                    </div>
                    <div className='lg:mt-4 mt-[9px] flex flex-col lg:flex-row lg:gap-[22px] gap-[15px]'>
                        <p className='lg:text-[14px] text-[13px] text-center lg:text-start leading-[27.5px]'>
                            Our tech hackathon is a melting pot of visionaries, and its purpose is as
                            clear as day: to shape the future. Whether you're a coding genius, a 
                            design maverick, or a concept wizard, you'll have the chance to transform 
                            your ideas into reality. Solving real-world problems, pushing the boundaries
                            of technology, and creating solutions that can change the world,
                            that's what we're all about!
                        </p>
                        <div className='flex lg:self-end w-full justify-center -ml-[17%] lg:ml-0'>
                            <img src={Star2} alt='star' className='animate__animated animate__flash animate__infinite animate__slower lg:w-[26px] w-[10px] lg:h-8 h-3 object-contain'/>
                        </div>
                    </div>
                </div>
                <div className='lg:w-[45%] w-full flex h-full'>
                    <div className='lg:hidden flex items-center'>
                        <img src={Star2} alt='star' className='animate__animated animate__flash animate__infinite animate__slower lg:w-[26px] w-[10px] lg:h-8 h-3 object-contain'/>
                    </div>
                    <div className='flex gap-8 w-full'>
                        <img src={Manual} alt='manual' className='w-full h-full object-contain' />
                    </div>
                </div>
            </div>
        </div>
    )
}
