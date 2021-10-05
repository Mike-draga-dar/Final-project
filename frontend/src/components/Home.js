import { useEffect, useState } from "react"
import axios from 'axios';
import actions from '../api';
import { Link } from 'react-router-dom'
import CocktailDetails from "./CocktailDetails"



function Home() {

    const [drinks, setDrinks] = useState([]);




    useEffect(async () => {

        let res = await actions.getAllDrinks()
        // console.log(res.data)

        setDrinks(res.data)
    }, [])

    console.log(drinks)

    const ShowDrinks = () => {
        return (
            <div className="all-drinks">
                    {drinks.map((drink) => {
                        return <Link key={drink._id} to={`/drinks/${drink._id}`}>
                                <img src={drink.image} alt="image" width="200px" /><br></br>
                                {drink.name}<br></br>
                                <br></br>
                        </Link>
                    })
                    }
            </div>
        )
    }


    return (
        <div className="container">
            <div className="red-header">
                <p>All Drinks</p>
            </div>
            <br></br><br></br>
            <ShowDrinks />
        </div>
    );
}

export default Home;