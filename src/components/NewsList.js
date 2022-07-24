import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
<<<<<<< HEAD
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

const sampleArticle = {
    title: "제목",
    description: "내용",
    url: "https://google.com",
    urlToImage: "https://via.placeholder.com/160",
};

const NewsList = () =>{
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect( ()=>{
     
        const callData = async () =>{
            setLoading(true);
            try{
                const response = await axios.get(
                    "https://newsapi.org/v2/top-headlines?country=kr&apiKey=8c18e150c391487a94e2dba3b0d657eb"
                    );
                    setArticles(response.data.articles);
            }catch(e){
                console.log(e);
            }
            setLoading(false);
        };
        callData();        
    }, []);

    if(loading){
        <NewsListBlock>대기 중...</NewsListBlock>
    }

    if(!articles){
        return null;
    }

    return(
        <NewsListBlock>
            {
                articles.map(article =>
                    <NewsItem key={article.url} article={article} />
                    )
            }
            </NewsListBlock>
=======
import NewsItem from './components/NewsItem';

const NewsListBlock = styled.div`

`

const sampleArticle = {
    title: "제목",
    descirption: "내용",
    url: "www.google.com",
    urlToImage: 'https://via.placeholder.com/160'
}

const NewsList = () => {

    return (
        <NewsListBlock>
            <NewsItem article={sampleArticle} />
            <NewsItem article={sampleArticle} />
            <NewsItem article={sampleArticle} />
            <NewsItem article={sampleArticle} />
            <NewsItem article={sampleArticle} />
        </NewsListBlock>
>>>>>>> 6f7adca3136c8b57c7394737cd5d00093273adf6
    )

}

export default NewsList;