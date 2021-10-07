import { useEffect, useState } from 'react'
import actions from '../api'
import { Link } from 'react-router-dom'

function Home(props) {

    const [ newDrinks, setNewDrinks ] = useState([])
    const [ randomDrinks, setRandomDrinks ] = useState([])

    useEffect (async () => {
        let res = await actions.getNewDrinks()
        let res2 = await actions.getRandomDrinks()

        setNewDrinks(res.data)
        setRandomDrinks(res2.data)
    }, [])

    const ShowNewDrinks = () => {
        return (
            <div className="all-drinks">
            {newDrinks.map((drink) => {
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

    const ShowRandomDrinks = () => {
        return (
            <div className="all-drinks">
            {randomDrinks.map((drink) => {
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
        <div>
            <ShowNewDrinks />
            <ShowRandomDrinks />
        </div>
    );
}

export default Home;