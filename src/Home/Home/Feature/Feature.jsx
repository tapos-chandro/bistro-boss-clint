import featureImage from '../../../../src/assets/home/featured.jpg'


const Feature = () => {
  return (
    <section className='relative bg-no-repeat bg-cover bg-feature-bg bg-fixed '>
      <div className='bg-[#000000af] py-20'>
      <div className="text-center">
            <p className="text-[#D99904] text-xl italic">---Check it out---</p>
            <div className="flex justify-center my-5">
            <h1 className="text-primary-text text-[40px] border-y-4 border-[#E8E8E8]  w-96 py-4">FROM OUR MENU</h1>
            </div>
        </div>
        <div className='lg:flex items-center gap-10 w-10/12 mx-auto pt-10 lg:pb-20'>
          <div>
            <img src={featureImage} alt='' />
          </div>
          <div className='text-primary-text py-10'>
            <h3 className='text-xl'>January 23, 2024</h3>
            <h3 className='text-xl'>WHERE CAN I GET SOME?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <button className="btn uppercase bg-transparent text-primary-text border-0 border-b-4 mt-10 hover:bg-[black] hover:border-0">Read more</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Feature
