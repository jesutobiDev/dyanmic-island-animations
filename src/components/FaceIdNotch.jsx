import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import FaceIdImage from '../assets/faceid.svg';

const FaceIdNotch = ({ setAnimationType }) => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(imageRef.current, {
          width: '89px',
          height: '89px',
          duration: 0.1
        });
      }
    });


    tl.to(containerRef.current, {
      width: '152px',
      height: '152px',
      padding: '0',
      borderRadius: '32px',
      duration: 0.5,
      ease: 'power1.inOut'
    })
      .to(imageRef.current, {
        width: '89px',
        height: '89px',
        duration: 1,
        ease: 'power1.inOut'
      }, "<"); 

    const timeout = setTimeout(() => {
      setAnimationType("");
    }, 2500); 


    return () => clearTimeout(timeout);
  }, [setAnimationType]);

  return (
    <div
      ref={containerRef}
      className="bg-black w-[152px] h-[152px] rounded-[32px] p-[70px] flex items-center justify-center transition-all duration-200 ease-in-out cursor-pointer"
    >
      <img ref={imageRef} src={FaceIdImage} alt="" className="w-[89px] h-[89px]" />
    </div>
  );
};

export default FaceIdNotch;
