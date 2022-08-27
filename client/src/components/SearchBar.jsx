import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameDog } from '../redux/actions';


export default function SearchBar(){

    const dispatch = useDispatch()
    const [name, setName] = useState("")

    function handleInputChange (e) {
        e.preventDefault();
        setName(e.target.value);
          }

    function handleSubmit(e){
    e.preventDefault();
    if(name.length === 0) {
        return alert ("Please write a breed")
    } else{
        dispatch(getNameDog(name));
        setName("")
        }
        }
        
        return (
        
                <div>
                    <input
                    type = "text"
                    placeholder='Search...'
                    value={name}
                    autoComplete='off'
                    onKeyPress={e => e.key === 'Enter' && handleSubmit(e)}
                    onChange = {(e) => handleInputChange(e)}
                    />
                    <button type = 'submit' 
                    onClick = {(e) => handleSubmit(e)}> SEARCH
                    </button>
                    </div>
        )
}