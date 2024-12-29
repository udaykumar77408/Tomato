import React, {useState} from 'react';
import "./ExploreMenu.css";
import {MenuData} from "../../MenuData";

const ExploreMenu = ({cateogery,setCateogery}) => {

    return (
        <>
            <div className='explore-menu-passage'>
                <h2>explore menu</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dicta cum, repudiandae id sed recusandae quae eligendi unde aut, assumenda repellendus, sit inventore? Veritatis voluptatem excepturi placeat quas animi cupiditate?</p>
            </div>
            <div className='explore-menu'>
                {
                    MenuData.map(({menu_name,menu_image}) => {
                        return(
                            <div className='explore-item' key={menu_name} onClick={() => setCateogery(menu_name)}>
                                <img src={menu_image} className={menu_name===cateogery?"selected":"not-selected"}  alt="not found...." />
                                <h5>{menu_name}</h5>
                            </div>
                        );
                    })
                }
            </div>
        </>
    )
}

export default ExploreMenu;