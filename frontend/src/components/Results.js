import React from 'react';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'
import actions from '../api';

function Results(props) {

  let { keyword, city } = useParams();
  let [drinks, setDrinks] = useState([]);

  useEffect(() => {
    const params = new URLSearchParams(props.location.search);
    const keyword = params.get("keyword");
    // axios
    //   .get(
    //     `../../backend/cocktails.json?keyword=${keyword}`
    //   )
    actions.searchDrink(keyword)

      .then((resApi) => {
        setDrinks(resApi.data);
      });
  }, [props.location.search]);

  const ShowResults = () => {
    return (
      <div className="all-drinks">
        {drinks.map((drink) => {
          return <Link key={drink._id} to={`/drinks/${drink._id}`}>
            <img src={drink.image} alt="image" className="all-drinks-img" /><br></br>
            <br></br>
            {drink.name}<br></br>
            <br></br>
            <br></br>
          </Link>
        })
        }
      </div>
    )
  }

  return (
    <div className="container">
      <div className="red-header"><p>Drink Results</p></div>
      <br></br>
      <ShowResults />
    </div>
  );
}

export default Results;