import React, { useContext } from 'react';
import "./FoodDisplay.css";
import { StoreContext } from '../Context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';
import {Row, Col } from 'react-bootstrap';

const FoodDisplay = ({cateogeryValue}) => {
    const food_data = useContext(StoreContext);

  return(
    <div className='food-items'>
        <Row>
          <h2 className='mb-4 mt-4'>food display</h2>
        </Row>
        <Row>
          {
            food_data.FoodData.map(({image,id,prize,cateogery,data,name}) => {
              if(cateogeryValue==="All" || cateogeryValue===cateogery){
                return(
                  <Col key={id} xs={12} sm={12} md={4} lg={3}>
                      <FoodItem image={image} id={id} name={name} prize={prize} cateogery={cateogery} data={data}/>
                  </Col>
                );
              }
            })
          }
        </Row>
    </div>
  )
}

export default FoodDisplay;