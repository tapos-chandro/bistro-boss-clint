
import useCarts from "../../../hoocks/useCarts"
import useAuth from "../../../hoocks/useAuth"
import useAxiosSecure from "../../../hoocks/useAxiosSecure"
import moment from "moment"

const Payment = () => {


  const {user} = useAuth()
  const [carts] = useCarts()

  console.log(user.email)
  console.log()

  const totalPrice = carts?.data.reduce((total, currentValue) => total + currentValue.price ,0)

  const axiosSecure = useAxiosSecure()
  const handlePayment = (e) =>{
    e.preventDefault()
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    // const date = e.target.date.value;
    const address = e.target.address.value;
    const name = user.displayName;


    const paymentData = {
      _id: carts?.data?.map(cd => cd._id),
      cartId: carts?.data?.map(cart => cart.cartId),
      totalPrice:totalPrice,
      name,
      email,
      phone,
      address,
      date:moment().format('MMMM Do YYYY, h:mm:ss a'),
      count: carts?.data?.length

    }

    axiosSecure.post('/init', paymentData).then((response) => {
      console.log(response.data);
      // window.location
      window.open(response.data)
    })
    .catch( (error) =>{
      console.log(error);
    });
  
   

    console.log(paymentData)

  }



  return (
    <>
      <div className='flex items-center justify-center '>
        <h1 className='mt-16 text-2xl font-semibold text-center uppercase'>
          Payment
        </h1>
      </div>
      <div className='mt-10 hero'>
        <div className='flex-col'>
          <div className='w-full max-w-sm shadow-2xl card shrink-0 bg-base-100'>
            <form className='card-body' onSubmit={handlePayment}>
              <div className="grid grid-cols-2 gap-5">
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Name</span>
                </label>
                <input
                  type='text'
                  placeholder='email'
                  className='input input-bordered'
                  name="name"
                  defaultValue={user.displayName}
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Phone</span>
                </label>
                <input
                  type='number'
                  placeholder='Phone'
                  className='input input-bordered'
                  name="phone"
                  required
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Email</span>
                </label>
                <input
                  type='email'
                  placeholder='email'
                  className='input input-bordered'
                  defaultValue={user?.email}
                  name="email"
                />
              </div>
              {/* <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Date</span>
                </label>
                <input
                  type='date'
                  placeholder='Date'
                  className='input input-bordered'
                  name="date"
                />
              </div>
               */}
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Address</span>
                </label>
                <input
                  type='text'
                  placeholder='Address'
                  className='input input-bordered'
                  name="address"
                  required
                />
              </div>
              <div className='mt-6 form-control'>
                
                <button className='btn btn-primary'><input type="submit" value="Pay" /></button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Payment
