import styled from 'styled-components';

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-column-gap: 10px;
    grid-row-gap: 2px;
    padding: 5px;

    min-height: 100px;
    border-radius: 5px;
    -webkit-box-shadow: 0px 0px 5px 0px rgba(170,170,170,1);
    -moz-box-shadow: 0px 0px 5px 0px rgba(170,170,170,1);
    box-shadow: 0px 0px 5px 0px rgba(170,170,170,1);

    &:hover {
        cursor: pointer
    }

    &:active {
        opacity: 0.5;
    }
`;