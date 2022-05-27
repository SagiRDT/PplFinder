import React, { useState } from "react";
import CheckBox from "./CheckBox";
import * as S from "../UserList/style";

// A list of the countries that will have a checkbox filter (to add a new country filter add it to the list)
const countriesList = [
    { id: "BR", name: "Brazil" },
    { id: "AU", name: "Australia" },
    { id: "CA", name: "Canada" },
    { id: "DE", name: "Germany" },
    { id: "CH", name: "Switzerland" },
];

const CountryCheckBoxes = ({ filterByCountry }) => {
    // this state will hold a list of ids of the checked countries
    const [checkedCountries, setCheckedCountries] = useState([]);

    // Toggle the selected party from the checkedCountries list state (using country name)
    const handleChange = (countryName) => {
        const countryIndex = checkedCountries.indexOf(countryName);
        const newCheckedCountries = [...checkedCountries];

        // if the country is not in the checked list - enter it
        if (countryIndex === -1) {
            newCheckedCountries.push(countryName);
        }
        // else - remove it from the checked list (it was un-checked)
        else {
            newCheckedCountries.splice(countryIndex, 1);
        }

        setCheckedCountries(newCheckedCountries);
        filterByCountry(newCheckedCountries);
    };

    return (
        <S.Filters>
            {countriesList.map((country, index) => (
                <CheckBox
                    key={index}
                    value={country.id}
                    label={country.name}
                    onChange={() => handleChange(country.name)}
                    isChecked={
                        checkedCountries.indexOf(country.name) === -1 ? false : true
                    }
                />
            ))}
        </S.Filters>
    );
};

export default CountryCheckBoxes;
