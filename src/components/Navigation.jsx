import CallIcon from '../assets/call.svg'
import MusicIcon from '../assets/music-icon.png'
import EarpodsIcon from '../assets/airpods.svg'
import FaceIdIcon from '../assets/faceid.svg'
import { PiArrowBendUpRightBold } from "react-icons/pi";

const Navigation = ({ launchAnimation, launchDialPad }) => {



    return (
        <div className="bg-red w-full h-[70px] absolute bottom-[10px] flex gap-2 md:gap-2 items-center px-4 z-20 justify-between">
            <div className='bg-[#2FD059] rounded-[15px] h-[50px] md:h-[60px] w-[50px] md:w-[60px] overflow-hidden flex items-center justify-center' onClick={launchDialPad} >
                <img src={CallIcon} alt="" className="w-[20px] h-[20px]" />
            </div>
            <div className='bg-white rounded-[15px] h-[50px] md:h-[60px] w-[50px] md:w-[60px] flex items-center justify-center' onClick={() => launchAnimation("music")}>
                <img src={MusicIcon} alt="" className="w-[30px] h-[30px]" />
            </div>
            <div className='bg-white/[.4] rounded-[15px] h-[50px] md:h-[60px] w-[50px] md:w-[60px] flex items-center justify-center' onClick={() => launchAnimation("pods")}>
                <img src={EarpodsIcon} alt="" className='w-[35px] h-[25px]' />
            </div>
            <div className='bg-black rounded-[15px] h-[50px] md:h-[60px] w-[50px] md:w-[60px] flex items-center justify-center' onClick={() => launchAnimation("faceId")}>
                <img src={FaceIdIcon} alt="" className="w-[37px] h-[37px]" />
            </div>
            <div className='bg-black rounded-[15px] h-[50px] md:h-[60px] w-[50px] md:w-[60px] flex items-center justify-center' onClick={() => launchAnimation("nav")}>
                <PiArrowBendUpRightBold color="white" size={25} />
            </div>
        </div>
    )
}

export default Navigation
