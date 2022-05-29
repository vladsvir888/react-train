import React from 'react';
import PostItem from './PostItem';

const PostList = ({posts, title, remove}) => {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>
            {posts.map((post, index) =>
                // для каждого поста в массиве постов мы отрисовываем PostItem и как пропс передаем туда объект
                <PostItem remove={remove} number={index + 1} post={post} key={post.id}/>  
            )}
        </div>
    );
};

export default PostList;