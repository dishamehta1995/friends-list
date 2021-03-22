export default (state, action) => {
    let list  = state.list;
    let name;
    switch(action.type) {
      case 'LOAD_FRIENDS':
        let allfriends = action.payload
        return {
          ...state,
          isSearchActive:false,
          list: allfriends,
          loading: false,
          error:null,
          foundFriend: [],
          isSortActive:false,
          sortedList:state.sortedList,
        }

        case 'DELETE_FRIEND':
        return {
          ...state,
              isSearchActive:false,
              list: list.filter(list => list.name !== action.payload),
              loading: false,
              error:null,
              foundFriend: [],
              isSortActive:state.isSortActive,
              sortedList:state.sortedList
        }
      case 'ADD_FRIEND':
        name  = action.payload
        let isFav = false
        console.log(...state.list)
        return {
          ...state,
            isSearchActive:false,
            list: [{name,isFav}, ...state.list],
            loading: false,
            error:null,
            foundFriend: [],
            isSortActive:state.isSortActive,
            sortedList:state.sortedList
        }
        

      case 'TOOGLE_FAV':
        name  = action.payload;
        let objIndex = list.findIndex((list => list.name === name));
        list[objIndex].isFav = action.isfav;
        return {
          ...state,
            isSearchActive:false,
            list: state.list,
            loading: false,
            error:null,
            foundFriend: [],
            isSortActive:state.isSortActive,
            sortedList:state.sortedList
        }
        
      case 'SEARCH_FRIEND':
        name  = action.payload
        return {
            ...state,
                isSearchActive:true,
                loading: false,
                error:null,
                list: [...state.list],
                isSortActive: state.isSortActive,
                sortedList:state.sortedList,
                foundFriend: (state.isSortActive) ? state.sortedList.filter(item=>{
                    return (
                        item.name.toLowerCase().search(name.toLowerCase()) !== -1
                    )
                })  : state.list.filter(item=>{
                        return (
                            item.name.toLowerCase().search(name.toLowerCase()) !== -1
                        )
                    }),
        }        
        
      case 'SORT_FAV':
        const sortList  = action.payload
        return {
            ...state,
                isSearchActive:false,
                loading: false,
                foundFriend:[],
                isSortActive:sortList,
                list: [...state.list],
                sortedList: (sortList) ? [...list.filter(list => list.isFav !== false), ...list.filter(list => list.isFav !== true)] : [...state.list]
        }        

      default:
        return state;
    }
  }
