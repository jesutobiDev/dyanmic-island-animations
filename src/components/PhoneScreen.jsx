import Clock from './Clock'
import Notch from './Notch'
// import Camera from './Camera'
import BackgroundImage from '../assets/iphone-background.webp'
import Navigation from './Navigation'
import { useState } from 'react'
import DialPad from './DialPad'

const PhoneScreen = () => {
  const [animationType, setAnimationType] = useState("");
  const [showDialPad, setShowDialPad] = useState(false);
  const [dialedNumber, setDialedNumber] = useState('');

  const handleButtonClick = (value) => {
    setDialedNumber((prev) => prev + value);
  };

  const handleBackspaceClick = () => {
    setDialedNumber((prev) => prev.slice(0, -1));
  };

  const launchAnimation = (animationType) => {
    setAnimationType(animationType);
}

  const launchDialPad = () => {
    setShowDialPad(!showDialPad);
  }


  return (
    <div className=" w-full h-full rounded-[60px] border-[10px] border-black relative overflow-hidden">
        <div className='bg-black/[.6] absolute top-0 left-0 w-full h-full z-10 hover:bg-transparent transition-all duration-500 ease '>
        <Notch animationType={animationType} dialedNumber={dialedNumber} setAnimationType={setAnimationType} />
        {/* <Camera/> */}
        <Clock/>
        </div>
        <img src={BackgroundImage} alt="" className='absolute top-0 left-0 inset-0 object-cover h-full w-full' />
        <DialPad showDialPad={showDialPad} setAnimationType = {setAnimationType} launchAnimation={launchAnimation} dialedNumber={dialedNumber} setDialedNumber={setDialedNumber} handleBackspaceClick={handleBackspaceClick} handleButtonClick={handleButtonClick} launchDialPad={launchDialPad} setShowDialPad={setShowDialPad}   />
        <Navigation setAnimationType={setAnimationType} launchDialPad={launchDialPad} launchAnimation={launchAnimation}  />
    </div>
  )
}

export default PhoneScreen
