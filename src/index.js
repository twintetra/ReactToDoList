import React from 'react';
import ReactDom from 'react-dom';

import HeaderApp from './components/header-app';
import SearchPanel from './components/search-panel';
import ToDoList from './components/todo-list';


const App = () => {

    const todoData = [
        {label: 'Drink Coffee', important: false},
        {label: 'Make React App', important: true},
        {label: 'Have a lunch', important: false}
    ];


    return (
        <div>
            <HeaderApp/>
            <SearchPanel/>
            <ToDoList todos={todoData}/>
        </div>
    )
};


ReactDom.render(<App/>, document.getElementById('root'));