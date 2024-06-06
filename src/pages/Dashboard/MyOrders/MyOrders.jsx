import { Helmet } from 'react-helmet-async'
import SectionTitle from '../../../components/SectionTitle'
import useAxiosSecure from '../../../hoocks/useAxiosSecure'
import useAuth from '../../../hoocks/useAuth'

import { useQuery } from '@tanstack/react-query'

const MyOrders = () => {
  const { user } = useAuth()

  const axiosSecure = useAxiosSecure()

  const { data: orderDetails } = useQuery({
    queryKey: ['orderDetails'],
    queryFn: () =>
      axiosSecure.get(`/orderDetails/${user.email}`).then(res => res.data)
  })
  const { data: orders } = useQuery({
    queryKey: ['order'],
    queryFn: () => axiosSecure.get(`/order/${user.email}`).then(res => res.data)
  })

  console.log(orders)

  console.log(orderDetails)

  return (
    <div className='mt-10'>
      <Helmet>
        <title>Bistro Boss Restaurant । My Orders </title>
      </Helmet>
      <SectionTitle
        mainTitle='My Orders'
        subTitle="---What's new?---"
      ></SectionTitle>
      <div className=''>
        <h1>Order Details</h1>
      </div>
      {orderDetails?.map(orderDetail => (
        <div
          key={orderDetail?._id}
          className='bg-[#fff] p-3 flex justify-between items-center'
        >
          <div>
            <h1>
              <span className='font-bold'>Order:</span>{' '}
              {orderDetail?.trangactionId}
            </h1>
            <p className='text-neutral-400'>Placed on: {orderDetail?.date}</p>
          </div>
          <div>
            <p className='text-2xl '>
              <span className='text-neutral-400'>Total:</span>$
              {orderDetail?.totalPrice}
            </p>
          </div>
        </div>
      ))}
      <div className='bg-[#fff]'>
        <div className='overflow-x-auto'>
          <table className='table'>
            {/* head */}
            <thead>
              <tr>
               
                <th>No</th>
                <th>Name</th>
                <th>Price</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            {orders?.map((item, index) => (
              <>
                <tbody>
                  {/* row 1 */}
                  <tr>
                  <td>{index+1}</td>
                    <td>
                      <div className='flex items-center gap-3'>
                        <div className='avatar'>
                          <div className='w-12 h-12 mask mask-squircle'>
                            <img
                              src={item?.image}
                              alt='Avatar Tailwind CSS Component'
                            />
                          </div>
                        </div>
                        <div>
                          <div className='font-bold'>{item?.name}</div>
                          
                        </div>
                      </div>
                    </td>
                    <td>
                      ${item?.price}
                     
                    </td>
                    <td>{item?.date}</td>
                    <th>
                      <button className='btn btn-ghost btn-xs'>{item?.status}</button>
                    </th>
                  </tr>
                </tbody>
              </>
            ))}
          </table>
        </div>
      </div>
      <div className='grid gap-3 pb-10 mt-3 lg:grid-cols-2'>
        <div className='bg-[#fff] p-4'>
            <h2 className='text-lg'>Shipping Address</h2>
            {
               orderDetails?.map(orderDetail =><>
    

               <div >
               <p>{orderDetail?.name}</p>
               <p>Home: {orderDetail?.address}</p>
               <p>Phone: {orderDetail?.phone}</p>
          
               </div>
               </>)
            }
        </div>
        <div className='bg-[#fff] p-4'>
            <h1 className='text-xl text-left'>Total Summary</h1>
            
            {
               orderDetails?.map(orderDetail =><>
               <div className='flex justify-between'>
               <p>Subtotal</p>
               <p>${orderDetail?.totalPrice}</p>
               </div>
               <div className='flex justify-between'>
               <p>Delivery Fee</p>
               <p>$0.00</p>
               </div>
               <div className='flex justify-between'>
               <p>Discounts</p>
               <p>$0.00</p>
               </div>
               <hr />
               <div className='flex justify-between'>
               <p>Total</p>
               <p>${orderDetail?.totalPrice}</p>
               </div>
               </>)
            }
        </div>
      </div>
    </div>
  )
}

export default MyOrders
