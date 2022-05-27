// Add a user's data to the favorites users data local storage data and return the new data
export const addUserDataToFavorites = (userData) => {
    // get the favorites users data from the local storage
    const favoritesUsersData = JSON.parse(localStorage.getItem("favoritesUsersData"));

    // insert the new user to the data
    const newFavoritesUsersData = favoritesUsersData ? [...favoritesUsersData] : [];
    newFavoritesUsersData.push(userData);

    // update the local storage
    localStorage.setItem("favoritesUsersData", JSON.stringify(newFavoritesUsersData));

    return newFavoritesUsersData;
};

// Remove a user's data from the favorites users data local storage data and return the new data
export const RemoveUserDataFromFavorites = (userData) => {
    // get the favorites users data from the local storage
    const favoritesUsersData = JSON.parse(localStorage.getItem("favoritesUsersData"));

    if (!favoritesUsersData) return [];

    // find the user's index
    const userIndex = favoritesUsersData.findIndex(
        (user) => user.login.uuid === userData.login.uuid
    );
    if (userIndex === -1) return favoritesUsersData;

    // remove the user from the data
    favoritesUsersData.splice(userIndex, 1);

    // update the local storage
    localStorage.setItem("favoritesUsersData", JSON.stringify(favoritesUsersData));

    return favoritesUsersData;
};

// return the favorite users data from local storage
export const getFavoritesUsersData = () => {
    const localStorageFavoritesData = JSON.parse(
        localStorage.getItem("favoritesUsersData")
    );
    return localStorageFavoritesData ? localStorageFavoritesData : [];
};
