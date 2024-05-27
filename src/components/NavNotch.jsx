import { useState } from "react"
import DirectionIcon from '../assets/nav-icon.svg'
import LeftDirection from '../assets/left-direction.svg'
import AheadDirection from '../assets/ahead-direction.svg'
import JunctionDirection from '../assets/junction-direction.svg'
import DirectionLogo from '../assets/direction-logo.svg'

const NavNotch = () => {

  const [expandedForm, setExpandedForm] = useState(false);

  const toggleExpandedForm = () => {
    setExpandedForm(!expandedForm);
  }
  return (
    <div className={`bg-black flex flex-col gap-3 transition-[height] duration-500 shadow-2xl ease-in-out ${expandedForm ? 'h-[190px] w-[360px] p-6 rounded-[44px]' : 'h-[34px] w-[178px] p-4 rounded-full'}`} onClick={toggleExpandedForm}>
      <div className={`flex justify-between w-full h-full items-center  transition-all duration-200 ease-in-out ${expandedForm ? 'hidden' : ''} `}>
        <img src={DirectionIcon} alt="" className="w-[17px] h-[15px]  transition-all duration-200 ease-in-out" />
        <p className="text-[#80CEFF] text-[14px]  transition-all duration-200 ease-in-out">0.1 <sup className="text-[7px]">MI</sup></p>
      </div>
      <div className={`${expandedForm ? '' : 'hidden'} flex justify-between  transition-all duration-200 ease-in-out`}>
        <img src={LeftDirection} alt="" className="w-[27px] h-[34px]  transition-all duration-200 ease-in-out" />
        <img src={AheadDirection} alt="" className="w-[17px] h-[38px]" />
        <img src={AheadDirection} alt="" className="w-[17px] h-[38px]  transition-all duration-200 ease-in-out" />
        <img src={JunctionDirection} alt="" className="w-[35px] h-[38px]  transition-all duration-200 ease-in-out" />
      </div>
      <div className={`${expandedForm ? '' : 'hidden'} flex flex-col gap-2  transition-all duration-200 ease-in-out`}>
        <p className="text-lg text-white font-bold  transition-all duration-200 ease-in-out">90 ft</p>
        <div className="flex gap-1  transition-all duration-200 ease-in-out">
          <img src={DirectionLogo} alt="" className="w-[29px] h-[22px]  transition-all duration-200 ease-in-out" />
          <p className="text-[#656565] font-medium text-[18px]  transition-all duration-200 ease-in-out">North</p>
        </div>
        <p className="text-[#656565] font-medium text-[18px]  transition-all duration-200 ease-in-out">San Francisco</p>
      </div>
    </div>
  )
}

export default NavNotch