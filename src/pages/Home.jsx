import React from 'react'
import Hero from "../component/Layout/Hero";
import Gendercollection from '../Product/Collection';
import Newarrivals from '../Product/Newarrivals';
import Bestseller from '../Product/Bestseller';



const Home = () => {
  return (
    <div>
      <Hero/>
      <Gendercollection/>
      <Newarrivals/>
      <Bestseller/>
    </div>
  )
}

export default Home
