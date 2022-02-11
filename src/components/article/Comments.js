import React from 'react';

function Comments(props) {
 
    const { comments }=props;
    return (
        <div>
            {comments.map((i, key) => {
                <div key={key}>
                    <h4>
                        {i.username}
                    </h4>
                    <p>
                        {i.text}  
                    </p>
                </div>
            })}
        </div>
    );
}

export default Comments;