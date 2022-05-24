import React, { useState } from "react";
import Spinner from "components/Spinner";
import CountriesCheckBoxes from "../CheckBox/CountriesCheckBoxes";
import UserItem from "./UserItem";
import * as S from "./style";

const UserList = ({ users, isLoading }) => {
    // this state will hold a list of the filtered users
    const [filteredUsers, setFilteredUsers] = useState([]);
    // this state will hold a flag indicating the country filter status - true/false
    const [countryFilterIsActive, setCountryFilterIsActive] = useState(false);

    // Filter users by country - update the filteredUsers state and the countryFilterIsActive state
    const filterByCountry = (checkedCountries) => {
        isLoading = true;

        if (checkedCountries.length === 0) {
            setFilteredUsers([]);
            setCountryFilterIsActive(false);
        } else {
            setFilteredUsers(
                users.filter((user) => checkedCountries.includes(user.location.country))
            );
            setCountryFilterIsActive(true);
        }

        isLoading = false;
    };

    return (
        <S.UserList>
            <CountriesCheckBoxes filterByCountry={filterByCountry} />

            <S.List>
                {countryFilterIsActive
                    ? filteredUsers.map((user, index) => (
                          <UserItem key={index} index={index} user={user} />
                      ))
                    : users.map((user, index) => (
                          <UserItem key={index} index={index} user={user} />
                      ))}

                {isLoading && (
                    <S.SpinnerWrapper>
                        <Spinner
                            color="primary"
                            size="45px"
                            thickness={6}
                            variant="indeterminate"
                        />
                    </S.SpinnerWrapper>
                )}
            </S.List>
        </S.UserList>
    );
};

export default UserList;
