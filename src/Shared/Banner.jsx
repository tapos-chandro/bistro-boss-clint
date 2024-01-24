import PropTypes from "prop-types"


const Banner = ({heading, paragraph, backgroundImg}) => {
    return (
        <div className='bg-fixed bg-no-repeat flex items-center  bg-cover bg-right h-[400px] lg:h-[500px] -mt-[100px]' style={{backgroundImage: `url(${backgroundImg})`}}>
        <div className='w-full h-full flex items-center'>
          <div className='flex items-center justify-center text-center mx-auto py-7 lg:py-0 lg:h-60 w-10/12 bg-[#15151599] '>
            <div className='text-primary-text'>
              <h1 className='lg:text-7xl my-3 uppercase'>{heading}</h1>
              <p className='uppercase lg:text-2xl'>
                  {paragraph}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

Banner.propTypes = {
  backgroundImg: PropTypes.any,
  heading: PropTypes.any,
  paragraph: PropTypes.any
}

export default Banner;