import React from 'react';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Results(props) {

    let { keyword, city } = useParams();
    let [drinks, setDrinks] = useState([]);

    useEffect(() => {
        const params = new URLSearchParams(props.location.search);
        const keyword = params.get("keyword");
        axios
          .get(
            `../../backend/cocktails.json?keyword=${keyword}`
          )
          .then((resApi) => {
            setDrinks(resApi?.data?._embedded?.events);
          });
      }, [props.location.search]);

    return (
        <div className="container">
            <div className="red-header"><p>Drink Results</p></div>
        </div>
    );
}

export default Results;