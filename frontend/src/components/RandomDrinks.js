import actions from "../api";
import { useState, useEffect } from "react"
import axios from "axios";



function RandomImages() {
    const [images, setImages] = useState({});

    useEffect(async () => {

        let res = await actions.getRandomDrinks()
        setImages(res.data)

    }, [])

    console.log(images)

    return (
        <div className="container">
            <div className="red-header"><p>Random Drink</p></div>
            <img src={images.drinks?.[0]?.strDrinkThumb} alt="random Drinks" />


            <div className="drinks">
            <div className="drinkName">
                <h2>{images.drinks?.[0]?.strDrink}</h2>
                </div>
                <ul>Ingredients</ul>
                {!images.drinks?.[0]?.strIngredient1? null:(

                <li>{images.drinks?.[0]?.strIngredient1}</li>
                )}


                {!images.drinks?.[0]?.strIngredient2? null:(

                <li>{images.drinks?.[0]?.strIngredient2}</li>
                )}


                {!images.drinks?.[0]?.strIngredient3? null:(

                <li>{images.drinks?.[0]?.strIngredient3}</li>
                )}


                {!images.drinks?.[0]?.strIngredient4? null:(

                <li>{images.drinks?.[0]?.strIngredient4}</li>
                )}


                {!images.drinks?.[0]?.strIngredient5? null:(

                <li>{images.drinks?.[0]?.strIngredient5}</li>
                )}


                {!images.drinks?.[0]?.strIngredient6? null:(

                <li>{images.drinks?.[0]?.strIngredient6}</li>
                )}


                {!images.drinks?.[0]?.strIngredient7? null:(

                <li>{images.drinks?.[0]?.strIngredient7}</li>
                )}


                {!images.drinks?.[0]?.strIngredient8? null:(

                <li>{images.drinks?.[0]?.strIngredient8}</li>
                )}


                {!images.drinks?.[0]?.strIngredient9? null:(

                <li>{images.drinks?.[0]?.strIngredient9}</li>
                )}


                {!images.drinks?.[0]?.strIngredient10? null:(

                <li>{images.drinks?.[0]?.strIngredient10}</li>
                )}


                {!images.drinks?.[0]?.strIngredient11? null:(

                <li>{images.drinks?.[0]?.strIngredient11}</li>
                )}


                {!images.drinks?.[0]?.strIngredient12? null:(

                <li>{images.drinks?.[0]?.strIngredient12}</li>
                )}


                {!images.drinks?.[0]?.strIngredient13? null:(

                <li>{images.drinks?.[0]?.strIngredient13}</li>
                )}


                {!images.drinks?.[0]?.strIngredient14? null:(

                <li>{images.drinks?.[0]?.strIngredient14}</li>
                )}


                {!images.drinks?.[0]?.strIngredient15? null:(

                <li>{images.drinks?.[0]?.strIngredient15}</li>
                )}

               


                <h5> {images.drinks?.[0]?.strInstructions}</h5>


            </div>

        </div>
    )
}

export default RandomImages;