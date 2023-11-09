import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { ReactComponent as Vector } from '../assets/svg/Vector (4).svg';
import { ReactComponent as List } from '../assets/svg/list terms.svg';
import Security from '../assets/Key-man.png';
import StarOpaque from '../assets/star-opaque.png';
import StarPu from '../assets/star pu2.png';
import Star from '../assets/sata gra.png';
import Star2 from '../assets/star.png';
import Buttons from './Button';

export default function Privacy() {
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
    <div className="section privacy lg:pt-[93px] pt-[43px] pb-[128px] px-[10%]">
      <div className="w-full lg:hidden flex justify-center">
        <img src={StarOpaque} alt="star" className="animate__animated animate__flash animate__infinite animate__slower w-2 h-8 object-contain" />
      </div>
      <div className="flex lg:gap-[60px] gap-12 flex-col lg:flex-row hi">
        <div ref={ref} className={`${scrollY ? 'animate__slideInUp' : ''} animate__animated flex-1 lg:mt-[60px] mt-5`}>
          <div className="flex lg:gap-[27px] text-center justify-center lg:text-start lg:justify-start">
            <h1 className="lg:text-[32px] text-[20px] font-bold font-clash-display lg:w-[300px]">
              Privacy Policy and
              <br />
              <span className="text-fuchsia-500">Terms</span>
            </h1>
            <img src={StarOpaque} alt="star" className="animate__animated animate__flash animate__infinite animate__slower w-[26px] h-8 hidden lg:block" />
          </div>
          <div className="flex justify-between flex-col lg:flex-row items-center lg:items-start">
            <h2 className="lg:mt-[17px] lg:text-[14px] text-[12px] text-gradient-300">Last updated on September 12, 2023</h2>
            <div className="lg:flex justify-end hidden">
              <img src={StarPu} alt="star" className="animate__animated animate__flash animate__infinite animate__slower " />
            </div>
          </div>
          <p className="lg:text-[14px] text-center lg:text-start text-[12px] lg:w-[95%] lg:mt-[30px] mt-7">
            Below are our privacy & policy, which outline a lot of goodies. it’s our aim to always take of our participant
          </p>
          <div className="lg:hidden justify-end flex">
            <img src={StarPu} alt="star" className="animate__animated animate__flash animate__infinite animate__slower w-[17px] h-5" />
          </div>
          <div className="lg:mt-[69px] mt-[30px] rounded-[5px] border border-secondary bg-gradient-400 lg:pt-[59px] py-[45px] lg:pb-[55px] w-full">
            <p className="lg:text-[14px] text-[12px] text-center lg:text-start lg:px-[72px] px-[15px] leading-[216.4%]">
              At getlinked tech Hackathon 1.0, we value your privacy
              and are committed to protecting your personal information.
              This Privacy Policy outlines how we collect, use, disclose,
              and safeguard your data when you participate in our tech
              hackathon event. By participating in our event, you consent
              to the practices described in this policy.
            </p>
            <div className="lg:pl-[73px] lg:pr-[39px] px-[22px]">
              <h2 className="lg:mt-6 mt-[21px] lg:text-[16px] text-[13px] font-bold  text-fuchsia-500">Licensing Policy</h2>
              <p className="lg:text-[14px] text-[12px] font-bold">Here are terms of our Standard License:</p>
              <div className="lg:mt-[18px] mt-[21px]">
                <div className="flex gap-[14px]">
                  <div>
                    <List />
                  </div>
                  <p className="leading-[216.4%] lg:text-[14px] text-[12px]">The Standard License grants you a non-exclusive right to navigate and register for our event</p>
                </div>
                <div className="flex gap-[14px] lg:mt-[18px] mt-6">
                  <div>
                    <List />
                  </div>
                  <p className="leading-[216.4%] lg:text-[14px] text-[12px]">You are licensed to use the item available at any free source sites, for your project developement</p>
                </div>
              </div>
              <div className="mt-[19px] flex justify-center w-full">
                <Buttons padding="13px 40px" text="Read More" width="172px" bgColor="linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%)" />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-[40%] w-full h-full flex">
          <img src={Star2} alt="star" className="animate__animated animate__flash animate__infinite animate__slower w-[15px] h-[18px] absolute mt-[10%] right-[20%] animate__animated animate__flash animate__infinite animate__slower" />
          <Vector className="relative w-full h-full" />
          <div className="absolute">
            <img src={Security} alt="security" className="lg:w-full lg:h-[749px] w-[70%] h-[70%] lg:mt-[30%] mt-[30%] object-contain" />
            <div className="-mt-[10%]">
              <img src={Star} alt="star" className="animate__animated animate__flash animate__infinite animate__slower w-[15px] h-[18px]" />
            </div>
            <div className="w-full -mt-[40%]">
              <div className="flex justify-between">
                <div className="">
                  <img src={Star2} alt="star" className="animate__animated animate__flash animate__infinite animate__slower lg:w-[15px] w-[9px] lg:h-[18px] h-[10px]" />
                </div>
                <div className="">
                  <img src={StarOpaque} alt="star" className="animate__animated animate__flash animate__infinite animate__slower lg:w-[26px] w-2 lg:h-8 h-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
