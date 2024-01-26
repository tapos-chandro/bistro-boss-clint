import { Helmet } from "react-helmet-async"
import Banner from "../../Shared/Banner"
import bannerBg from '../../assets/menu/banner3.jpg'
import MenuCategory from "../../Shared/MenuCategory"
import useMenu from "../../hoocks/useMenu"
import SectionTitle from "../../components/SectionTitle"
import Cover from "../../Shared/Cover"
import dessertCoverBg from '../../assets/menu/dessert-bg.jpeg'
import pizzaCoverBg from '../../assets/menu/pizza-bg.jpg'
import soupCoverBg from '../../assets/menu/soup-bg.jpg'
import drinksCoverBg from '../../assets/menu/drink.jpg'


const Menu = () => {

  const [menu] = useMenu();

  const offered = menu.filter(item => item.category === 'offered')
  const pizza = menu.filter(item => item.category === 'pizza')
  const salad = menu.filter(item => item.category === 'salad')
  const soup = menu.filter(item => item.category === 'soup')
  const drinks = menu.filter(item => item.category === 'drinks')
  


  const desserts = "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer<br> took a galley of type and scrambled it to make a type specimen book."
  const pizzaCoverText = "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  const saladCoverText = "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  const soupCoverText = "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."


  return (
    <div>
      <Helmet>
        <title>Bistro Boss Restaurant । Our Menu</title>
      </Helmet>
      <Banner heading='OUR MENU' paragraph='Would you like to try a dish?' backgroundImg={bannerBg}></Banner>

      <div className="mt-20">
        <SectionTitle subTitle="---Don't miss---" mainTitle="TODAY'S OFFER"></SectionTitle>
        <MenuCategory items={offered} buttonText='ORDER YOUR FAVORITE FOOD' title='offered'></MenuCategory>
      </div>

      <div className="mt-20">
        <Cover backgroundImg={dessertCoverBg} heading='DESSERTS'  bgColor='#15151599' fontColor='#fff' paragraph={desserts}></Cover>
        <MenuCategory items={offered} buttonText='ORDER YOUR FAVORITE FOOD' title='desserts'></MenuCategory>
      </div>
      <div className="mt-20">
        <Cover backgroundImg={pizzaCoverBg} heading='PIZZA'  bgColor='#15151599' fontColor='#fff' paragraph={pizzaCoverText}></Cover>
        <MenuCategory items={pizza} buttonText='ORDER YOUR FAVORITE FOOD' title='pizza'></MenuCategory>
      </div>
      <div className="mt-20">
        <Cover backgroundImg={pizzaCoverBg} heading='SALAD'  bgColor='#15151599' fontColor='#fff' paragraph={saladCoverText}></Cover>
        <MenuCategory items={salad} buttonText='ORDER YOUR FAVORITE FOOD' title='salad'></MenuCategory>
      </div>
      <div className="mt-20">
        <Cover backgroundImg={soupCoverBg} heading='SOUP'  bgColor='#15151599' fontColor='#fff' paragraph={soupCoverText}></Cover>
        <MenuCategory items={soup} buttonText='ORDER YOUR FAVORITE FOOD' title='soup'></MenuCategory>
      </div>
      <div className="mt-20">
        <Cover backgroundImg={drinksCoverBg} heading='DRINKS'  bgColor='#15151599' fontColor='#fff' paragraph={soupCoverText}></Cover>
        <MenuCategory items={drinks} buttonText='ORDER YOUR FAVORITE FOOD' title='drinks'></MenuCategory>
      </div>
    </div>
  )
}

export default Menu
