import { useContext, useState, useEffect } from 'react';
import TheContext from '../TheContext';
import axios from 'axios'
import actions from '../api'



function Profile(props) {
    const [posts, setPosts] = useState([])
    useEffect(async () => {
        let res = await actions.getMyPosts()
        setPosts(res.data.reverse())
    }, [])


    const ShowPosts = () => {
        return posts.map(eachPost => {
            return (
                <div key={eachPost._id}>
                    <div >
                        {eachPost.title}
                    </div>
                    <div>
                        {eachPost.post}
                    </div>
                    <div>
                        {eachPost.instructions}
                    </div>
                    <div>
                    {!eachPost.image? null :(
                       <img src={eachPost.image} alt= "DrinkImage" width="20%" height="20%"></img>
                    )}
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
                <div className="drink-title">Drinks</div>
                <div className="MyPosts">
                    <h4>Here is my Post?</h4>
                    <ShowPosts />
                </div>
            </div>
        </div>
    );
}

export default Profile;