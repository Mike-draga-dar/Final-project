import actions from "../api";
import { useState, useEffect } from "react"
import axios from "axios";



function RandomImages() {
    const [images, setImages] = useState({});

    useEffect(async () => {

        let res = await actions.getAllDrinks()
        setImages(res.data)

    }, [])
let random=Math.floor(Math.random()*images.length)
        console.log(random)

    return (
        <div className="container">
        <img src={images?.[random]?.image}></img>

           <p>{images?.[random]?.name}</p>

           <p>Ingredients:</p>
           <ul>
        {images?.[random]?.ingredients.map(eachIngredient=>{
            return(
                <li>{eachIngredient}</li>
            )
        })}

           </ul>

           <p>{images?.[random]?.instructions}</p>

        </div>
    )
}

export default RandomImages;