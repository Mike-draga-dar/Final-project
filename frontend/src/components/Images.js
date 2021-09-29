import actions from "../api";
import { useState, useEffect } from "react"
import axios from "axios";



function Images() {
    const [images, setImages] = useState({});

    useEffect(async () => {

        let res = await actions.getImages()
        setImages(res.data)

    }, [])


    return (
        <div>

            <img src={images.drinks?.[0]?.strDrinkThumb} alt="random Drinks" />


            <div className="drinks">
                <h2>{images.drinks?.[0]?.strDrink}</h2>
                <h5> {images.drinks?.[0]?.strInstructions}</h5>


            </div>

        </div>
    )
}

export default Images;