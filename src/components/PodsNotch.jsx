import Pods from  "../assets/airpods.svg"
import { useState } from "react"

const PodsNotch = () => {
  const [expandedForm, setExpandedForm] = useState(false);

  const toggleExpandedForm = () => {
    setExpandedForm(!expandedForm);
  }
  return (
    <div className={` bg-black  rounded-full flex items-center justify-between transition-all duration-200 ease-in-out   ${expandedForm ? 'h-[82px] w-[364px] p-3' : 'h-[34px] w-[178px] p-2'  } `} onClick={toggleExpandedForm}>
      <div className="h-full flex gap-2 items-center  transition-all duration-200 ease-in-out">
      <img src={Pods} alt="" className={`${expandedForm ? 'h-[44px] w-[58px]' : 'h-[21px] w-[28px]'}  transition-all duration-200 ease-in-out`} />
      <div className={`${expandedForm ? '' : 'hidden'} transition-all duration-200 ease-in-out`}>
        <p className="text-[#656565]  text-[12px]  transition-all duration-200 ease-in-out">Connected</p>
        <p className="text-white font-medium text-[18px] mt-[1px]  transition-all duration-200 ease-in-out">Neeha&apos;s Airpods</p>
      </div>
      </div>
      <div className={` rounded-full relative  border-[#046A3366]/[.4] flex items-center justify-center  transition-all duration-200 ease-in-out ${expandedForm ? 'w-[48px] h-[48px] border-[5px]' : 'w-[23px] h-[23px] border-[3px]'}`}>
        <span className={`${expandedForm ?  '' : 'hidden'} text-[#4EEB77] font-medium text-[16px]  transition-all duration-200 ease-in-out]`}>80</span>
        <div className={` border-[#4EEB77] absolute rounded-full  transition-all duration-200 ease-in-out ${expandedForm ? 'w-[48px] h-[48px] border-[5px]' : 'w-[23px] h-[23px] border-[3px]'}`}></div>
      </div>
    </div>
  )
}

export default PodsNotch


// TODO: Add 180 degreed rotate animation
// TODO: Add Circular percentage indicator