import React, { useState } from 'react';
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';

const PostForm = ({create}) => {
    // чтобы не создавать для каждого инпута отдельное состояние, мы можем использовать в качестве значения не строку, а объект и для каждого инпута использовать какое-то поле этого объекта
    const [post, setPost] = useState({title: '', body: ''});

    function addNewPost(e) {
        e.preventDefault();
    
        const newPost = {
            ...post,
            id: Date.now(),
        }

        create(newPost);
    
        setPost({title: '', body: ''}); // для обнуления полей форм
      }

    return (
        <form>
            <MyInput 
                value={post.title} // это называется двухсторонее связывание: мы связываем value инпута с состоянием post.title
                onChange={e => setPost({...post, title: e.target.value})} // отслеживаем, как пользователь что-то в этот инпут вводит и обновляем состояние (разворачиваем все поля, которые там есть, но перезатираем нужное для нас поле конкретно в этом инпуте)
                type="text" 
                placeholder="Название поста"
            />
            <MyInput
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})} 
                type="text" 
                placeholder="Описание поста"
            />
            {/* по клику на кнопку будем создавать новый пост */}
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
    );
};

export default PostForm;