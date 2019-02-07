import React from 'react';
import ReactDom from 'react-dom';


const SearchPanel = () => {
    return <input placeholder='search'/>;
};

const HeaderApp = () => {
    return <h1>ToDo list</h1>;
};


const ToDoList = () => {
    return (
        <ul>
            <li>Learn React</li>
            <li>Build app</li>
        </ul>
    );
};

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