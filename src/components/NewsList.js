import styled from 'styled-components';
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
    )

}

export default NewsList;