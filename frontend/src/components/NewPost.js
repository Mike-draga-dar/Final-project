import React from 'react'
import ReactDOM from "react-dom";
import { useState } from 'react';
import axios from 'axios'
import actions from '../api';

function NewPost(props) {

    let [title, setTitle] = useState('')
    let [post, setPost] = useState('')


    const handleSubmit = async e => {
        e.preventDefault()
        let res = await actions.createNewPost({ title, post })
        props.history.push('/all-posts')
    }

    // Image Upload
    const uploadedImage = React.useRef(null);

    const handleImageUpload = e => {
      const [file] = e.target.files;
      if (file) {
        const reader = new FileReader();
        const {current} = uploadedImage;
        current.file = file;
        reader.onload = (e) => {
            current.src = e.target.result;
        }
        reader.readAsDataURL(file);
      }
    };
    

    return (
        <div>
            <label>New Post</label>
            <form onSubmit={handleSubmit}>
                <input onChange={e => setTitle(e.target.value)} type="text" placeholder="Title" /><br></br>
                <input onChange={e => setPost(e.target.value)} type="text" placeholder="Post" /><br></br>
                <input type="file" accept="image/*" multiple = "false" onChange={handleImageUpload} />
                <div style={{height: "150px", width: "150px", border: "2px dashed black"}}>
                    <img ref={uploadedImage} style={{width: "150px", height: "150px", position: "absolute" }} />
                </div>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default NewPost;