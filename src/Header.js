import React from 'react'
import './Header.css'
import ima from './assets/d.png'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search';
function Header() {
    return (
        <div className='Header'>
            <div className='Header_left'>
                <IconButton>
                <MenuIcon className='MenuIcon'/>

                </IconButton>
            </div>
            <div className='Header_mid'>
                <SearchIcon  className='search_icon'/>
                <input  className='inputs' placeholder='Search Star Wars Charecters'/>
            </div>
            <div className='Header_right'>
                <img src={ima} className='avathar'alt='no im'></img>
            </div>
        
        </div>
    )
}

export default Header
