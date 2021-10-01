import React from 'react';
import { useEffect, useState } from "react"
import axios from 'axios';
import actions from '../api';




function CocktailDetails() {

    let [details, setDetails] = useState({})

    useEffect(async () => {
        let res = await actions.getAllDrinks()
        setDetails(res.data)
    }, [])


    const ShowDetails = () => {

    }

    return (
        <div>

            <h1> Details Here </h1>
            <ShowDetails />
        </div>
    );

}
export default CocktailDetails;