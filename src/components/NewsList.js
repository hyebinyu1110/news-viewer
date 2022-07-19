import styled from 'styled-components';
import NewsItem from './NewsItem';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { catchClause } from '../../../../AppData/Local/Microsoft/TypeScript/4.7/node_modules/@babel/types/lib/index';

const NewsListBlock = styled.div`
box-sizing: border-box;
padding-bottom: 3rem;
width: 768px;
margin: 0 auto;
margin-top: 2rem;
@media screen and (max-width: 768px){
    width: 100%;
    padding-left: 1rem; 
    padding-right: 1rem;
}
`

const sampleArticle = {
    title: '제목',
    description: '내용',
    url: "https://google.com",
    urlToImage: 'https://via.placeholder.com/160',
}

const NewsList = () => {
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // async를 사용하는 함수 따로 선언
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get("https://newsapi.org/v2/top-headlines?country=kr&apiKey=8c18e150c391487a94e2dba3b0d657eb"
                );
                setArticles(response.data.articles);

            } catch (e) {
                console.log(e);
            }
            setLoading(false);

        }
        fetchData();

    }, [])

    // 대기중일때,
    if (loading) {
        return <NewsListBlock>대기 중...</NewsListBlock>
    }

    //아직 articles 값이  설정되지 않았을 때
    if (!articles) {
        return null;
    }

    return (
        <NewsListBlock>
            {
                articles.map(article => (
                    <NewsItem key={article.url} article={article} />
                ))
            }

        </NewsListBlock>
    )
}

export default NewsList;