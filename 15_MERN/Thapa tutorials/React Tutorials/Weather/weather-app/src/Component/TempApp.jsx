import {React, useState, useEffect} from 'react';

const TempApp = () => {
    const [city, setCity] = useState(null);
    const [nation, setCountry] = useState(null);
    const [search, setSearch] = useState("manali");

    useEffect(() => {

        const fetchApi = async (api) =>{
            try{
                const res = await fetch(api);

                const jsonRes = await res.json();

                // console.log(jsonRes.name);
                // console.log(jsonRes);
                setCity(jsonRes.main);
                setCountry(jsonRes.sys);
                // console.log(jsonRes.sys);

            }catch(err){
                console.log(err);
            }
        }
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=94a7856e6ca89d09463bf5b8e65d0023`;
        fetchApi(url);
        
    }, [search])



    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input type="text"
                            className="inputField"
                            onChange={(e)=>{setSearch(e.target.value)}}
                            value={search}
                            />
                </div>
                {
                    (!city || !nation) ? (
                         <h1>NO DATA FOUND</h1>
                    )   :
                    (  
                        <div className="info">
                            <h2 className="location"> {search} </h2>
                            <h2 className="country"> {nation.country} </h2>

                            <h1 className="temp">{city.temp}°F</h1>

                            <h3 className="tempmin_max">Min : {city.temp_min}°F | Max : {city.temp_max}°F</h3>
                        </div>
                    )
                }
            </div>
        </>
    );

}

export default TempApp;