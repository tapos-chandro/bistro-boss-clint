import PropTypes from "prop-types"
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hoocks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hoocks/useAxiosSecure";
import useCarts from "../../../hoocks/useCarts";


const ShopItems = ({items}) => {
    const {name,recipe,image,price,_id} = items
    const { pathname } = useLocation()
    const {user} = useAuth()
    const navigate = useNavigate()
    const axiosSecure = useAxiosSecure()
    const [,refetch] = useCarts()
    
    const handleAddToCart = () =>{
      
      console.log(user)
      


      const cartItem = {
        cartId: _id,
        email:user?.email,
        name,
        image,
        price

      }

      if(user && user?.email){
        axiosSecure.post('carts', cartItem)
        .then(result => {
          refetch()
          if(result.data.acknowledged == true){
            Swal.fire({
              title: `${name} added successfully`,
              text: "You clicked the button!",
              icon: "success"
            });
          }
        })
        
      }else{

        Swal.fire({
          title: "You are not logged In?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Place Login"
        }).then((result) => {
          console.log(result)
          navigate('/login')
        });
      }
      

      

    }


    useEffect(() => {
      setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' })
      }, 0)
  }, [pathname])

    return (
        <div className="relative rounded-none shadow-xl card card-compact bg-base-100">
            <figure><img src={image} className="w-full" alt="Shoes" /></figure>
            <p className="absolute p-2 top-4 right-5 text-primary-text bg-footer-bg-one">${price}</p>
            <div className="text-center card-body">
                <h2 className="flex justify-center text-center card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="justify-center card-actions">
                <button className="btn text-center text-[#BB8506] text-xl uppercase my-6 border-0 border-b-4 border-[#BB8506] " onClick={handleAddToCart}>add to cart</button>
                </div>
            </div>
        </div>
    );
};

ShopItems.propTypes = {
  items: PropTypes.shape({
    _id: PropTypes.any,
    image: PropTypes.any,
    name: PropTypes.any,
    price: PropTypes.any,
    recipe: PropTypes.any
  })
}

export default ShopItems;