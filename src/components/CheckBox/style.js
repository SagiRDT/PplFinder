import styled from "styled-components";

export const CheckBox = styled.div``;

// added the filter style to the checkbox style js in order to have a group of checkboxes together
export const Filters = styled.div`
    display: flex;
    justify-content: center;
    & > * {
        margin-inline-end: 8px;
    }
`;
