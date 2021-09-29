import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react-router-dom'





// const [images, setImages] = useState("")



// useEffect(async () => {
//     let res = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php');
//     setImages(res.data)
// })

axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php').then((res) => {
    console.log(res.data)
})



function Images() {





    return (
        <div>
            <h1> Random Images of Cocktails </h1>

        </div>
    );

}
export default Images;