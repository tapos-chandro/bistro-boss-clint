import PropTypes from "prop-types"
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useAuth from "../../../hoocks/useAuth";
import Swal from "sweetalert2";


const ShopItems = ({items}) => {
    const {name,recipe,image,price} = items
    const { pathname } = useLocation()
    const {user} = useAuth()
   
    
    const handleAddToCart = () =>{
      if(user && user.email){
        console.log('email')
      }else{

        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
          }
        });
      }
      

      

    }


    useEffect(() => {
      setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' })
      }, 0)
  }, [pathname])

    return (
        <div className="card card-compact  bg-base-100 shadow-xl rounded-none relative">
            <figure><img src={image} className="w-full" alt="Shoes" /></figure>
            <p className="absolute top-4 right-5 p-2 text-primary-text bg-footer-bg-one">${price}</p>
            <div className="card-body text-center">
                <h2 className="card-title text-center flex justify-center">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                <button className="btn text-center text-[#BB8506] text-xl uppercase my-6 border-0 border-b-4 border-[#BB8506] " onClick={handleAddToCart}>add to cart</button>
                </div>
            </div>
        </div>
    );
};

ShopItems.propTypes = {
  items: PropTypes.shape({
    image: PropTypes.any,
    name: PropTypes.any,
    price: PropTypes.any,
    recipe: PropTypes.any
  })
}

export default ShopItems;