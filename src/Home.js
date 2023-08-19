import React from 'react'
import "./Home.css"
import Product  from './Product'


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
    title="Sony 4k Camera: Capture moments with stunning clarity and precision capture the moment."
    price={24000}
    rating = {4}
    image = "https://media.istockphoto.com/id/185278433/photo/black-digital-slr-camera-in-a-white-background.jpg?s=612x612&w=0&k=20&c=OOCbhvOF0W-eVhhrm-TxbgLfbKhFfs4Lprjd7hiQBNU="
    />
     <Product 
    id= "2"
    title="Asus Laptop: Power and portability in one sleek package. cheap and affordable with 520GB disk space"
    price={60000}
    rating = {4}
    image = "https://m.media-amazon.com/images/I/41sT-ej9Q-L.jpg"
    />

    </div>

    <div className="home_row">
    <Product 
    id= "3"
    title="Sony Headphones: Immerse yourself into the sound, wherever you go, with active noise cancellation."
    price={1100}
    rating = {5}
    image = "https://www.headphonezone.in/cdn/shop/products/Headphone-Zone-Sony-WH-CH720N-12.jpg?v=1679487875&width=1160"
    />
     <Product 
    id= "4"
    title="Prestige Gas Stove: Elevate your culinary skills with reliable precision."
    price={3000}
    rating = {3}
    image = "https://www.maharajawhiteline.com/assests/product-images/enlarge-image/5200101108.jpg"
    />
    <Product 
    id= "5"
    title="Prestige Mixer: Blend, chop, and mix with ease for culinary perfection."
    price={1500}
    rating = {4}
    image = "https://m.media-amazon.com/images/I/81JVM1lFPIL._AC_UF894,1000_QL80_.jpg"
    />
    
    </div>

    <div className="home_row">
    <Product 
    id= "6"
    title="LG 8k TV: Experience entertainment come to life with breathtaking visuals,with home theatre."
    price={59000}
    rating = {5}
    image = "https://5.imimg.com/data5/SELLER/Default/2021/2/AG/OQ/BX/5593817/samsung-ua32t4310akxxl-80-cm-32-inches-hd-ready-smart-led-tv-glossy-black-2020-model--500x500.jpg"
    />
    </div>
    </div>
  )
}

export default Home
