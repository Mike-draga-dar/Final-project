

import { useContext, useState, useEffect } from 'react';
import TheContext from '../TheContext';
import actions from '../api';

function Profile(props) {
<<<<<<< HEAD





    const [posts, setPosts] = useState([])
    
=======
    let { user } = useContext(TheContext)
    const [myPosts, setMyPosts] = useState([])
>>>>>>> 607f93ceddf22d95a0afeea560b82137b8fd0404

    useEffect(async () => {
        console.log('fire')
        let res = await actions.getMyPosts()
        console.log(res)
        setMyPosts(res.data)
    }, [])

<<<<<<< HEAD

    const ShowPosts = () => {
        return posts.map(eachPost => {
=======
    const ShowPosts = () => {
        return myPosts.map(eachPost => {
>>>>>>> 607f93ceddf22d95a0afeea560b82137b8fd0404
            return (
                <>
                    <div>
                        {eachPost.title}
                    </div>
                    <div>
                        {eachPost.post}
                    </div>
                    <img src={eachPost.userId.imageUrl} />
                </>
            )
        })
    }

<<<<<<< HEAD

    let { user } = useContext(TheContext)
=======
>>>>>>> 607f93ceddf22d95a0afeea560b82137b8fd0404
    return (
        <div>
            Profile My name is
            <div className="profileName"> Prop Driilling: {props.user?.name}</div>


            <div className="profileName"> Context: {user?.name}</div>
<<<<<<< HEAD

            <div className="MyPosts">
                <h4>Here is my Post</h4>

=======
            <div className="profileName">
>>>>>>> 607f93ceddf22d95a0afeea560b82137b8fd0404
                <ShowPosts />

            </div>
        </div>
    );
}

export default Profile;