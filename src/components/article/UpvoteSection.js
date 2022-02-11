import React from 'react';
import { useParams } from 'react-router-dom';

function UpvoteSection(props) {
    const {name,upvotes,setarticleData} = props;
   
    async function fetchUpvotes() {
        const response = await fetch(`http://localhost:5000/api/article/${name}/upvotes`,{method:'post'});
        const body = await response.json();
        setarticleData(body);


    }
    // install emoji sense and click ctrl+i to come emoji
    return (
        <div>
          <button className ="like" onClick={fetchUpvotes}>👍</button>
          <h2>This article has {upvotes}</h2>

        </div>
    );
}

export default UpvoteSection;