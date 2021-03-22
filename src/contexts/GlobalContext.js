import React,{useState, useReducer, createContext} from 'react';
import AppReducer from './AppReducer';

const initialState = {
    loading: true,
    list: [],
    error:null,
    foundFriend: [],
    sortedList:[],
    isSearchActive:false,
    isSortActive:false,
} 
export const GlobalContext =  createContext();

export const GlobalProvider = ({children}) => {
    const [state,dispatch] = useReducer(AppReducer, initialState);
    function deleteFriend( name ){
        dispatch({
          type: 'DELETE_FRIEND',
          payload: name
        })
    }
    
    function  addFriend( name ){
        dispatch({
          type: 'ADD_FRIEND',
          payload: name
        })
    }
    
    function toggleFav( name, isfav){
        dispatch({
          type: 'TOOGLE_FAV',
          payload: name,
          isfav: isfav
        })
    }
    
    function searchFriend( name ){
        dispatch({
          type: 'SEARCH_FRIEND',
          payload: name
        })
    }
    
    function loadFriends( list ){
        dispatch({
          type: 'LOAD_FRIENDS',
          payload: list
        });

    }
    
    function sortFav( sortlist ){
        dispatch({
          type: 'SORT_FAV',
          payload: sortlist
        });

    }
            
    return (
        <GlobalContext.Provider value={{
            state: state,
            loadFriends,
            addFriend, 
            deleteFriend, 
            toggleFav, 
            searchFriend,
            sortFav
        }}>
            { children }
        </GlobalContext.Provider>
    )
}

export default GlobalProvider;
