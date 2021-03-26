import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';
import { FriendDetails } from './FriendDetails';
import Pagination from './Pagination';

export const FriendsList = () => {
    const { state, loadFriends } = useContext(GlobalContext);
    const currentList = (state.isSearchActive) ? state.foundFriend : (state.isSortActive ? state.sortedList : state.list)
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(4);
    useEffect(() => {
        const fetchList = async () => {
            const res = await fetch(`https://dishamehta1995.github.io/dummydata/data.json`);
            const data = [],
            loadFriends(data);
        }
        fetchList();
    },[])

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = currentList.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = pageNumber => setCurrentPage(pageNumber);

    if(state.loading){
        return (<p className='description'>...loading</p>)
    }
    return (currentList.length ? (
                    <div>
                        <ul className='list'>{
                            currentPosts.map((friend,i) => {
                                return ( <FriendDetails details={friend} isfav={friend.isfav} key={i} />)
                            })
                        }</ul>
                        <Pagination
                            postsPerPage={postsPerPage}
                            totalPosts={currentList.length}
                            paginate={paginate}
                            currentPage={currentPage}
                        />
                    </div>
            ) : ( <p className='description'>No friends found!</p> )
        )
}
