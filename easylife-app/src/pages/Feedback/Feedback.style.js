import styled from 'styled-components';

export const TextArea = styled.textarea`
    width: 90%;
    height: 80px;
    resize: none;

    margin-right: auto;
    margin-left: auto;

    @media screen and (min-width: 720px)
    {
        width: 80%;
    }
`;