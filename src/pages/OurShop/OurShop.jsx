import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import Banner from '../../Shared/Banner';
import bannerImg from '../../assets/shop/banner2.jpg';
import './shop/shop.css'
import useMenu from '../../hoocks/useMenu';
import { useParams } from 'react-router-dom';
import ShopItems from './ShopItems/ShopItems';
import { useState } from 'react';


const OurShop = () => {
 

  const [menu] = useMenu()

  const category = ['offered','salad', 'pizza','soup','desserts','drinks']

  const {title} = useParams()

  console.log(menu)
  const initialIndex = category.indexOf(title)

  const offered = menu?.filter(item => item.category === 'offered')
  const pizza = menu?.filter(item => item.category === 'pizza')
  const salad = menu?.filter(item => item.category === 'salad')
  const soup = menu?.filter(item => item.category === 'soup')
  const dessert = menu?.filter(item => item.category === 'dessert')
  const drinks = menu?.filter(item => item.category === 'drinks')



  const [tabIndex, setTabIndex] = useState(initialIndex)
  


  return (
    <div >
      <Banner
        heading='OUR SHOP'
        paragraph='Would you like to try a dish?'
        backgroundImg={bannerImg}
      ></Banner>
      <div className='my-20'>
      <Tabs selectedIndex={tabIndex} onSelect={initialIndex => setTabIndex(initialIndex)}>
        <TabList className='flex justify-center '>
          <Tab><div>Offered</div></Tab>
          <Tab><div>Salad</div></Tab>
          <Tab><div>Pizza</div></Tab>
          <Tab><div>Soups</div></Tab>
          <Tab><div>Deserts</div></Tab>
          <Tab><div>Drinks</div></Tab>
        </TabList>
        <TabPanel>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-16 lg:grid-cols-3 p-20 '>
          {
            offered?.map(item => <ShopItems items={item} key={item._id}></ShopItems>)
          }
          </div>
        </TabPanel>
        <TabPanel>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-16 lg:grid-cols-3 p-20 '>
          {
            pizza?.map(item => <ShopItems items={item} key={item._id}></ShopItems>)
          }
          </div>
        </TabPanel>
        <TabPanel>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-16 lg:grid-cols-3 p-20 '>
          {
            salad?.map(item => <ShopItems items={item} key={item._id}></ShopItems>)
          }
          </div>
        </TabPanel>
        <TabPanel>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-16 lg:grid-cols-3 p-20 '>
          {
            soup?.map(item => <ShopItems items={item} key={item._id}></ShopItems>)
          }
          </div>
        </TabPanel>
        <TabPanel>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-16 lg:grid-cols-3 p-20 '>
          {
            dessert?.map(item => <ShopItems items={item} key={item._id}></ShopItems>)
          }
          </div>
        </TabPanel>
        <TabPanel>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-16 lg:grid-cols-3 p-20 '>
          {
            drinks?.map(item => <ShopItems items={item} key={item._id}></ShopItems>)
          }
          </div>
        </TabPanel>
      </Tabs>
      </div>
    </div>
  )
}

export default OurShop
