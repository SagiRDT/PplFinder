import React, { useState } from "react";
import Spinner from "components/Spinner";
import CountriesCheckBoxes from "../CheckBox/CountriesCheckBoxes";
import UserItem from "./UserItem";
import * as S from "./style";

const UserList = ({
    users,
    isLoading,
    favorites,
    isFavoritePage = false,
    toggleFavorite,
    setPageNumber,
}) => {
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

    // handle the favorites page removal of a favorite user, making sure the user will be removed from the favorites
    // page also if the users are filtered (deleting it from the filtered users list as well)
    const favoritePageRemoveFromFavorites = (userData) => {
        // if the user is in the filtered users list remove him from it
        const userIndex = filteredUsers.findIndex(
            (user) => user.login.uuid === userData.login.uuid
        );

        if (userIndex !== -1) {
            const newFilteredUsers = [...filteredUsers];
            newFilteredUsers.splice(userIndex, 1);
            setFilteredUsers(newFilteredUsers);
        }

        // call the toggle function we got as param
        toggleFavorite(userData);
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
            toggleFavorite={
                isFavoritePage ? favoritePageRemoveFromFavorites : toggleFavorite
            }
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
