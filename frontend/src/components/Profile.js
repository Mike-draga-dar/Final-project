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
                        {eachPost.userId.name}
                    </div>
                    <img src={eachPost.userId.imageUrl} />
                </div>
            )
        })
    }
    console.log(posts)
    let { user } = useContext(TheContext)
    return (
        <div>
            Profile My name is
            <div className="profileName"> Prop Driilling: {props.user?.name}</div>
            <div className="profileName"> Context: {user?.name}</div>
            <div className="MyPosts">
                <h4>Here is my Post?</h4>
                <ShowPosts />
            </div>
        </div>
    );
}
export default Profile;