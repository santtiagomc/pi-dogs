import React from "react";

export default function Card({name, image, id, max_weight, temperament, temperaments}) {
    
    function addPhoto (e) {
        e.target.src = barking
    }
        return (
            <div className={s.card} >
               
                <Link to ={`/dogs/${id}`} > 
                <h2 className={s.linkedname}>{name.toUpperCase()}</h2>
              
                 { image ?  <img src= {image} alt= "Barking in another place!" className={s.img} onError={addPhoto}/> : <img className={s.img} src = {carnet} alt = "Woof"/>}<br/>
                 <p className={s.extras}> Can weight up to {max_weight} kgs. </p><br/>
                 <p className={s.extras}> Temperaments: {temperament} {temperaments}</p> </Link> 
                 
                 <div >       
    
                  <div className={s.favorite}>   
                        <FavoritesActions 
                         id = {id}
                        name = {name}
                        image = {image}
                        />         
                        </div>
                        </div>
                      
                        </div>
             
            
        )
    }