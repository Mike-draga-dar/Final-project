import { useContext, useState, useEffect } from 'react';
import TheContext from '../TheContext';
import axios from 'axios'
import actions from '../api'

function Profile(props) {

    let { user } = useContext(TheContext)
    const [myPosts, setMyPosts] = useState([])

    useEffect(async () => {
        let res = await actions.getMyPosts()
        setMyPosts(res.data)
    }, [])


    const ShowPosts = () => {
        return myPosts.map((eachPost) => {
            return (
                <div>
                    <div>
                        {eachPost.title}
                    </div>
                    <div>
                        {eachPost.post}
                    </div>
                    <img src="{eachPost.userId.imageUrl}" alt="" />

                </div>
            )
        })
    }




    return (
        <div>
            Profile My name is
            <div className="profileName"> Prop Driilling: {props.user?.name}</div>


            <div className="profileName"> Context: {user?.name}</div>

            <div className="MyPosts">


                <ShowPosts />

            </div>
        </div>
    );
}

export default Profile;