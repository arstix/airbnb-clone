import React from 'react'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search"
import LanguageIcon from "@material-ui/icons/Language"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import { Avatar } from "@material-ui/core"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"

function Header() {
    return (
        <div className="header">
        <Link to="/">
          <img className="header__icon" src="http://www.lavistademedina.com/wp-content/uploads/2016/07/Airbnb-new-logo-2014.png" />
          </Link>
          <div className="header__center">
            <input type="text" />
            <SearchIcon />
          </div>

          <div className="header__right">
            <p>Become a host</p>
            <LanguageIcon />
            <ExpandMoreIcon />
            <Avatar />
          </div>
        </div>
    )
}

export default Header
