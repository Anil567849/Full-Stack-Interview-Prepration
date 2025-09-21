import React from 'react'

const MenuItems = ({items}) => {
    return (
        <>


            {/* my main items sections  */}
            <div className="menu-items">
                <div className="">
                    <div className="">
                        <div className="">

                        {
                            items.map( (val, idx, arr) => {
                                const {id, image, name, category, description, price} = val;

                               return (
                                   <div className="item1">
                                    <div className="row item-inside">
                                        {/* for img  */}
                                        <div className="img-div">
                                            <img src={image} alt="menu-pics" style={{height : "250px", width : "300px"}}/>
                                        </div>

                                        {/* menu description  */}
                                        <div className="">
                                            <div className="main-title">
                                                <h1>{name}</h1>
                                                <p>{description}</p>
                                            </div>
                                            <div className="menu-price-book">
                                                <div className="price-book-divide">
                                                    <h2>Price : {price} $</h2>
                                                    <a href="">
                                                        <button>Order Now</button>
                                                    </a>
                                                </div>
                                                <p>Price may be vary on selected date</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               );

                            })
                        }

                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default MenuItems;
