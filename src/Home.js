import React from 'react'
import "./Home.css"
import Product  from './Product'
import { Propane } from '@mui/icons-material'

function Home() {
  return (
    <div className='home'>
    {/* Home image amazon prime */}

      <img className='home_image'
      src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' alt='Prime-video-img' />
  
  
    {/* Product*/}


    <div className="home_row">
    <Product 
    id= "1"
    title="Laptop-a laptop for all your uses"
    price={100}
    rating = {3}
    image = "https://media.istockphoto.com/id/185278433/photo/black-digital-slr-camera-in-a-white-background.jpg?s=612x612&w=0&k=20&c=OOCbhvOF0W-eVhhrm-TxbgLfbKhFfs4Lprjd7hiQBNU="
    />
     <Product 
    id= "1"
    title="Laptop-a laptop for all your uses"
    price={100}
    rating = {3}
    image = "https://m.media-amazon.com/images/I/41sT-ej9Q-L.jpg"
    />

    </div>

    <div className="home_row">
    <Product 
    id= "1"
    title="Laptop-a laptop for all your uses"
    price={100}
    rating = {3}
    image = "https://www.headphonezone.in/cdn/shop/products/Headphone-Zone-Sony-WH-CH720N-12.jpg?v=1679487875&width=1160"
    />
     <Product 
    id= "1"
    title="Laptop-a laptop for all your uses"
    price={100}
    rating = {3}
    image = "https://www.maharajawhiteline.com/assests/product-images/enlarge-image/5200101108.jpg"
    />
    <Product 
    id= "1"
    title="Laptop-a laptop for all your uses"
    price={100}
    rating = {3}
    image = "https://m.media-amazon.com/images/I/81JVM1lFPIL._AC_UF894,1000_QL80_.jpg"
    />
    
    </div>

    <div className="home_row">
    <Product 
    id= "1"
    title=""
    price={100}
    rating = {3}
    image = "https://5.imimg.com/data5/SELLER/Default/2021/2/AG/OQ/BX/5593817/samsung-ua32t4310akxxl-80-cm-32-inches-hd-ready-smart-led-tv-glossy-black-2020-model--500x500.jpg"
    />
    </div>
    
    
    </div>
  )
}

export default Home
