import IMG_URL from '../utilis/constants';
const MindCard = (props) => {
  return (
    <div className='w-[300]'>
      <img className='mindCardRes' src={IMG_URL + props?.md?.imageId}></img>
    </div>
  );
};
export default MindCard;
