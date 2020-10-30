import { Palette } from '../themes';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';

export const Progress = withStyles({
    root: {
        display: "block",
        color: `${Palette.button.secundary}`,
        'margin': '20px',
        'margin-right': 'auto',
        'margin-left': 'auto'
    }
})(CircularProgress);

export const DefaultBox = styled.div`
    width: 97%;
    height: auto;
    min-height: 100vh;
    margin: 0px;
    margin-right: auto;
    margin-left: auto;
    padding: 5px;

    text-align: center;

    background-color: #FFF;
    -webkit-box-shadow: 0px 0px 5px 0px rgba(170,170,170,1);
    -moz-box-shadow: 0px 0px 5px 0px rgba(170,170,170,1);
    box-shadow: 0px 0px 5px 0px rgba(170,170,170,1);

    @media screen and (min-width: 720px)
    {
        padding: 20px;
        width: 60vw;
    }
`;

export const DefaultBackground = styled.div`
    background-image: url('/login_wallpaper.jpg');
    background-size: cover;
    width: 100%;
    min-height: 100vh;

    
    padding-top: 0px;
    padding-bottom: 0px;
`;

export const LogoApp = styled.img`
    width: 300px;
    height: 150px;
    margin-right: auto;
    margin-left: auto;

    background-size: cover;
    content: url('/full_logo_m.png');
`;