import CityComponent from './city/City';
import country from './classCountry';

let listCities = country.cities.map((city) =>
        <CityComponent
            cityName={city.cityName}
            yearOfFoundation={city.yearOfFoundation}
            population={city.population}
            cityArea={city.cityArea}
            emblem={city.emblem} />)

export default listCities