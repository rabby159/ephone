import banner from '../../assets/images/banner.jpg'


const Banner = () => {
  return (
    <div>
      <div className='my-10'>
        <img className='h-[70vh] w-full' src={banner} alt="" />
      </div>
    </div>
  );
};

export default Banner;
