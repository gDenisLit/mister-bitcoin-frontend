import React from 'react'
import { NavLink } from 'react-router-dom'
import { CloseMenuX } from './AppHeaderMobile'
import { AppHeaderLogin } from './AppHeaderLogin'

export function AppHeaderNav({ links, isMenuOpen, toggleMenu, loggedInUser }) {

    return (
        <nav className={`nav-wrapper ${isMenuOpen ? 'open' : ''}`}>
            <ul className="nav clean-list flex">
                <CloseMenuX toggleMenu={toggleMenu} />
                {links.map(link => {
                    return (
                        <li key={link.id}>
                            <NavLink
                                exact
                                to={link.path}
                                className={'header-link'}
                            >
                                {link.title}
                            </NavLink>
                        </li>
                    )
                })}
                <AppHeaderLogin loggedInUser={loggedInUser} />
            </ul>
        </nav >
    )
}
