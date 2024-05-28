import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import DirectionIcon from '../assets/nav-icon.svg';
import LeftDirection from '../assets/left-direction.svg';
import AheadDirection from '../assets/ahead-direction.svg';
import JunctionDirection from '../assets/junction-direction.svg';
import DirectionLogo from '../assets/direction-logo.svg';

const NavNotch = () => {
  const [expandedForm, setExpandedForm] = useState(false);
  const timeoutRef = useRef(null);
  const containerRef = useRef(null);

  const expandAnimation = () => {
    gsap.to(containerRef.current, {
      width: '360px',
      height: '190px',
      padding: '16px',
      borderRadius: '44px',
      duration: 0.5,
      ease: 'power1.inOut'
    });
  };

  const collapseAnimation = () => {
    gsap.to(containerRef.current, {
      width: '178px',
      height: '34px',
      padding: '8px',
      borderRadius: '44px',
      duration: 0.3,
      ease: 'power1.inOut'
    });
  };

  const toggleExpandedForm = () => {
    if (expandedForm) {
      collapseAnimation();
      clearTimeout(timeoutRef.current);
      setExpandedForm(false);
    } else {
      expandAnimation();
      setExpandedForm(true);
      timeoutRef.current = setTimeout(() => {
        collapseAnimation();
        setExpandedForm(false);
      }, 5000);
    }
  };

  useEffect(() => {
    // Initial animation on mount
    gsap.from(containerRef.current, {
      width: '100px',
      height: '34px',
      padding: '8px',
      duration: 0.5,
      ease: 'power1.inOut',
      onComplete: () => {
        gsap.to(containerRef.current, {
          width: '178px',
          height: '34px',
          padding: '8px',
          borderRadius: '44px',
          duration: 0.5,
          ease: 'power1.inOut'
        });
      }
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className={`bg-black flex flex-col gap-3 shadow-2xl rounded-[44px]  ${expandedForm ? 'p-6' : 'p-4'}`}
      onClick={toggleExpandedForm}
    >
      <div className={`flex justify-between w-full h-full items-center transition-all duration-200 ease-in-out ${expandedForm ? 'h-auto' : 'h-0 overflow-hidden'}`}>
        <img src={DirectionIcon} alt="" className="w-[17px] h-[15px] transition-all duration-200 ease-in-out" />
        <p className="text-[#80CEFF] text-[14px] transition-all duration-200 ease-in-out">0.1 <sup className="text-[7px]">MI</sup></p>
      </div>
      <div className={`${expandedForm ? '' : 'hidden'} flex justify-between transition-all duration-200 ease-in-out`}>
        <img src={LeftDirection} alt="" className="w-[27px] h-[34px] transition-all duration-200 ease-in-out" />
        <img src={AheadDirection} alt="" className="w-[17px] h-[38px]" />
        <img src={AheadDirection} alt="" className="w-[17px] h-[38px] transition-all duration-200 ease-in-out" />
        <img src={JunctionDirection} alt="" className="w-[35px] h-[38px] transition-all duration-200 ease-in-out" />
      </div>
      <div className={`${expandedForm ? '' : 'h-0 overflow-hidden'} flex flex-col gap-2 transition-all duration-200 ease-in-out`}>
        <p className="text-lg text-white font-bold transition-all duration-200 ease-in-out">90 ft</p>
        <div className="flex gap-1 transition-all duration-200 ease-in-out">
          <img src={DirectionLogo} alt="" className="w-[29px] h-[22px] transition-all duration-200 ease-in-out" />
          <p className="text-[#656565] font-medium text-[18px] transition-all duration-200 ease-in-out">North</p>
        </div>
        <p className="text-[#656565] font-medium text-[18px] transition-all duration-200 ease-in-out">San Francisco</p>
      </div>
    </div>
  );
};

export default NavNotch;
