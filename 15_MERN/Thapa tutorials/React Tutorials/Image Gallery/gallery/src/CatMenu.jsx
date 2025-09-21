import React from 'react'

export default function CatMenu({filterItem, allItem, allCat}) {
    return (
        <>

            <div className="">
                <div className="meny-tab">


                    {/*                       
                    <button className="" onClick={ () => filterItem('breakfast')}>Breakfast</button>
                    <button className="" onClick={ () => filterItem('lunch') }>Lunch</button>
                    <button className="" onClick={ () => filterItem('snacks') }>Snacks</button>
                    <button className="" onClick={ () => filterItem('dinner') }>Dinner</button>
                    <button className="" onClick={ () => allItem }>All</button>
                     */}


                    {
                        allCat.map( (val, idx) => {
                            return (<button className="" key={idx} onClick={ () => filterItem(val)}>{val}</button>);
                        })
                    }

                </div>
            </div>
            
        </>
    )
}
