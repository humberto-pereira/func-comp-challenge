import React from 'react'
import css from './css/Sidebar.module.css'

const Navbar = () => {
    return (
    <div className={css.NavBarSimple}>
        <h1>My Gallery</h1>
        <span>Hello, guest</span>
        <button>log in</button>
    </div>
    )
}

const Sidebar = () => {
    return (
    <div className={css.Sidebar}>
        <a href='#' target='_blank'>My Photos</a>
        <a href='#' target='_blank'>My Illustrations</a>
        <a href='#' target='_blank'>My Paintings</a>
    </div>
    )
}

export default Sidebar, Navbar;