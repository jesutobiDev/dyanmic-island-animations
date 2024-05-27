import { useState } from "react"
import MusicThumbnail from '../assets/music-thumbnail.svg'
import MusicAnimation from '../assets/Music Icon Animation.svg'
import Airshare from '../assets/airshare.svg'
import PrevButton from '../assets/prev.svg'
import PlayButton from '../assets/play.svg'
import NextButton from '../assets/next.svg'

const MusicNotch = () => {
  const [expandedForm, setExpandedForm] = useState(false);

  const toggleExpandedForm = () => {
    setExpandedForm(!expandedForm);
  }

  return (
    <div className={`bg-black  transition-[height] duration-200 ease-in-out flex flex-col justify-center ${expandedForm ? 'w-[364px] h-[190px] p-4 rounded-[35px]' : 'h-[34px] w-[178px] p-2 rounded-full'} `} onClick={toggleExpandedForm}>
      <div className="flex justify-between items-center w-full transition-all duration-200 ease-in-out">
        <div className="h-full flex gap-2 items-center transition-all duration-200 ease-in-out">
          <img src={MusicThumbnail} alt="" className={`${expandedForm ? 'h-[60px] w-[60px] rounded-[16px]' : 'h-[24px] w-[24px] rounded-[10px] '}  transition-all duration-200 ease-in-out  `} />
          <div className={`${expandedForm ? '' : 'hidden'} transition-all duration-200 ease-in-out`}>
            <p className="text-[#FFFFFF]  text-[18px] transition-all duration-200 ease-in-out font-medium">Considerations</p>
            <p className="text-[#656565] font-normal text-[12px] mt-[1px] transition-all duration-200 ease-in-out">Rihana, SZA</p>
          </div>
        </div>
        <div>
          <img src={MusicAnimation} alt="" className="transition-all duration-200 ease-in-out w-[17px] h-[17px]" />
        </div>
      </div>
      <div className={`${expandedForm ? '' : 'hidden'} transition-all duration-200 ease-in-out`}>
        <div className="flex justify-between items-center w-full h-auto gap-3 mt-5 transition-all duration-200 ease-in-out">
          <p className="text-[#656565] text-[11px] transition-all duration-200 ease-in-out">1:05</p>
          <div className="flex-1 bg-[#656565] h-[5px] rounded-full transition-all duration-200 ease-in-out">
            <div className="w-[35%] bg-white rounded-full h-full transition-all duration-200 ease-in-out"></div>
          </div>
          <p className="text-[#656565] text-[11px] transition-all duration-200 ease-in-out">-2:10</p>
        </div>
      </div>
      <div className={`${expandedForm ? '' : 'hidden'} flex justify-center items-center mt-5 transition-all duration-200 ease-in-out`}>
        <div  className="flex-1 flex  justify-center gap-5 transition-all duration-200 ease-in-out">
          <div className="w-6 h-6 transition-all duration-200 ease-in-out">
            <img src={ PrevButton} alt="" className="w-full h-full transition-all duration-200 ease-in-out" />
          </div>
          <div className="w-6 h-6 transition-all duration-200 ease-in-out">
            <img src={PlayButton} alt="" className="w-full h-full transition-all duration-200 ease-in-out" />
          </div>
          <div className="w-6 h-6 transition-all duration-200 ease-in-out">
            <img src={NextButton} alt="" className="w-full h-full transition-all duration-200 ease-in-out" />
          </div>
        </div>
        <div className="w-6 h-6 transition-all duration-200 ease-in-out">
          <img src={Airshare} alt="" className="w-full h-full transition-all duration-200 ease-in-out" />
        </div>
      </div>
    </div>
  )
}

export default MusicNotch


// TODO: Add smooth transition to and from expanded form 
// TODO: Add a timeout to the animations