import React from 'react'
import Form from './Form'
import { useSelector } from 'react-redux'
import { makeArticleSelect } from './articleSlice'


const Article = () => {

    const { initialArticle } = useSelector(makeArticleSelect);
    console.log('initialArticle:', initialArticle)
    
    return (
        <div>
            <h1>Agregar Producto</h1>
            <Form article={initialArticle}/>
        </div>
    )
}

export default Article