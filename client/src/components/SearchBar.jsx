import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameDog } from '../redux/actions';
import style from './styles/SearchBar.module.css'


export default function SearchBar(){

    const dispatch = useDispatch()
    const [name, setName] = useState("")

    function handleInputChange (e) {
        e.preventDefault();
        setName(e.target.value);
        // console.log(name)
    }

    function handleSubmit(e){
    e.preventDefault();
    if(name.length === 0) {
        return alert ("Please write a breed")
    }else{
        dispatch(getNameDog(name));
        setName("")
        }
    }
        
        return (
        
                <div className={style.search}>
                    <input
                    type = "text"
                    placeholder='Search...'
                    value={name}
                    autoComplete='off'
                    onKeyPress={e => e.key === 'Enter' && handleSubmit(e)}
                    onChange = {(e) => handleInputChange(e)}
                    />
                    <button type = 'submit' 
                    onClick = {(e) => handleSubmit(e)} > <img src="https://www.flaticon.es/svg/vstatic/svg/3917/3917061.svg?token=exp=1662044303~hmac=110f95ae8627bfdce48c88c71e2e5e2f" alt="search" />
                    </button>
                </div>
        )
}