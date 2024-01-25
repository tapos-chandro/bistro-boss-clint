import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import Banner from '../../Shared/Banner';
import bannerImg from '../../assets/shop/banner2.jpg';
import { useState } from 'react';
import './shop/shop.css'
import useMenu from '../../hoocks/useMenu';
import { useParams } from 'react-router-dom';

const OurShop = () => {
  const [tabIndex, setTabIndex] = useState(0)


  const [menu] = useMenu();

  const {title} = useParams()
 


  const offered = menu.filter(item => item.category === 'offered')
  const pizza = menu.filter(item => item.category === 'pizza')
  const salad = menu.filter(item => item.category === 'salad')
  const soup = menu.filter(item => item.category === 'soup')





  return (
    <div>
      <Banner
        heading='OUR SHOP'
        paragraph='Would you like to try a dish?'
        backgroundImg={bannerImg}
      ></Banner>
      <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
        <TabList className='flex justify-center'>
          <Tab><div>Salad</div></Tab>
          <Tab><div>Pizza</div></Tab>
          <Tab><div>Soups</div></Tab>
          <Tab><div>Deserts</div></Tab>
          <Tab><div>Drinks</div></Tab>
        </TabList>
        <TabPanel>

        </TabPanel>
      </Tabs>
    </div>
  )
}

export default OurShop
