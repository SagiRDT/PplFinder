import React, { useState, useEffect } from "react";
import Text from "components/Text";
import UserList from "components/UserList";
import {
    getFavoritesUsersData,
    addUserDataToFavorites,
    RemoveUserDataFromFavorites,
} from "../../Utils/favoritesUsers";
import { usePeopleFetch } from "hooks";
import * as S from "./style";

const Home = () => {
    // this state will hold the favorites of the user - will be loaded and saved in localStorage
    const [favorites, setFavorites] = useState([]);

    // this state will hold the current page number that we recently loaded
    const [pageNumber, setPageNumber] = useState(1);

    const { users, isLoading, fetchUsers } = usePeopleFetch();

    // init the favorite data from local storage
    const initFavorites = () => {
        const favoritesData = getFavoritesUsersData();
        setFavorites(favoritesData);
    };

    // init the favorite data on start
    useEffect(() => {
        initFavorites();
        // eslint-disable-next-line
    }, []);

    // if the pageNumber state got changed fetch new users
    useEffect(() => {
        fetchUsers(pageNumber);
        // eslint-disable-next-line
    }, [pageNumber]);

    // Toggle a favorite user, update the favorite state and the localStorage
    const toggleFavorite = (userData) => {
        // find the user's index
        const userIndex = favorites.findIndex(
            (user) => user.login.uuid === userData.login.uuid
        );

        let newFavorites;

        // if the user is not in the favorites list - enter it to the local storage
        if (userIndex === -1) {
            newFavorites = addUserDataToFavorites(userData);
        }
        // else - remove it from the local storage
        else {
            newFavorites = RemoveUserDataFromFavorites(userData);
        }

        // update the state
        setFavorites(newFavorites);
    };

    return (
        <S.Home>
            <S.Content>
                <S.Header>
                    <Text size="64px" bold>
                        PplFinder
                    </Text>
                </S.Header>
                <UserList
                    users={users}
                    isLoading={isLoading}
                    favorites={favorites}
                    toggleFavorite={toggleFavorite}
                    setPageNumber={setPageNumber}
                />
            </S.Content>
        </S.Home>
    );
};

export default Home;
