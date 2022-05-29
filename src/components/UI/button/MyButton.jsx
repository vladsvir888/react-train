import React from 'react';
import classes from './MyButton.module.css';

const MyButton = ({children, ...props}) => {
    return (
        // {classes.myBtn} - получаем стиль как свойство объекта
        // {...props} - таким образом, все пропсы, переданные в компонент myButton, будут улетать в эту кнопку (обработчики соыбтиц, disbled и т.д.)
        <button {...props} className={classes.myBtn}>
            {/* Чтобы передать дочерние элементы используется пропс children, в данном случае передается текст */}
            {children}
        </button>
    );
};

export default MyButton;