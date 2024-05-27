import { useState } from 'react';
import CallIcon from '../assets/call.svg';
import { IoBackspaceOutline } from "react-icons/io5";

const DialPad = ({ showDialPad, launchAnimation, dialedNumber, setDialedNumber, handleBackspaceClick, handleButtonClick, launchDialPad, setShowDialPad }) => {

  const combinedCallClick = () => {
    if (dialedNumber) {
      launchAnimation('call');
      setShowDialPad(false);
    }
  };


  return (
    <div className={`bg-white h-full w-full absolute top-0 left-0 z-50 pt-[70px] pb-[30px] flex flex-col ${showDialPad ? '' : 'hidden'}`}>
      <div className=' pl-[20px] text-blue-400 cursor-pointer font-medium text-lg' onClick={() => {setShowDialPad(!showDialPad)}}>Go back  home</div>
      <div className="w-full  flex items-end justify-center text-center pb-[20px] flex-1">
        <div className="text-black text-4xl font-bold tracking-wide">{dialedNumber}</div>
      </div >
      <div className="flex flex-col gap-[20px] w-full items-center p-5">
        <div className="flex gap-[35px] text-black text-base text-center ">
          <div onClick={() => handleButtonClick('1')} className="w-[80px] h-[80px] rounded-full bg-gray-200 flex items-center justify-center text-4xl font-semibold cursor-pointer">1</div>
          <div onClick={() => handleButtonClick('2')} className="w-[80px] h-[80px] rounded-full bg-gray-200 flex items-center justify-center text-4xl font-semibold cursor-pointer">2</div>
          <div onClick={() => handleButtonClick('3')} className="w-[80px] h-[80px] rounded-full bg-gray-200 flex items-center justify-center text-4xl font-semibold cursor-pointer">3</div>
        </div>
        <div className="flex gap-[35px] text-black text-base text-center ">
          <div onClick={() => handleButtonClick('4')} className="w-[80px] h-[80px] rounded-full bg-gray-200 flex items-center justify-center text-4xl font-semibold cursor-pointer">4</div>
          <div onClick={() => handleButtonClick('5')} className="w-[80px] h-[80px] rounded-full bg-gray-200 flex items-center justify-center text-4xl font-semibold cursor-pointer">5</div>
          <div onClick={() => handleButtonClick('6')} className="w-[80px] h-[80px] rounded-full bg-gray-200 flex items-center justify-center text-4xl font-semibold cursor-pointer">6</div>
        </div>
        <div className="flex gap-[35px] text-black text-base text-center ">
          <div onClick={() => handleButtonClick('7')} className="w-[80px] h-[80px] rounded-full bg-gray-200 flex items-center justify-center text-4xl font-semibold cursor-pointer">7</div>
          <div onClick={() => handleButtonClick('8')} className="w-[80px] h-[80px] rounded-full bg-gray-200 flex items-center justify-center text-4xl font-semibold cursor-pointer">8</div>
          <div onClick={() => handleButtonClick('9')} className="w-[80px] h-[80px] rounded-full bg-gray-200 flex items-center justify-center text-4xl font-semibold cursor-pointer">9</div>
        </div>
        <div className="flex gap-[35px] text-black text-base text-center ">
          <div onClick={() => handleButtonClick('*')} className="w-[80px] h-[80px] rounded-full bg-gray-200 flex items-center justify-center text-4xl font-semibold cursor-pointer">*</div>
          <div onClick={() => handleButtonClick('0')} className="w-[80px] h-[80px] rounded-full bg-gray-200 flex items-center justify-center text-4xl font-semibold cursor-pointer">0</div>
          <div onClick={() => handleButtonClick('#')} className="w-[80px] h-[80px] rounded-full bg-gray-200 flex items-center justify-center text-4xl font-semibold cursor-pointer">#</div>
        </div>
        <div className="flex text-black text-base text-center justify-end gap-[35px] w-full">
          <div className='flex items-center justify-center rounded-full w-[80px] h-[80px] bg-[#2FD059] cursor-pointer' onClick={combinedCallClick}>
            <img src={CallIcon} alt="" className='w-[30px] h-[40px]' />
          </div>
          <div onClick={handleBackspaceClick} className='w-[80px] h-[80px] flex items-center justify-center cursor-pointer'>
            <IoBackspaceOutline size={40} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DialPad;
