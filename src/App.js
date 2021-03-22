import { AddFriend } from './components/AddFriend';
import { FriendsList } from './components/FriendsList';
import { NavBar } from './components/NavBar';
import { GlobalProvider } from './contexts/GlobalContext';
function App() {
  return (
    <GlobalProvider>
      <div className='container'> 
        <NavBar/>
        <AddFriend/>
        <FriendsList/>
      </div>
    </GlobalProvider>
  );
}

export default App;
