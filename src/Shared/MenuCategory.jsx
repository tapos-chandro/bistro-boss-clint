import PropTypes from 'prop-types'
import MenuItem from './MenuItem'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

const MenuCategory = ({ items, buttonText, title }) => {

  return (
    <div>
      <section className='my-5'>
        <div className='grid grid-cols-1 lg:grid-cols-2  gap-5 pt-10 lg:px-28'>
          {items?.map(item => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
        <div className='flex justify-center py-6'>
          <Link to={`/shop/${title}`}><Button buttonText={buttonText}></Button></Link>
        </div>
      </section>
    </div>
  )
}

MenuCategory.propTypes = {
  buttonText: PropTypes.any,
  items: PropTypes.shape({
    map: PropTypes.func
  }),
  title: PropTypes.any
}

export default MenuCategory
