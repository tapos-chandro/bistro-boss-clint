import { Helmet } from 'react-helmet-async'
import SectionTitle from '../../../components/SectionTitle'
import { useForm } from 'react-hook-form'
import { FaUtensils } from 'react-icons/fa6'
import useAxiosSecure from './../../../hoocks/useAxiosSecure';
import Swal from 'sweetalert2';


const AddItems = () => {


  const axiosSecure = useAxiosSecure()
  const { register, handleSubmit,formState: { errors } } = useForm()
  const onSubmit = async data => {
    const imageFile = data?.image[0]
    console.log(imageFile)

    const formData = new FormData();
    formData.append('image', imageFile);
    
    fetch(
      `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_API_KEY}`,
      {

        method: 'POST',
        body: formData
      }
    )
    .then(res => res.json())
    .then(res => {
      console.log(res.data.display_url)

      console.log(data)
      const addItem = {
        name: data.name,
        category:data.category,
        price:data.price,
        image: res.data.display_url,
        recipe:data.recipe
      }

      axiosSecure.post('/menu', addItem)
      .then(res => {
        if(res.data.acknowledged == true){
          Swal.fire({
            title: `${data.name} successfully added`,
            text: "You clicked the button!",
            icon: "success"
          });
        }})

      
    })
  }

  return (
    <div className='px-5 my-10'>
      <Helmet>
        <title>Bistro Boss Restaurant । Add Items </title>
      </Helmet>
      <SectionTitle
        mainTitle='ADD AN ITEM'
        subTitle="---What's new?---"
      ></SectionTitle>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label className='w-full my-5 form-control'>
          <div className='label'>
            <span className='text-xl font-semibold label-text text-[#454545ff]'>
              Recipe Name*
            </span>
          </div>
          <input
            type='text'
            placeholder='Recipe name'
            {...register('name',{ required: 'name is required'})}
            className='w-full outline-none focus:border-0 input input-bordered'
          />
         {errors.name?.type === "required" && (
        <p className='text-[red]'>Recipe name is required</p>
      )}
          
        </label>

        <div className='gap-6 my-5 lg:flex'>
          <label className='w-full form-control'>
            <div className='label'>
              <span className='text-xl font-semibold label-text text-[#454545ff]'>
                Category*
              </span>
            </div>
            <select
              {...register('category',{ required: true })}
              className='select select-bordered'
            >
              <option disabled selected>
                Pick one
              </option>
              <option value='offered'>offered</option>
              <option value='salad'>salad</option>
              <option value='pizza'>pizza</option>
              <option value='soup'>soup</option>
              <option value='dessert'>dessert</option>
              <option value='drinks'>drinks</option>
            </select>

          </label>
          <label className='w-full form-control'>
            <div className='label'>
              <span className='text-xl font-semibold label-text text-[#454545ff]'>
                Price*
              </span>
            </div>
            <input
              type='number'
              placeholder='Price'
              {...register('price',{ required: true })}
              className='w-full outline-none focus:border-0 input input-bordered'
            />
             {errors.price?.type === "required" && (
        <p className='text-[red]'>Price is required</p>
      )}
          </label>
        </div>

        <label className='py-6 form-control'>
          <div className='label'>
            <span className='text-xl font-semibold label-text text-[#454545ff]'>
              Recipe Details
            </span>
          </div>
          <textarea
            className='h-24 textarea textarea-bordered'
            {...register('recipe',{ required: true })}
            placeholder='Recipe Details'
          ></textarea>
           {errors.recipe?.type === "required" && (
        <p className='text-[red]'>Recipe details is required</p>
      )}
        </label>

        <div className='mb-7'>
          <input
            type='file'
            {...register('image',{ required: true })}
            className='w-full max-w-xs file-input file:bg-[#e8e8e8ff] file:text-footer-bg-one file:border-0'
          />
           {errors.image?.type === "required" && (
        <p className='text-[red]'>Image is required</p>
      )}
        </div>
        <button
          type='submit'
          className='py-2 text-xl rounded-none btn px-7 hover:text-[#454545ff] text-primary-text bg-[#8c6424ff]'
        >
          Add Item <FaUtensils></FaUtensils>
        </button>
      </form>
    </div>
  )
}

export default AddItems
