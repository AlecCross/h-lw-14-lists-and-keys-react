import React from 'react';
import s from './City.module.css';

let CountryCities = (props) => {   
    return(
        <div>
            <img className={s.emblem} src={props.emblem} alt={props.cityName}/>
            <p>Название города:   {props.cityName}</p>
            <p>Кол-во населения:  {props.population}</p>
            <p>Общая площадь:     {props.cityArea}</p>
            <p>Дата основания:    {props.yearOfFoundation}</p>
            <a href={props.cityLink} alt='Ссылка на город'>Ссылка</a>
        </div>
    )
}

export default CountryCities