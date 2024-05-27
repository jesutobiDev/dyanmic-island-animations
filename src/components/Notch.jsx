import DefaultNotch from "./DefaultNotch";
import CallNotch from "./CallNotch";
import PodsNotch from "./PodsNotch";
import MusicNotch from "./MusicNotch";
import NavNotch from "./NavNotch";
import FaceIdNotch from "./FaceIdNotch";

const Notch = ({ animationType, dialedNumber }) => {
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
    <div className="w-auto h-auto absolute top-[15px] right-0 left-0 ml-auto mr-auto flex items-center justify-center z-10 cursor-pointer transition-all duration-200 ease-in-out">
      <NotchComponent dialedNumber={dialedNumber} />
    </div>
  );
};

export default Notch;
