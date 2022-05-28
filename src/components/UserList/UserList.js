import React, { useState } from "react";
import Spinner from "components/Spinner";
import CountriesCheckBoxes from "../CheckBox/CountriesCheckBoxes";
import UserItem from "./UserItem";
import * as S from "./style";

const UserList = ({ users, isLoading, favorites, toggleFavorite, setPageNumber }) => {
    // this state will hold a list of the filtered users
    const [filteredUsers, setFilteredUsers] = useState([]);
    // this state will hold a flag indicating the country filter status - true/false
    const [countryFilterIsActive, setCountryFilterIsActive] = useState(false);

    // Filter users by country - update the filteredUsers state and the countryFilterIsActive state
    const filterByCountry = (checkedCountries) => {
        if (checkedCountries.length === 0) {
            setFilteredUsers([]);
            setCountryFilterIsActive(false);
        } else {
            setFilteredUsers(
                users.filter((user) => checkedCountries.includes(user.location.country))
            );
            setCountryFilterIsActive(true);
        }
    };

    // Create a new User Item with the index and user data we got as params
    const createUserItem = (index, user, isLast = false) => (
        <UserItem
            key={index}
            index={index}
            user={user}
            isLast={isLast}
            isLoading={isLoading}
            isFavorite={
                favorites.findIndex(
                    (userIter) => user.login.uuid === userIter.login.uuid
                ) === -1
                    ? false
                    : true
            }
            toggleFavorite={toggleFavorite}
            setPageNumber={setPageNumber}
        />
    );

    return (
        <S.UserList>
            <CountriesCheckBoxes filterByCountry={filterByCountry} />

            <S.List>
                {countryFilterIsActive
                    ? filteredUsers.map((user, index) => createUserItem(index, user))
                    : users.map((user, index) =>
                          index + 1 === users.length
                              ? createUserItem(index, user, true)
                              : createUserItem(index, user)
                      )}

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
