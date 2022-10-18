import { React, useState } from "react";
import { Link, useLocation, Navigate   } from 'react-router-dom';

function Post(props) {
    const location  = useLocation ();
    const  {id} = location.state;

    let post = props.data.find(obj => {
        return obj.id == id;
    });
    let postContent = post['content'];
    let postComment = post['comment'];

    const [textInput, setTextInput] = useState("");

    const addComment = (e) => {
        e.preventDefault();
        const tempData = [...props.data];
        tempData[id - 1]['comment'].push(textInput);
        props.setData(tempData)
        setTextInput("");
        e.target.value = "";
        alert("Add New Comment Successfully");
    }

    return (
        <div>
            <Link to="/" ><button>Home</button></Link>
            <Link to={`/post/update`} state={{ id: `${id}`, updateTitle: `Update Post ${id}`}}><button>Edit This Post</button></Link>
            <Link to={"/post/delete"} state={{ id: `${id}`}}><button>Delete This Post</button></Link>
            <h1>Post {id}</h1>
            <p>{postContent}</p><br />
            <form onSubmit={addComment}>
                <label for="comment">Comment</label><br />
                <textarea id="comment" rows="10" cols="75" name="comment" form="newComment" placeholder="Enter Comment Here..." onChange={(e) => setTextInput(e.target.value)} ></textarea><br />
                <input type="submit" value="Comment" />
            </form>
            {
                postComment.map((item, index) => {
                    return (
                        <li key={index}>{item}</li>
                    )
                })
            }
        </div>
    )
}

export default Post;