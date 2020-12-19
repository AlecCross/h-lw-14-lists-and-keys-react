import React from 'react';
import listCities from './listCities';

let CountryCities = () => {
    return (
        <>  
            {listCities}
        </>
    )
}

export default CountryCities

 // let cities = ["Припять", "Кривой Рог", "Чернобыль", "Киев", "Днепр"];
    // let listCities = cities.map((city)=><li>{city}</li>)
    // return(
    //     <>
    //         {listCities}
    //     </>
    // )  

    // {/* <CityComponent cityName={country.cities[0].cityName}
    //             yearOfFoundation={country.cities[0].yearOfFoundation} 
    //             population={country.cities[0].population} 
    //             cityArea={country.cities[0].cityArea}
    //             emblem={country.cities[0].emblem} /> */}