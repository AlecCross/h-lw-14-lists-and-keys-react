import City from './city/classCity'

let harkiv = new City(
    'Харьков', 1654, 1443207, 350.05,
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Coat_of_arms_of_Kharkiv.svg/800px-Coat_of_arms_of_Kharkiv.svg.png');
let kryvyiRih = new City(
    'Кривой Рог', 1775, 619278, 430,
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Coat_of_Arms_of_Kryvyi_Rih.svg/800px-Coat_of_Arms_of_Kryvyi_Rih.svg.png');

 let cities = [
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
export default cities
