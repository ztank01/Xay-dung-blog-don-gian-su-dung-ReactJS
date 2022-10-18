import { React, useState } from "react";
import { Link, useLocation, Navigate } from 'react-router-dom';

function NewPost(props) {

    const [textInput, setTextInput] = useState("");

    const addPost = (e) => {
        e.preventDefault();
        const tempData = [...props.data];
        let notify;
        if (props.title != null) {
            var newPostId;
            if (tempData.length != 0) {
                newPostId = Number(tempData[tempData.length - 1]['id']) + 1;
            }
            else {
                newPostId = Number(1);
            }
            const post = { id: `${newPostId}`, content: textInput, comment: [] };
            tempData.push(JSON.parse(JSON.stringify(post)));
            notify = "Add New Post Successfully";
        }
        else {
            const tempData = [...props.data];
            const { id } = location.state;
            tempData[id - 1]['content'] = textInput;
            props.setData(tempData)
            setTextInput("");
            e.target.value = "";
            notify = "Add Update Post Successfully";
        }
        props.setData(tempData);

        alert(notify);
        setTextInput("");
        e.target.value = "";
        return (<Navigate to='/' />)
    }
    let title;
    let content;
    const location = useLocation();
    if (props.title != null) {
        title = props.title;
        content = "Enter Post Content Here..."
    }
    else {

        const { updateTitle } = location.state;
        title = updateTitle
        const { id } = location.state;
        const post = props.data.find(obj => {
            return obj.id == id;
        });
        content = post['content'];
    }

    return (
        <div>
            <h1>{title}</h1>
            <Link to="/" class="button"><button>Home</button></Link>
            <form onSubmit={addPost}>
                <label for="content">Post Content</label><br />
                <textarea id="content" rows="10" cols="75" name="content" form="newPost" placeholder={content} onChange={(e) => setTextInput(e.target.value)}></textarea><br />
                <input type="submit" value="Post" />
            </form>
        </div>
    )
}

export default NewPost;