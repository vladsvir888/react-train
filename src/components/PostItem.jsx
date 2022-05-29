import React from 'react';
import MyButton from './UI/button/MyButton';

// const PostItem = (props) => {
//     return (
//         <div className="post">
//             <div className="post__content">
//                 <strong>{props.post.id}. {props.post.title}</strong>
//                 <div>{props.post.body}</div>
//             </div>
//             <div className="post__btns">
//                 <button>Удалить</button>
//             </div>
//         </div>
//     );
// };

const PostItem = ({number, remove, post}) => {
    return (
        <div className="post">
            <div className="post__content">
                <strong>{number}. {post.title}</strong>
                <div>{post.body}</div>
            </div>
            <div className="post__btns">
                <MyButton onClick={() => remove(post)}>Удалить</MyButton>
            </div>
        </div>
    );
};

export default PostItem;