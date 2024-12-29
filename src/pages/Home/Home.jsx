import React, { useState } from 'react'
import "./Home.css";
import Header from '../../components/Header/Header';
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';

const Home = () => {

  const[cateogery,setCateogery] = useState("All");

  return (
    <div>
      <Header/>
      <ExploreMenu cateogery={cateogery} setCateogery={setCateogery}/>
      <FoodDisplay cateogeryValue={cateogery}/>
    </div>
  )
}

export default Home;