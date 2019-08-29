import React from 'react';
import NewsListItem from './news_list_item';

const NewsList = (props) => {
    return(
        <>
        {
            props.news.map((item, index) => (
                <NewsListItem item={item} key={index}/>
                
            ))
        }
        </>
    )
}

export default NewsList;