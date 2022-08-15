import React from 'react'
import { NavLink } from 'react-router-dom'

export function AppHeaderLogin({ loggedInUser }) {
    if (loggedInUser) return ''
    return (
        <li>
            <NavLink
                to='/login'
                className={'header-link'}
            >Login
            </NavLink>
        </li>
    )
}
