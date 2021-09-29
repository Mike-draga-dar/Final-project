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


    const ShowPosts = () => {
        return posts.map(eachPost => {
            return (
                <>
                    <div>
                        {eachPost.title}
                    </div>
                    <div>
                        {eachPost.post}
                    </div>
                    <img src={eachPost.userId.imageUrl} />
                    <div>
                        <p>Likes: {eachPost.likes}</p>
                    </div>
                </>
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

                <ShowPosts />

            </div>
        </div>
    );
}

export default Profile;