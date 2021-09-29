import { useContext, useState, useEffect } from 'react';
import TheContext from '../TheContext';
import axios from 'axios'
import actions from '../api'

function Profile(props) {





    const [posts, setPosts] = useState([])

    useEffect(async () => {
        let res = await actions.getAllPosts()
        setPosts(res.data.reverse())
    }, [])


    const ShowMyPosts = () => {
        return posts.map((eachPost) => {
            return (
                <div key={eachPost._id}>
                    <h3>{eachPost.title}</h3>
                    <p>{eachPost.post}</p>
                    <p>Likes:{eachPost.likes}</p>
                    <hr></hr>

                </div>
            )
        })
    }



    let { user } = useContext(TheContext)
    return (
        <div>
            Profile My name is
            <div className="profileName"> Prop Driilling: {props.user?.name}</div>


            <div className="profileName"> Context: {user?.name}</div>

            <div className="MyPosts">
                <h4>Here is my Post</h4>

                <ShowMyPosts />

            </div>
        </div>
    );
}

export default Profile;