import React from 'react';
import {Link} from 'react-router-dom'
import Header from '../header/Header';

import articleContent from './SampleArticleDb';

function ArticleList(props) {
    return (
        <div>
           
            <h1 id = "articles">Articles</h1>
                    {/* <Link to = "/article">
                        Nodejs Essential
                    </Link>
                <br />
                <Link to = "/article">
                        Reactjs Intro
                    </Link> */}

                {articleContent.map((i, key)=> (
                    <Link key = {key} to = {`/article/${i.name}`}>
                    <h3>{i.title}</h3>
                    </Link>
                ))}



            
        </div>
    );
}

export default ArticleList;