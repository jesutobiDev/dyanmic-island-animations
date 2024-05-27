import FaceIdImage from '../assets/faceid.svg'

const FaceIdNotch = () => {
  return (
    <div className='bg-black w-[152px] h-[152px] rounded-[32px] flex items-center justify-center transition-all duration-200 ease-in-out'>
      <img src={FaceIdImage} alt="" className='w-[89px] h-[89px]' />
    </div>
  )
}

export default FaceIdNotch


// TODO: Set timeout for each animation