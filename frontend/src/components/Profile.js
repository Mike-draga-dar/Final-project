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

        let res2 = await actions.getLikedDrinks()
        console.log(res2.data)
        setLiked(res2.data)
    }, [])



    const handleClick = async (whichPostId, i) => {
        console.log('click', whichPostId)
        let res = await actions.likePost(whichPostId)
        console.log(res.data)
        let newDrinks = [...drinks]
        newDrinks[i] = res.data
        setDrinks(newDrinks)
    }




    const ShowPosts = () => {
        return posts.map(eachDrink => {
            return (
                <div className="all-drinks">
                    <div key={eachDrink._id}>

                        <Link key={eachDrink} to={`/drinks/${eachDrink._id}`}>
                            <img src={eachDrink.image} alt="drinks-picture" className="all-drinks-img"></img><br></br>
                            {eachDrink.name}<br></br>
                            <br></br>
                            <br></br>
                        </Link>
                    </div>
                </div>
            )

        })
    }

    const LikedPosts = () => {
        return liked.map(eachDrink => {
            return (
                <div className="all-drinks">
                    <div key={eachDrink._id}>
                        <img src={eachDrink.image} alt="drinks-picture" className="all-drinks-img"></img><br></br>
                        {eachDrink.name}<br></br>
                        <br></br>
                        <br></br>
                    </div>
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

                <div className="MyPosts">
                    <div className="drink-title">My Drinks</div>
                    <br></br>
                    <br></br>
                    <div className="all-drinks">
                        <ShowPosts />
                    </div>
                </div>
                <div className="LikedPosts">
                    <div className="drink-title">Liked Drinks</div>
                    <div className="all-drinks">
                        <LikedPosts />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;