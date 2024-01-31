
import PropTypes from "prop-types"
import Swal from "sweetalert2";
import useAuth from "../../../../../hoocks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../../../hoocks/useAxiosSecure";
import useCarts from "../../../../../hoocks/useCarts";

const RecommendsItem = ({item}) => {
    const {name,recipe,image,price,_id} = item
    const {user} = useAuth()
    const navigate = useNavigate()
    const axiosSecure = useAxiosSecure()
    const [,refetch] = useCarts()

    const handleAddToCart = () =>{

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



    return (
        <div className="card card-compact  bg-base-100 shadow-xl rounded-none relative">
            <figure><img src={image} className="w-full" alt="Shoes" /></figure>
            <p className="absolute top-4 right-5 p-2 text-primary-text bg-footer-bg-one">${price}</p>
            <div className="card-body text-center">
                <h2 className="card-title text-center flex justify-center">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                <button className="btn text-center text-[#BB8506] text-xl uppercase my-6 border-0 border-b-4 border-[#BB8506]" onClick={handleAddToCart}>add to cart</button>
                </div>
            </div>
        </div>
    );
};

RecommendsItem.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.any,
    image: PropTypes.any,
    name: PropTypes.any,
    price: PropTypes.any,
    recipe: PropTypes.any
  })
}

export default RecommendsItem;