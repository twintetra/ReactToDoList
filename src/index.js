import React from 'react';
import ReactDom from 'react-dom';

import HeaderApp from './components/header-app';
import SearchPanel from './components/search-panel';
import ToDoList from './components/todo-list';


const App = () => {
    return (
        <div>
            <HeaderApp/>
            <SearchPanel/>
            <ToDoList/>
        </div>
    )
};


ReactDom.render(<App/>, document.getElementById('root'));