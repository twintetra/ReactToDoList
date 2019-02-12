import React from 'react';
import ReactDom from 'react-dom';

import HeaderApp from './components/header-app';
import SearchPanel from './components/search-panel';
import ToDoList from './components/todo-list';


const App = () => {

    const todoData = [
        {label: 'Drink Coffee', important: false, id: '1'},
        {label: 'Make React App', important: true, id: '2'},
        {label: 'Have a lunch', important: false, id: '3'}
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