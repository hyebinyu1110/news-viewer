import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import NewsItem from './NewsItem';

const NewsListBlock = styled.div`
box-sizing: border-box;
padding-bottom: 3rem;
width: 768px;
margin: 0 auto;
margin-top: 2rem;
@media screen and (max-width: 768px ){
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
}
`;


const NewsList = ({ category }) => {
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        const callData = async () => {
            setLoading(true);

            try {
                const query = category === 'all' ? '' : `&category=${category}`;
                const response = await axios.get(
                    `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=8c18e150c391487a94e2dba3b0d657eb`
                );
                setArticles(response.data.articles);
            } catch (e) {
                console.log(e);
            }
            setLoading(false);
        };
        callData();
    }, [category]);

    if (loading) {
        <NewsListBlock>대기 중...</NewsListBlock>
    }

    if (!articles) {
        return null;
    }

    return (
        <NewsListBlock>
            {
                articles.map(article =>
                    <NewsItem key={article.url} article={article} />
                )
            }
        </NewsListBlock>

    )
}

export default NewsList;