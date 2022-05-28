import React, { useState, useRef, useCallback } from "react";
import Text from "components/Text";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import * as S from "./style";

const UserItem = ({
    index,
    user,
    isLast,
    isLoading,
    isFavorite,
    toggleFavorite,
    setPageNumber,
}) => {
    const [hoveredUserId, setHoveredUserId] = useState();

    const handleMouseEnter = (index) => {
        setHoveredUserId(index);
    };

    const handleMouseLeave = () => {
        setHoveredUserId();
    };

    // this ref and callback will observe the last userItem, when the last userItem will be rendered to the screen
    // the callback function will be called and will fetch a new page with new users
    const observer = useRef();
    const lastUserItemRef = useCallback(
        (userItem) => {
            if (isLoading) return;

            if (observer.current) observer.current.disconnect();

            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    setPageNumber((prevPageNumber) => prevPageNumber + 1);
                }
            });

            if (userItem) observer.current.observe(userItem);
        },
        [isLoading]
    );

    return (
        <S.User
            key={index}
            ref={isLast ? lastUserItemRef : null}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
        >
            <S.UserPicture src={user?.picture.large} alt="" />
            <S.UserInfo>
                <Text size="22px" bold>
                    {user?.name.title} {user?.name.first} {user?.name.last}
                </Text>
                <Text size="14px">{user?.email}</Text>
                <Text size="14px">
                    {user?.location.street.number} {user?.location.street.name}
                </Text>
                <Text size="14px">
                    {user?.location.city} {user?.location.country}
                </Text>
            </S.UserInfo>
            <S.IconButtonWrapper
                isVisible={index === hoveredUserId || isFavorite}
                onClick={() => {
                    toggleFavorite(user);
                }}
            >
                <IconButton>
                    <FavoriteIcon color="error" />
                </IconButton>
            </S.IconButtonWrapper>
        </S.User>
    );
};

export default UserItem;
