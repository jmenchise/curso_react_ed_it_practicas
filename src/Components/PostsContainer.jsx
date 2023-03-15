import React, { useEffect, useState } from 'react'
import Post from '../shared/Post';

const PostsContainer = () => {

    const [postList, setPostList] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(r => r.json())
        .then(posts => setPostList(posts))
    },[])
    

    
    return (
        <div>
            <h1>Listado de Posteos</h1>
            {
                postList?.map(({title, body, id}) => 
                    <Post
                        key={id}
                        title={title}
                        body={body}
                    />
                )
            }
        </div>
    )
}

export default PostsContainer