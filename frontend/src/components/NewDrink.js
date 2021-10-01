import React from 'react'
import ReactDOM from "react-dom";
import { useState } from 'react';
import axios from 'axios'
import actions from '../api';

function NewPost(props) {

    let [title, setTitle] = useState('')
    let [instructions, setInstructions] = useState('')
    let [post, setPost] = useState('')
    let [image, setImage] = useState('')

    const handleSubmit = async e => {
        e.preventDefault()
        let res = await actions.createNewPost({ title, post, instructions, image })
        props.history.push('/all-drinks')
    }

    // Image Upload
    const uploadedImage = React.useRef(null);

    const handleImageUpload = async e => {
      const [file] = e.target.files;
      if (file) {
        const reader = new FileReader();
        const {current} = uploadedImage;
        current.file = file;
        reader.onload = (e) => {
            current.src = e.target.result;
        }
        reader.readAsDataURL(file);
        const formData = new FormData()
        formData.append("file", file)
        formData.append("upload_preset", "rjpjmc9k")
        let res = await axios.post('https://iron-cors-anywhere.herokuapp.com/https://api.cloudinary.com/v1_1/tresamigos/upload', formData);
        setImage(res.data.secure_url)
      }
    };
    

    return (
        <div className="container">
            <div className="red-header"><p>New Drink</p></div>
            <br></br>
            <form onSubmit={handleSubmit}>
                <div className="new-drink-title">Drink Name</div><br></br>
                <input onChange={e => setTitle(e.target.value)} type="text" placeholder="Drink Name" class="input-width"/><br></br>
                <br></br>
                <div className="new-drink-title">Drink Ingredients</div><br></br>
                <input onChange={e => setPost(e.target.value)} type="text" placeholder="Ingredients" class="input-width" /><br></br>
                <br></br>
                <div className="new-drink-title">Drink Instructions</div><br></br>
                <input onChange={e => setInstructions(e.target.value)} type="text" placeholder="Instructions" class="input-width" /><br></br>
                <br></br>
                <div className="new-drink-title">Drink Image</div><br></br>
                <input type="file" accept="image/*" multiple = "false" onChange={handleImageUpload} className="image-button" />
                <div className="upload-image">
                    <img ref={uploadedImage} />
                </div>
                <button className="submit-button">Submit Drink</button><br></br>
                <br></br>
                <br></br>
            </form>
        </div>
    );
}

export default NewPost;