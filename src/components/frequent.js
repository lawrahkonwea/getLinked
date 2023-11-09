import React, { useState } from 'react';

export default function Frequent({ title, content }) {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="flex lg:gap-[13px] gap-[9px] flex-col">
      <div className="flex lg:gap-6 justify-between items-center">
        <p className="lg:text-[14px] text-[12px] lg:w-[390px]">{title}</p>
        {!showContent && <p className="text-[20px] text- text-fuchsia-500 cursor-pointer" onClick={() => setShowContent((val) => !val)}>+</p>}
        {showContent && <p className="text-[20px] text- text-fuchsia-500 cursor-pointer" onClick={() => setShowContent(false)}>-</p>}
      </div>
      {showContent && <p className="animate__animated animate__fadeInDown lg:text-[13px] text-[12px] text-white mt-3 w-[95%]" style={{ lineHeight: '150%' }}>{content}</p>}
      <div className="bg- text-fuchsia-500 [w-427px] h-[1px]" />
    </div>
  );
}
