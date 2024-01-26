import PropTypes from "prop-types"


const ShopItems = ({items}) => {
    const {name,recipe,image,price} = items





    return (
        <div className="card card-compact  bg-base-100 shadow-xl rounded-none relative">
            <figure><img src={image} className="w-full" alt="Shoes" /></figure>
            <p className="absolute top-4 right-5 p-2 text-primary-text bg-footer-bg-one">${price}</p>
            <div className="card-body text-center">
                <h2 className="card-title text-center flex justify-center">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                <button className="btn text-center text-[#BB8506] text-xl uppercase my-6 border-0 border-b-4 border-[#BB8506] ">add to cart</button>
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