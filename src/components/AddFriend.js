import React, { useContext, useState } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';

export const AddFriend = ({details}) => {
    const { addFriend, sortFav, state } = useContext(GlobalContext);
    const [name,setName] = useState('');
    const [error,setError] = useState('');
    
    const handleSubmit = (e) =>{
        setError(''); 
        if(e.which === 13){
            e.preventDefault();
            var regex = /^[a-zA-Z ]{2,30}$/;
            var valid = false;
            if(!regex.test(name)){
               setError('Invalid Name'); 
            }else{
                for (var x in state.list) {
                    if(state.list[x].name.toLowerCase().replace(/\s/g, "") == name.toLowerCase().replace(/\s/g, "")){
                        var text = name+' is already in your list'
                        setError(text);
                        valid = false;
                        break;
                    }else{
                        valid = true
                    }
                }
            }
            if(valid){
                addFriend(name,false);
                setName('');
            }
        }
    }
    return (
        <form>
            <input 
                type='text'
                className='form-control'
                value={name}
                placeholder='Enter your friends name'
                onChange={(e) => setName(e.target.value)} 
                onKeyPress={handleSubmit} 
                onBlur={() => (setError(''))}
                required />
                <p className='error'>{error}</p>
                <div className='align-right'>
                    <span className='description'>Sort by Fav</span>
                    <input 
                        type='checkbox'
                        onClick={(e) => sortFav(e.target.checked)}
                    />
                </div>
        </form>
    )
}
