import React from 'react';
import Menu from '@material-ui/core/Menu';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuItem from '@material-ui/core/MenuItem';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import InputBase from '@material-ui/core/InputBase';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import { useStyles } from './NavBar.style';

import { logout } from '~/services/auth';
import { useHistory } from "react-router-dom";

export default function NavBar(props) {
    const classes = useStyles();
    const history = useHistory();
    const defaultNavBar = props.default ?? false;
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const [searchInput, setSearchInput] = React.useState(null);
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleKeyPressSearch = (event) => {
        if(event.key === 'Enter') {
            history.push("/search/" + searchInput.value);
            window.location.reload();
        }
    }

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const handleLogout = (e) => {
        e.preventDefault();
        logout();
        history.go(0);
    }

    const handleGoBack = () => {
        history.goBack();
    }

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}  style={{display: "none"}}>Minha Conta</MenuItem>
            <MenuItem onClick={handleLogout}>Sair</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem onClick={handleProfileMenuOpen}  style={{display: "none"}}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    if (defaultNavBar) {
        return (
            <div className={classes.grow}>
                <AppBar position="fixed" className={classes.appbar}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            className={classes.backButton}
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleGoBack}>
                            <ArrowBackIcon />
                        </IconButton>
                        <Typography className={classes.title} variant="h6" noWrap>
                            Easy Life - Faça o login ou se cadastre ! É rápidinho ;)
                    </Typography>
                    </Toolbar>
                </AppBar>
                <Toolbar />
            </div>
        )
    }

    return (
        <div className={classes.grow}>
            <AppBar position="fixed" className={classes.appbar}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.backButton}
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleGoBack}>
                        <ArrowBackIcon />
                    </IconButton>
                    <Typography className={classes.title} variant="h6" noWrap>
                        Easy Life
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Pesquisa..."
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                            inputRef={input => setSearchInput(input)}
                            onKeyPress={(event) => handleKeyPressSearch(event)} 
                        />
                    </div>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            <Toolbar />
            {renderMobileMenu}
            {renderMenu}
        </div>
    );
}
