import React, { useState, useEffect } from "react";
import Text from "components/Text";
import UserList from "components/UserList";
import {
    RemoveUserDataFromFavorites,
    getFavoritesUsersData,
} from "../../Utils/favoritesUsers";
import * as S from "../Home/style";

const Favorites = () => {
    // this state will hold the favorites users data of the user - will be loaded and saved in localStorage
    const [favorites, setFavorites] = useState([]);

    const initFavorites = () => {
        const favoritesData = getFavoritesUsersData();
        setFavorites(favoritesData);
    };

    // init the favorite data on start
    useEffect(() => {
        initFavorites();
        // eslint-disable-next-line
    }, []);

    const removeFromFavorites = (userData) => {
        const newFavoritesData = RemoveUserDataFromFavorites(userData);
        setFavorites(newFavoritesData);
    };

    return (
        <S.Home>
            <S.Content>
                <S.Header>
                    <Text size="64px" bold>
                        PplFinder - Favorites
                    </Text>
                </S.Header>
                <UserList
                    users={favorites}
                    isLoading={false}
                    favorites={favorites}
                    toggleFavorite={removeFromFavorites}
                    setPageNumber={() => null}
                />
            </S.Content>
        </S.Home>
    );
};

export default Favorites;
