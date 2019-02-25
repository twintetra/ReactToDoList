import React, {Component} from 'react';



import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

import './app.css';
import ItemAddForm from "../item-add-form";

export default class App extends Component {

    constructor() {
        super();

        this.maxId = 100;

        this.state = {
            todoData: [
                { label: 'Drink Coffee', important: false, id: 1 },
                { label: 'Make Awesome App', important: true, id: 2 },
                { label: 'Have a lunch', important: false, id: 3 }
            ]
        };

        this.onDeleteItem = (id) => {

            this.setState(({todoData}) => {

                const idx = todoData.findIndex((el) =>  el.id === id);
                const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];

                return {
                    todoData: newArray
                }
            })

        };

        this.addItem = (text) => {

            const newItem = {
                label: text,
                important: false,
                id: this.maxId++
            };

            this.setState(({todoData}) => {
                const newArray = [ ...todoData, newItem];

                return {
                    todoData: newArray
                }
            });

            console.log('say', text);
        };

    }

    render() {
        return (
            <div className="todo-app">
                <AppHeader toDo={1} done={3} />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>

                <TodoList
                    todos={this.state.todoData}
                    onDeleted={this.onDeleteItem}
                />
                <ItemAddForm addItem={this.addItem}/>
            </div>
        )
    }

}

