import React from 'react'
import { Link } from 'react-router-dom'
import '../css/nav.css'

export const Navbar = (props) => {
    return (
        <>
        <div className="nav-container">
            <div className='logo'>MARVEL APP</div>
            {/* <ul className='link-wrapper'>
                <li><Link to='/' className='link'>Home</Link></li>
                <li><Link to='/characters' className='link'>Characters</Link></li>
            </ul> */}
        </div>
        <div className='search-container' placeholder='Search...'>
            <input type='search' onChange={input => props.search(input)}></input>
        </div>
        </>
        
    )
}
