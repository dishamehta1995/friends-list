import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';

export const NavBar = () => {
    const { searchFriend } = useContext(GlobalContext);
    
    return (
        <div className='navbar'>
            <h1 className='title'>Friends List</h1>
            <div className='search-bar'>
                <input
                    type='text'
                    className='form-control search-input'
                    placeholder='Enter your friends name'
                    onChange={(e) => searchFriend(e.target.value)}
                    required />
            </div>
        </div>
    )
}
