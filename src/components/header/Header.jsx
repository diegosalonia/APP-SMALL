import React from 'react'
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import TextField from '@material-ui/core/TextField'
import { Avatar } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { actionTypes } from '../../reducer';
import { useStateValue } from '../../Stateprovider';
import logo from '../../assets/logo.png'

const Header = () => {
    const [{isOpen}, dispatch] = useStateValue()

    const toggleMenu = () => {
        dispatch({ 
            type: actionTypes.TOGGLE_MENU,
            isOpen: !isOpen
        })
    }

    return (
        <div className="header">
            <div className="header__left">
                <IconButton onClick={toggleMenu}>
                <MenuIcon fontSize="large" />
                </IconButton>
                <img src={logo} alt="" />
            </div>
            <div className="header__menu">
                <h3>Home</h3>
                <h3>Quick menu <span><ExpandMoreIcon/></span></h3>
            </div>
            <div className="header__right">
                <form noValidate autoComplete="off">
                    <TextField id="filled-basic" type="filled" variant="filled"/>
                </form>
                <Avatar/>
            </div>
        </div>
    )
}

export default Header
