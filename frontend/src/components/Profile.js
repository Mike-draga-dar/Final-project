import { useContext, useState, useEffect } from 'react';
import TheContext from '../TheContext';
import axios from 'axios'
import actions from '../api'
import { Link } from 'react-router-dom'


function Profile(props) {
    const [posts, setPosts] = useState([])
    const [liked, setLiked] = useState([])
    const [drinks, setDrinks] = useState([]);

    useEffect(async () => {
        let res = await actions.getMyPosts({})
        setPosts(res.data.reverse())
    }, [])

    useEffect(async () => {
        let res = await actions.likePost()
        setLiked(res.data)
    }, [])

    const handleClick = async (whichPostId, i) => {
        console.log('click', whichPostId)
        let res = await actions.likePost(whichPostId)
        console.log(res.data)
        let newDrinks = [...drinks]
        newDrinks[i] = res.data
        setDrinks(newDrinks)
    }


    console.log(posts)

    const ShowPosts = () => {
        return posts.map(eachDrink => {
            return (
                <div key={eachDrink._id}>

                    <Link key={eachDrink} to={`/drinks/${eachDrink._id}`}><h3>{eachDrink.name}</h3>

                        <p>Ingredients:</p>
                        <p>{eachDrink.ingredients?.map(eachIngredient => {

                            return (<li key={eachIngredient}>{eachIngredient}</li>)
                        })}</p>

                        <p>Instructions: {eachDrink.instructions}</p>

                        <img src={eachDrink.image} alt="drinks-picture"></img>


                    </Link>
                </div>
            )

        })
    }

    const LikedPosts = () => {
        return liked.map(eachDrink => {
            return (
                <div key={eachDrink._id}>

                    <h3>{eachDrink.name}</h3>

                    <p>{eachDrink.ingredients?.map(eachIngredient => {

                        return (<li>{eachIngredient}</li>)
                    })}</p>

                    <p>{eachDrink.instructions}</p>

                    <img src={eachDrink.image} alt="drinks-picture"></img>
                </div>
            )

        })
    }

    let { user } = useContext(TheContext)
    return (
        <div className="container">
            <div className="red-header"><p>Profile</p></div>
            <br></br>
            <div className="profile">
                <img src={props.user?.imageUrl} className="profile-picture" /><br></br>
                <h1>{props.user?.name}</h1>
                <div className="drink-title">Drinks</div>
                <div className="MyPosts">
                    <h1>My Posts </h1>
                    <ShowPosts />
                </div>
                <div className="LikedPosts">
                    {/* <LikedPosts/> */}
                    <h1>Liked Posts</h1>
                </div>
            </div>
        </div>
    );
}

export default Profile;