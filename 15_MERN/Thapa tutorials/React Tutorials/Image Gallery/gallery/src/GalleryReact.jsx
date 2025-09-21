import React, { useState } from 'react'
import CatMenu from './CatMenu';
import Menu from "./Menu";
import MenuItems from './MenuItems';





const allMenuCategory =[...new Set(Menu.map( (currElement) => {
    return currElement.category;
})), "all"];

console.log(allMenuCategory);







const GalleryReact = () => {

    const [items, setItems] = useState(Menu);
    const [allCat, setAllCat] = useState(allMenuCategory);
    
    const allItem = () => {
        return setItems[Menu];
    }

    const filterItem = (cat) => {

        // console.log(cat);
        
        if(cat == "all"){
            allItem();
        }else{
            const filteredItems = Menu.filter((val) => {
                return val.category == cat;
            })
            setItems(filteredItems);
        }
    }

    return (
        <>
            <h1>Order Your Favourite Dish</h1>
            <hr/> 

            {/* main menu bar  */}
            <CatMenu filterItem={filterItem}  allCat={allCat} />

            {/* list of items  */}
            <MenuItems items={items} />
    </>
    );

}

export default GalleryReact;