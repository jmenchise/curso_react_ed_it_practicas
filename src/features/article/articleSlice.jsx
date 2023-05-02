import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    initialArticle: {
        id: '',
        description: '',
        stock: '',
        price: ''
    },
    articles: []
}



const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {
        createArticle: (state, { payload }) => {
            // state = [...state, payload ];
            state.articles.push(payload);
        },
        deleteArticle: (state, { payload }) => {
            state.articles = state.articles.filter(article => article.id !== payload);
        },
        loadAllArticles: (state, { payload }) => {
            state.articles = payload
        }
    }
});


export const {createArticle, deleteArticle, loadAllArticles } = articleSlice.actions


export const makeArticleSelect = (state) => state.article

export default articleSlice.reducer