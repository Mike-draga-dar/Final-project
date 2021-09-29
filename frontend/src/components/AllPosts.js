import { useEffect, useState } from 'react';
import actions from '../api'

function AllPosts(props) {
    const [posts, setPosts] = useState([])

    useEffect(async () => {
        let res = await actions.getAllPosts()
        setPosts(res.data.reverse())
    }, [])

    const ShowPosts = () => {
        return posts.map((eachPost) => {
            return (
                <div key={eachPost._id}>
                    <h2> {eachPost.userId.name}</h2>
                    <h3>{eachPost.title}</h3>
                    <p>{eachPost.post}</p>
                    <hr></hr>
                </div>
            )
        })
    }
        console.log(posts)
    return (
        <div className="profileName">
            All Posts
            <ShowPosts />
        </div>
    );
}

export default AllPosts;