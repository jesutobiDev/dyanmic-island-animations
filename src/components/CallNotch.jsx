import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FaRegUser } from "react-icons/fa";
import CallIcon from '../assets/call.svg'
import Info from '../assets/info.svg'
import Speaker from '../assets/speaker.svg'
import Mic from '../assets/mic.svg'
import VideoCam from '../assets/videocam.svg'
import Close from '../assets/close.svg'
import ScreenShare from '../assets/screen-share.svg'

const CallNotch = ({ dialedNumber }) => {
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
      width: '360px',
      height: '68px',
      padding: '4px',
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

    gsap.from(containerRef.current, {
      width: '100px',
      height: '68px',
      padding: '4px',
      duration: 0.5,
      ease: 'power1.inOut',
      onComplete: () => {
        gsap.to(containerRef.current, {
          width: '360px',
          height: '68px',
          padding: '4px',
          borderRadius: '44px',
          duration: 0.5,
          ease: 'power1.inOut'
        });
      }
    });
  }, []);
  return (
    <div className={`${expandedForm ? 'rounded-[44px]  w-[360px] h-[151px] p-6 ' : 'w-[360px] h-[68px] rounded-[44px] p-4'} bg-black overflow-hidden`} onClick={toggleExpandedForm}>
      <div className={`${expandedForm ? 'w-[319px] h-[48px] flex justify-between' : 'w-full h-full flex justify-between items-center'}`}>
        <div className="flex gap-2">
          <div className="flex items-center justify-center w-[44px] h-[44px] bg-gray-200 rounded-full">
            <FaRegUser size={30} color="black" />
          </div>
          <div className="flex flex-col gap-1">
            <p className={`${expandedForm ? 'hidden' : 'text-[12px] text-[#656565]'}`}>iPhone</p>
            <p className={`${expandedForm ? 'text-[18px] text-white font-medium' : 'text-[#FFFFFF] text-[16px] font-medium'}`}>{dialedNumber}</p>
            <p className={`${expandedForm ? 'text-[12px] text-[#656565]' : 'hidden'}`}>FaceTime Audio</p>
          </div>
        </div>
        <div className={`flex gap-2 ${expandedForm ? 'hidden' : ''}`}>
          <div className="w-[38px] h-[38px] rounded-full bg-[#2FD059] flex items-center justify-center">
            <img src={CallIcon} alt="" className="w-[17px] h-[17px]" />
          </div>
          <div className="w-[38px] h-[38px] rounded-full bg-[#FE4438] flex items-center justify-center">
            <img src={CallIcon} alt="" className="w-[17px] h-[17px] rotate-[134deg]" />
          </div>
        </div>
        <div className={`${expandedForm ? 'w-[24px] h-[24px] flex items-center justify-center' : 'hidden'}`}>
          <img src={Info} alt="" className="w-[17px] h-[17px]" />
        </div>
      </div>
      <div className={`${expandedForm ? 'flex justify-between mt-5' : 'hidden'}`}>
        <div className="w-[46px] h-[46px] rounded-full bg-[#303032] flex items-center justify-center p-2">
          <img src={Speaker} alt="" />
        </div>
        <div className="w-[46px] h-[46px] rounded-full bg-white flex items-center justify-center p-2">
          <img src={Mic} alt="" />
        </div>
        <div className="w-[46px] h-[46px] rounded-full bg-[#303032] flex items-center justify-center p-3">
          <img src={VideoCam} alt="" />
        </div>
        <div className="w-[46px] h-[46px] rounded-full bg-[#303032] flex items-center justify-center p-3">
          <img src={ScreenShare} alt="" />
        </div>
        <div className="w-[46px] h-[46px] rounded-full bg-[#FE4438] flex items-center justify-center p-4">
          <img src={Close} alt="" />
        </div>

      </div>

    </div>
  )
}

export default CallNotch