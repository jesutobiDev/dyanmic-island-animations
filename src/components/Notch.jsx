import DefaultNotch from "./DefaultNotch";
import CallNotch from "./CallNotch";
import PodsNotch from "./PodsNotch";
import MusicNotch from "./MusicNotch";
import NavNotch from "./NavNotch";
import FaceIdNotch from "./FaceIdNotch";

const Notch = ({ animationType, dialedNumber , setAnimationType}) => {

  const notchComponents = {
    "": DefaultNotch,
    call: (props) => <CallNotch {...props} />,
    pods: PodsNotch,
    music: MusicNotch,
    nav: NavNotch,
    faceId: FaceIdNotch,
  };

  const NotchComponent = notchComponents[animationType] || DefaultNotch;

  return (
    <div 
    // ref={notchRef}
     className="absolute top-[15px] right-0 left-0 ml-auto mr-auto flex items-center justify-center z-10 cursor-pointer">
      <NotchComponent dialedNumber={dialedNumber} setAnimationType={setAnimationType}  />
    </div>
  );
};

export default Notch;