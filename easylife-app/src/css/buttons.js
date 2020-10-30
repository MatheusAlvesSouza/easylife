import { Palette } from '../themes';
import styled from 'styled-components';

export const Button = styled.button`
    display: block;
    width: 100%;
    height: 40px;

    margin-top: 20px;
    margin-bottom: 20px;
    margin-right: auto;
    margin-left: auto;

    font-weight: bolder;
    font-family: Arial, Helvetica, sans-serif;

    border: none;
    border-radius: 10px;

    text-align: center;

    background-position: center;
    transition: background 0.8s;

    &:hover {
        cursor: pointer;
        -webkit-box-shadow: 0px 0px 2px 2px ${Palette.light.grey};
        -moz-box-shadow: 0px 0px 2px 2px ${Palette.light.grey};
        box-shadow: 0px 0px 2px 2px  ${Palette.light.grey};
        background: #47a7f5 
            radial-gradient(circle, transparent 1%, #47a7f5 1%) center/15000%;
    }

    &:active {
        background-color: #6eb9f7;
        background-size: 100%;
        transition: background 0s;
    }

    &:focus {
        outline: none;
    }

    @media screen and (min-width: 720px)
    {
        width: 80%;
    }
`

export const PrimaryButton = styled(Button)`
    color: ${Palette.button.textColor};
    background: ${Palette.button.primary};
`;

export const SecundaryButton = styled(Button)`
    color: ${Palette.button.textColor};
    background: ${Palette.button.secundary};
`;
