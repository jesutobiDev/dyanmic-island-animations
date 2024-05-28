import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Pods from '../assets/airpods.svg';

const PodsNotch = () => {
  const [expandedForm, setExpandedForm] = useState(false);
  const containerRef = useRef(null);
  const timeoutRef = useRef(null);

  const expandAnimation = () => {
    gsap.to(containerRef.current, {
      width: '364px',
      height: '82px',
      padding: '12px',
      borderRadius: '44px',
      duration: 0.3,
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
      duration: 0.3,
      ease: 'power1.inOut',
      onComplete: () => {
        gsap.to(containerRef.current, {
          width: '178px',
          height: '34px',
          padding: '8px',
          borderRadius: '44px',
          duration: 0.3,
          ease: 'power1.inOut'
        });
      }
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className={`bg-black flex items-center justify-between rounded-[44px] ${expandedForm ? 'p-3' : 'p-2'}`}
      onClick={toggleExpandedForm}
    >
      <div className="h-full flex gap-2 items-center">
        <img
          src={Pods}
          alt=""
          className={`${expandedForm ? 'h-[44px] w-[58px]' : 'h-[21px] w-[28px]'} transition-all duration-300 ease-in-out`}
        />
        <div
          className={`transition-opacity duration-0 ease-in-out ${expandedForm ? 'h-auto' : 'h-0 overflow-hidden'}`}
        >
          <p className={`text-[#656565] text-[12px] transition-all duration-500 ease-in-out ${expandedForm ? 'opacity-100' : 'opacity-0'}`}>Connected</p>
          <p className={`text-white font-medium text-[18px] mt-[1px] transition-all duration-500 ease-in-out ${expandedForm ? 'opacity-100' : 'opacity-0'}`}>Neeha&apos;s Airpods</p>
        </div>
      </div>
      <div className={`rounded-full relative border-[#046A3366]/[.4] flex items-center justify-center ${expandedForm ? 'w-[48px] h-[48px] border-[5px]' : 'w-[23px] h-[23px] border-[3px]'} transition-all duration-300 ease-in-out`}>
        <span className={`text-[#4EEB77] font-medium text-[16px] ${expandedForm ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 ease-in-out`}>80</span>
        <div className={`border-[#4EEB77] absolute rounded-full ${expandedForm ? 'w-[48px] h-[48px] border-[5px]' : 'w-[23px] h-[23px] border-[3px]'} transition-all duration-300 ease-in-out`}></div>
      </div>
    </div>
  );
};

export default PodsNotch;
