import React, { useState } from 'react';

function AddComments(props) {
    const {name} = props;
    //storing comments
    const [commentValues, setCommentValues] = useState({username: "",comment:""});
    function handleChange(event) {
        console.log(event.target);
        const {name,value}=event.target;
        setCommentValues({...commentValues,[name]:value});
    }

    async function fetchComments() {
        const username = commentValues.username;
        const text = commentValues.comment;

        const response = await fetch(`http://localhost:5000/api/article/${name}/comments`,{
            method:'post',
            body: JSON.Stringify({username, text}),
            headers: {
                'Content-Type':'application/json'

            }
        })
    }
    return (
        <div>
            <div className = "add-comment">
               Name <input type = "text" name="username" value={commentValues.username} onChange = {handleChange}>

                </input>
                <br/>

                <textarea rows='4' color='4' name = 'comment' value={commentValues.comment} onChange={handleChange}>

                </textarea>
                <br/>
                <button onClick={fetchComments}>Submit</button>
            </div>
        </div>
    );
}

export default AddComments;