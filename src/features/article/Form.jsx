import React from 'react'
import Input from '../../shared/Input';
import useForm from '../../hooks/useForm';



const Form = (props) => {

    const { article } = props;

    const { form, handleChange, handleSubmit } = useForm(article);
    
    return (
        <div>
            <form autoComplete='off' onSubmit={handleSubmit}>
                {
                    Object.entries(form).map(([key, value]) => (
                        <Input
                            key={key}
                            value={value}
                            name={key}
                            onChange={handleChange}
                        />
                    ))
                }
                <button type='submit'>Enviar</button>
            </form>
        </div>
    )
}

export default Form