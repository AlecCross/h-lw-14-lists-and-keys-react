import React from 'react';
import CityComponent from './city/City';

let CountryCities = () => {

    // let cities = ["Припять", "Кривой Рог", "Чернобыль", "Киев", "Днепр"];
    // let listCities = cities.map((city)=><li>{city}</li>)
    // return(
    //     <>
    //         {listCities}
    //     </>
    // )
    class City {

        constructor(cityName, yearOfFoundation, population, cityArea, emblem) {
            this.cityName = cityName;
            this.yearOfFoundation = yearOfFoundation;
            this.population = population;
            this.cityArea = cityArea;
            this.emblem = emblem
        }
    };

    let harkiv = new City(
        'Харьков', 1654, 1443207, 350.05,
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Coat_of_arms_of_Kharkiv.svg/800px-Coat_of_arms_of_Kharkiv.svg.png');
    let kryvyiRih = new City(
        'Кривой Рог', 1775, 619278, 430,
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Coat_of_Arms_of_Kryvyi_Rih.svg/800px-Coat_of_Arms_of_Kryvyi_Rih.svg.png');


    // console.log(harkiv.cityName);

    let country = {
        name: "Украина",
        language: ["украинский", "русский"],
        capital: "Киев",
        cities: [
            // "Припять", 
            // "Кривой Рог", 
            // "Чернобыль", 
            // "Киев", 
            // "Днепр",
            // "Харьков",
            // <CountryCities cityName="Харьков" yearOfFoundation="1654" population="1443207" cityArea="350,05" emblem="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Coat_of_arms_of_Kharkiv.svg/800px-Coat_of_arms_of_Kharkiv.svg.png"/>,
            // <CountryCities cityName="" yearOfFoundation="" population="" cityArea="" emblem=""/>,
            // new City('Харьков', 1654, 1443207, 350.05, 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Coat_of_arms_of_Kharkiv.svg/800px-Coat_of_arms_of_Kharkiv.svg.png'),
            harkiv, kryvyiRih
        ]
    }

    let listCities = country.cities.map((city) =>
        <CityComponent
            cityName={city.cityName}
            yearOfFoundation={city.yearOfFoundation}
            population={city.population}
            cityArea={city.cityArea}
            emblem={city.emblem} />)

    return (
        <>
            {/* <CityComponent cityName={country.cities[0].cityName}
                yearOfFoundation={country.cities[0].yearOfFoundation} 
                population={country.cities[0].population} 
                cityArea={country.cities[0].cityArea}
                emblem={country.cities[0].emblem} /> */}
            {listCities}
        </>
    )
}

export default CountryCities