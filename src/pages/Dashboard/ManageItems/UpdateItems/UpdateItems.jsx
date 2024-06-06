import { useParams } from 'react-router-dom'

import { useForm } from 'react-hook-form'
import useAxiosSecure from '../../../../hoocks/useAxiosSecure'
import Swal from 'sweetalert2'
import { FaUtensils } from 'react-icons/fa6'
import { useQuery } from '@tanstack/react-query'
import useAxiosPublic from '../../../../hoocks/useAxiosPublic'
import { useState } from 'react'

const UpdateItems = () => {
  const { id } = useParams()

  const [uploadImageUrl, setUploadImageUrl] =  useState('')
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const axiosPublic = useAxiosPublic()
  const axiosSecure = useAxiosSecure()

  const { data: menu, refetch } = useQuery({
    queryKey: ['menussss'],
    queryFn: async () => {
      const res = await axiosSecure.get(`/menu?id=${id}`)

      return res.data
    }
  })

  const onSubmit = async data => {
    const imageFile = data?.image[0]

    const updateItem = {
      name: data.name,
      category: data.category,
      price: data.price,
      image:`${uploadImageUrl? uploadImageUrl:menu?.image}`,
      recipe: data.recipe
    }

    refetch()
    const formData = new FormData()
    formData.append('image', imageFile)

    fetch(
      `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_IMAGE_API_KEY
      }`,
      {
        method: 'POST',
        body: formData
      }
    )
      .then(res => res.json())
      .then(res => {
        setUploadImageUrl(res?.data?.display_url)
        
      })
      axiosPublic.patch(`/menu/${menu?._id}`, updateItem).then(res => {
        if (res.data.acknowledged == true) {
          Swal.fire({
            title: `${data.name} Successfully Update`,
            text: 'You clicked the button!',
            icon: 'success'
          })
        }
      })
  }

  refetch()

  return (
    <div>
      <h1 className='mt-10 text-4xl text-[black] font-semibold text-center'>
        UPDATE ITEM
      </h1>

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
            defaultValue={menu?.name}
            {...register('name')}
            className='w-full outline-none focus:border-0 input input-bordered'
          />
          {errors.name?.type === 'required' && (
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
              {...register('category')}
              className='select select-bordered'
              defaultValue={menu?.category}
            >
              <option disabled value="">
                {menu?.category}
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
              defaultValue={menu?.price}
              {...register('price')}
              className='w-full outline-none focus:border-0 input input-bordered'
            />
            {errors.price?.type === 'required' && (
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
            {...register('recipe')}
            placeholder='Recipe Details'
            defaultValue={menu?.recipe}
          ></textarea>
          {errors.recipe?.type === 'required' && (
            <p className='text-[red]'>Recipe details is required</p>
          )}
        </label>

        <div className='mb-7'>
          <input
            type='file'
            {...register('image')}
            className='w-full max-w-xs file-input file:bg-[#e8e8e8ff] file:text-footer-bg-one file:border-0'
          />
        </div>
        <button
          type='submit'
          className='py-2 text-xl rounded-none btn px-7 hover:text-[#454545ff] text-primary-text bg-[#8c6424ff]'
        >
          Update Item <FaUtensils></FaUtensils>
        </button>
      </form>
    </div>
  )
}

export default UpdateItems
