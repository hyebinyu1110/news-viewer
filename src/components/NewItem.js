
import styled from 'styled-components';


const NewsItemBlock = styled.div`
display: flex;
.thumbnail{
    margin-right: 1rem;
<<<<<<< HEAD:src/components/NewsItem.js
        img{
            display: block;
            width: 160px;
            height: 100px;
            object-fit: cover;
=======
    a{
        margin: 0;
        img{
           display: block;
           width: 240px;
           height: 100px;
           object-fit: cover;
        }
>>>>>>> 6f7adca3136c8b57c7394737cd5d00093273adf6:src/components/NewItem.js
    }
}

.contents{
<<<<<<< HEAD:src/components/NewsItem.js
h2{
    margin: 0;
    a{
        color: black;
=======
    h2{
margin: 0;
a{
color: black;
}
    }
    p{
        margin: 0;
        line-height: 1.5;
        margin-top: 0.5rem;
        white-space: normal;
>>>>>>> 6f7adca3136c8b57c7394737cd5d00093273adf6:src/components/NewItem.js
    }
}
p{
    margin: 0;
    line-height: 1.5;
    margin-top: 0.5rem;
    white-space: normal;
}
}

& + &{
    margin-top: 3rem;
}
`


const NewsItem = ({ article }) => {
    const { title, description, url, urlToImage } = article;

    return (
        <NewsItemBlock>
            {
                urlToImage && (
                    <div className="thumbnail">
                        <a href={url} target="_blank" rel="noopener noreferrer">
                            <img src={urlToImage} alt="thumbnail" />
                        </a>
                    </div>
                )
            }
<<<<<<< HEAD:src/components/NewsItem.js

=======
>>>>>>> 6f7adca3136c8b57c7394737cd5d00093273adf6:src/components/NewItem.js
            <div className="contents">
                <h2>
                    <a href={url} target="_blank" rel=" noopener noreferrer">
                        {title}
                    </a>
                </h2>
                <p>{description}</p>


            </div>
<<<<<<< HEAD:src/components/NewsItem.js
        </NewsItemBlock>
    )
}

=======


        </NewsItemBlock>

    )

}

>>>>>>> 6f7adca3136c8b57c7394737cd5d00093273adf6:src/components/NewItem.js
export default NewsItem;