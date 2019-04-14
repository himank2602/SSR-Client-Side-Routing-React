import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {

    const menu = [{

        name: 'Home',
        param: '',
    }, {
        name: 'Cities',
        param: 'cities',
    }]

    return (
        <ul>
            {menu.map(({ name, param }) => (
                <li key={param}>
                    <NavLink activeStyle={{ fontWeight: 'bold' }} to={`/${param}`}>
                        {name}
                    </NavLink>
                </li>
            ))}
        </ul>
    )
}