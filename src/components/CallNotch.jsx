import { useState } from "react"
import { FaRegUser } from "react-icons/fa";
import CallIcon from '../assets/call.svg'

const CallNotch = ({ dialedNumber }) => {
  const [expandedForm, setExpandedForm] = useState(false);

  const toggleExpandedForm = () => {
    setExpandedForm(!expandedForm);
  }
  return (
    <div className={`${expandedForm ? ' ' : 'w-[360px] h-[68px] rounded-[44px] p-4 flex justify-between items-center'  } bg-black`} onClick={toggleExpandedForm}>
      <div className="flex gap-2">
        <div className="flex items-center justify-center w-[44px] h-[44px] bg-gray-200 rounded-full">
        <FaRegUser size={30} color="black" />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-[12px] text-[#656565]">iPhone</p>
          <p className="text-[#FFFFFF] text-[16px] font-medium">{dialedNumber}</p>
        </div>
      </div>
      <div className="flex gap-2">
        <div className="w-[38px] h-[38px] rounded-full bg-[#2FD059] flex items-center justify-center">
          <img src={CallIcon} alt="" className="w-[17px] h-[17px]" />
        </div>
        <div className="w-[38px] h-[38px] rounded-full bg-[#FE4438] flex items-center justify-center">
          <img src={CallIcon} alt="" className="w-[17px] h-[17px] rotate-[134deg]" />
        </div>
      </div>
    </div>
  )
}

export default CallNotch