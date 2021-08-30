import React from 'react'
import Header from './Header.jsx'
import Menu from './Menu.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper,fas,faSearch } from '@fortawesome/free-solid-svg-icons'

export const Navbar = (props) => {
    return (
        <div className="sticky-top">
        <Header></Header>
        <Menu></Menu>
        </div>
    )
}
