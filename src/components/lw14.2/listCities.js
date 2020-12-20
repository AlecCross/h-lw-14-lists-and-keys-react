import CityComponent from './city/City';
import country from './classCountry';

let listCities = country.cities.map((city, index) =>
        <CityComponent
            key = {index}
            cityName={city.cityName}
            yearOfFoundation={city.yearOfFoundation}
            population={city.population}
            cityArea={city.cityArea}
            emblem={city.emblem} 
            cityLink={city.cityLink}/>)

export default listCities