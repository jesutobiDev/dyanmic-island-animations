import PhoneScreen from "./PhoneScreen"
import ToggleSilentMode from "./ToggleSilentMode"
import VolumeButton from "./VolumeButton"
import PowerButton from "./PowerButton"

const Phone = () => {
  return (
   <div className="bg-[#4a4a4a] rounded-[60px] h-[800px]  md:h-[880px] w-[400px] md:w-[404px] flex items-center justify-center p-[5px] relative ">
    <PhoneScreen/>
    <ToggleSilentMode/>
    <VolumeButton/>
    <PowerButton/>
   </div>
  )
}

export default Phone