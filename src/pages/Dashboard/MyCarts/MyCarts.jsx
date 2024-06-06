import { Helmet } from 'react-helmet-async'
import useCarts from '../../../hoocks/useCarts'
import SectionTitle from '../../../components/SectionTitle'
import { RiDeleteBin5Line } from 'react-icons/ri'
import useAxiosSecure from '../../../hoocks/useAxiosSecure'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'



const MyCarts = () => {
  const [carts, refetch] = useCarts()

  const totalPrice = carts?.data.reduce((total, currentValue) => total + currentValue.price ,0)
console.log(totalPrice)


  const axiosSecure = useAxiosSecure()


  const handleDelateCart = (id) => {




    axiosSecure.delete(`/carts?id=${id}`)
    .then(res => {
        if(res.data.acknowledged == true){
            Swal.fire({
                title: `Deleted Cart successfully`,
                text: "You clicked the button!",
                icon: "success"
              });
            refetch()
        }
    })

  }



        

// console.log(data)

  return (
    <div>
      <Helmet>
        <title>Bistro Boss Restaurant । My Carts </title>
      </Helmet>
      <SectionTitle
        mainTitle='WANNA ADD MORE?'
        subTitle='---My Cart---'
      ></SectionTitle>

      <div className='lg:mx-20'>
        <div className='flex justify-between'>
          <h1 className='py-5 font-bold text-3xl text-[black]'>
            Total items:{carts?.data?.length}{' '}
          </h1>
          <h1 className='py-5 font-bold text-3xl text-[black]'>
            Total Price:${totalPrice}
          </h1>
          <div className='py-5 font-bold text-3xl text-[black]'>
            {
              carts?.data?.length > 0 ?  <Link to={'/dashboard/reservation'}> <button className='btn bg-[#D1A054] text-[#fff] hover:text-[black]'>Pay</button></Link> :<button disabled className='btn  text-[#fff] hover:text-[black]'>Pay</button>
            }
          </div>
        </div>
        <div className=''>
          <table className='table'>
            {/* head */}
            <thead>
              <tr className='bg-[#D1A054] text-primary-text uppercase py-5 rounded-md'>
                <th style={{ borderRadius: '10px 0px 0px 0px' }}>ITEM IMAGE</th>
                <th className='text-center'>ITEM NAME</th>
                <th>PRICE</th>
                <th className='text-center'>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {carts?.data?.map(dashboardCart => (
                <tr key={dashboardCart._id}>
                  <td>
                    <div className='flex items-center gap-3'>
                      <div className='avatar'>
                        <div className='w-12 h-12 mask mask-squircle'>
                          <img src={dashboardCart?.image} />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className='text-center'>{dashboardCart?.name}</td>
                  <td>${dashboardCart?.price}</td>
                  <th className='text-center'>
                    <div>
                      <button
                        className='btn btn-ghost btn-xs bg-[red] py-2 pb-7 text-primary-text  rounded'
                        onClick={() => handleDelateCart(dashboardCart._id)}
                      >
                        <RiDeleteBin5Line className=' text-primary-text hover:text-[black] text-xl' />
                      </button>
                    </div>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default MyCarts
