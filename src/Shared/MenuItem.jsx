
import PropTypes from "prop-types"
const MenuItem = ({item}) => {
    const {name,recipe, image,price} = item
    return (
        <div className="flex space-x-5 my-2">
            <img src={image} alt="" className="w-24 h-20" style={{borderRadius: '0 200px 200px 200px'}} />
            <div>
                <h3 className="text-xl">{name} ------------------</h3>
                <p className="text-neutral-500">{recipe}</p>
            </div>
            <p className="text-[#BB8506]">${price}</p>
        </div>
    );
};

MenuItem.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.any,
    name: PropTypes.any,
    price: PropTypes.any,
    recipe: PropTypes.any
  })
}

export default MenuItem;