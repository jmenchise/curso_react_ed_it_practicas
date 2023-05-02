import  { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createArticle } from '../features/article/articleSlice';

const useForm = (initialState) => {

    const [form, setForm] = useState(initialState);
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(createArticle(form));
        console.log('form:', form);
        setForm(initialState);
    };

    const handleChange = e => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    }


    return {
        form,
        handleSubmit,
        handleChange
    }
}

export default useForm