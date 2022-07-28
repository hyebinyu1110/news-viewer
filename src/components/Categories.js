import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


const categories = [
    {
        name: "all",
        text: "전체보기",
    },
    {
        name: "business",
        text: "비즈니스",
    },
    {
        name: "entertainment",
        text: "엔터테인먼트",
    },
    {
        name: "health",
        text: "건강",
    },
    {
        name: "sports",
        text: "스포츠",
    },
    {
        name: "technology",
        text: "테크놀로지",
    }
]

const CategoriesBlock = styled.div`
display: flex;
padding: 1rem;
margin: 0 auto;
width: 760px;
@media screen and (max-width: 768px){
    width: 100%;
    overflow-x: auto;    
}
`;

const Category = styled(NavLink)`
font-size: 1.125rem;
cursor: pointer;
white-space: pre;
text-decoration: none;
color: inherit;
padding-bottom: 0.025rem;


&:hover{
color: red;
}



&.active{
font-weight: 600;
border-bottom: 2px solid hotpink;
color: hotpink;

&:hover{
color: orange;
}
};

& +& {
    margin-left: 1rem;
}
`;


const Categories = () => {

    return (
        <CategoriesBlock>
            {
                categories.map(c =>
                    <Category
                        key={c.name}
                        className={({ isActive }) => isActive ? 'active' : undefined}
                        to={c.name === 'all' ? '/' : `/${c.name}`}
                    >
                        {c.text}
                    </Category>
                )
            }

        </CategoriesBlock>
    )
}

export default Categories;