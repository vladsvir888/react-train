import React, { useState } from 'react';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MySelect from './components/UI/select/MySelect';
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'JavaScript is a hard language' },
    { id: 2, title: 'PHP', body: 'PHP is a bad language' },
    { id: 3, title: 'Java', body: 'Java is an interesting language' },
    { id: 4, title: 'Python', body: 'I dont know Python' }
  ]);

  const [selectedSort, setSelectedSort] = useState('');

  function createPost(newPost) {
    setPosts([...posts, newPost]);
  }

  function removePost(post) {
    // если id итерируемого поста в массиве постов равен id переданного поста, то тогда мы этот пост удаляем из массива
    setPosts(posts.filter(p => p.id !== post.id));
  }

  function sortPosts(sort) {
    setSelectedSort(sort); // обновим состояние

    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort]))); // здесь есть нюанс: функция sort не возвращает новый массив, а мутирует тот массив, к которому она была применена, а состояние напрямую изменять нельзя, поэтому мы развернем посты в новый массив и отсортируемый уже этот массив (также используем localeCompare, то есть сравниваем поле из объекта a с полем из объекта b)
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: '15px 0'}} />
      <div>
        <MySelect
          value={selectedSort}
          onChange={sortPosts} // выбранная опция
          defaultValue="Сортировка"
          options={[
            {value: 'title', name: 'По названию'},
            {value: 'body', name: 'По описанию'},
          ]}
        />
      </div>
      {posts.length // условная отрисовка: если посты есть, то мы их отрисовываем, иначе показываем заголовок, что посты не найдены
        ? <PostList remove={removePost} posts={posts} title="Список постов 1"/>
        : <h1 style={{textAlign: 'center'}}>Посты не найдены!</h1>
      }
    </div>
  );
}

export default App;
