import React, { useContext, useState } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';

 export const FriendDetails = ({ details, isfav }) => {
    const { deleteFriend, toggleFav} = useContext(GlobalContext);
    const [fav,setFav] = useState(details.isFav);

    const changeFav = (e) => {
        fav ? setFav(false) : setFav(true);
        toggleFav(details.name,!fav);
    }
    
    const removeFriend = (e) => {
        if (window.confirm(`Are you sure you want to delete ${details.name}?`)) {
            deleteFriend(details.name);
        }
    }
    
    return (
        <li className='list-item' >
            <div>
                <p className='caption'> {details.name} </p>
                <p className='small'> is your friend </p>
            </div>
            <div className='btn-wrap'>
                <button data-for={details.isFav ?'true' :'false'} className={(details.isFav) ? 'fav btn-border' : 'btn-border'}  onClick={changeFav} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill='#ddd' d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                </button>
                <button className='btn-border' onClick={removeFriend}> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 19c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5-17v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712zm-3 4v16h-14v-16h-2v18h18v-18h-2z"/></svg>
                </button>
            </div>
        </li>
    );
}
