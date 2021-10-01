
import { useEffect, useState } from "react"
import axios from 'axios';
import actions from '../api';




function CocktailDetails(props) {

    let [details, setDetails] = useState({})

    useEffect(async () => {
        let res = await actions.getOneCocktail(props.match.params.drinkId)
        console.log(res.data)
        setDetails(res.data)
    }, [])


    const ShowDetails = () => {
        return (
            <div>
                <h1>{details.name}</h1>
                <ul>
                    <h3>Ingrediantes</h3> {details?.ingredients?.map(each => <li>{each}</li>)}
                    <h2>Instructions</h2> {details.instructions}
                    <img src={details.image} alt="imageOfCocktail" width="200px"></img>
                </ul>
            </div>
        )
    }

    return (
        <div>

            {/* <h1> Details Here {props.match.params.drinkId}</h1> */}
            <ShowDetails />
        </div>
    );

}
export default CocktailDetails;