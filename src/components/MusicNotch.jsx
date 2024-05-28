import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import MusicThumbnail from '../assets/music-thumbnail.svg';
import MusicAnimation from '../assets/Music Icon Animation.svg';
import Airshare from '../assets/airshare.svg';
import PrevButton from '../assets/prev.svg';
import PlayButton from '../assets/play.svg';
import NextButton from '../assets/next.svg';

const MusicNotch = () => {
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
      className={`bg-black flex flex-col justify-center rounded-[44px] ${expandedForm ? 'p-4' : 'p-2'}`}
      onClick={toggleExpandedForm}
    >
      <div className="flex justify-between items-center w-full delay-150">
        <div className="h-full flex gap-2 items-center">
          <img
            src={MusicThumbnail}
            alt=""
            className={`${expandedForm ? 'h-[60px] w-[60px] rounded-[16px]' : 'h-[24px] w-[24px] rounded-[10px]'} transition-all duration-200 ease-in-out`}
          />
          <div className={`${expandedForm ? 'h-auto' : 'h-0 overflow-hidden'} transition-all duration-500 ease-in-out`}>
          <p className={`text-[#FFFFFF] text-[18px] font-medium transition-all duration-500 ease-in-out ${expandedForm ? 'opacity-100' : 'opacity-0'}`}>Considerations</p>
            <p className={`text-[#656565] font-normal text-[12px] mt-[1px] transition-all duration-500 ease-in-out ${expandedForm ? 'opacity-100' : 'opacity-0'}`}>Rihana, SZA</p>
          </div>
        </div>
        <div>
          <img src={MusicAnimation} alt="" className="w-[17px] h-[17px]" />
        </div>
      </div>
      <div className={`${expandedForm ? 'h-auto' : 'h-0 overflow-hidden'} transition-opacity duration-0 ease-in-out`}>
        <div className="flex justify-between items-center w-full h-auto gap-3 mt-5 transition-all duration-500 ease-in-out">
          <p className="text-[#656565] text-[11px] transition-all duration-500 ease-in-out">1:05</p>
          <div className="flex-1 bg-[#656565] h-[5px] rounded-full">
            <div className="w-[35%] bg-white rounded-full h-full"></div>
          </div>
          <p className="text-[#656565] text-[11px] transition-all duration-500 ease-in-out">-2:10</p>
        </div>
      </div>
      <div className={`${expandedForm ? '' : 'hidden'} flex justify-center items-center mt-5 transition-all duration-500 ease-in-out`}>
        <div className="flex-1 flex justify-center gap-5">
          <div className="w-6 h-6">
            <img src={PrevButton} alt="" className="w-full h-full" />
          </div>
          <div className="w-6 h-6">
            <img src={PlayButton} alt="" className="w-full h-full" />
          </div>
          <div className="w-6 h-6">
            <img src={NextButton} alt="" className="w-full h-full" />
          </div>
        </div>
        <div className="w-6 h-6">
          <img src={Airshare} alt="" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default MusicNotch;
