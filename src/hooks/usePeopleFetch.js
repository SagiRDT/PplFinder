import { useState } from "react";
import axios from "axios";

export const usePeopleFetch = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    async function fetchUsers(pageNumber) {
        setIsLoading(true);

        const response = await axios.get(
            `https://randomuser.me/api/?results=6&page=${pageNumber}`
        );

        setIsLoading(false);
        setUsers((prevUsers) => [...prevUsers, ...response.data.results]);
    }

    return { users, isLoading, fetchUsers };
};
