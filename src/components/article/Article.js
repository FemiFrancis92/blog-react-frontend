import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import './Article.css';
import articleContent from './SampleArticleDb';
import Error from '../error/Error';
import Comments from './Comments';
import UpvoteSection from './UpvoteSection';
import AddComments from './AddComments';


function Article(props) {
    const { name } = useParams();
    console.log(name);
    // Temporary storage of DB data
    const [articleData, setarticleData] = useState({ upvotes: 0, comments: [] });

    const article = articleContent.find(i=>i.name===name);
    console.log(article);
//backend api connection fetch
    useEffect(()=>{
        fetchAPI();
    },[name]);





// Backend connection

 async function fetchAPI(){
    const response = await fetch(`http://localhost:5000/api/article/${name}`);
    const body = await response.json();
    console.log(body);
    setarticleData(body);
}
// If article not exist in DB
if(!article) {
    return <h1> <Error /></h1>
}

    return (
        <div>
            <h1 className='article'>
                This is an {article.title} article
            </h1>
            <UpvoteSection name = {name} setarticleData = {setarticleData} upvotes = {articleData.upvotes} />
        <p>
                {article.description}
                <Comments comments = {articleData.comments} />
                <AddComments name={name}/>
            </p>
        </div>
    );
}

export default Article;