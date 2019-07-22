import React, {Component} from 'react';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';
import uuid from 'uuid/v4';
import './App.css';

class App extends Component{

  state = {
    itemlist: [
      {title : "Create Todo App Components", isCompleted: false,  id: uuid()},
      {title : "Implement Edit, Delete, Update, Insert", isCompleted: false,  id: uuid()},
      {title : "Make Cool UI", isCompleted: false,  id: uuid()},
      {title : "Push on GitHub", isCompleted: false,  id: uuid()},
      {title : "Learn more REACT", isCompleted: false,  id: uuid()}
    ]
  };

  
  addTodoItem = (itemTitle) =>{

    const newItem = {title : itemTitle, isCompleted: false,  id: uuid()}

    this.setState(state => ({      
      itemlist : [...state.itemlist,newItem]
    }));    
  }

  deleteTodoItem = (id) =>{
    this.setState( prevState => ({
      itemlist : prevState.itemlist.filter((item) =>  item.id !== id )
    }));
  }

  editTodoItem = (id, newTitle) =>{

    const editedArray = [...this.state.itemlist];

    editedArray.forEach( (element) => {
      if(element.id === id){
        element.title = newTitle;
      }
    });

    this.setState({
      itemlist: editedArray
    });
  }

  toggleCompleteTodoItem = (id) =>{
    const editedArray = [...this.state.itemlist];

    editedArray.forEach( (element) => {
      if(element.id === id){
        element.isCompleted = !element.isCompleted;
      }
    });

    this.setState({
      itemlist: editedArray
    });
  }

  render(){
    return(

      <div className="App App-TodoList">

        <h1>Todo List</h1>
        {
          this.state.itemlist.map( e => 
          <TodoItem
            key={e.id}
            id={e.id}
            title={e.title}
            isCompleted={e.isCompleted}
            deleteTodoItem={this.deleteTodoItem}
            editTodoItem={this.editTodoItem}
            toggleCompleteTodoItem={this.toggleCompleteTodoItem}/>
          )
        }
        
        <AddTodo  addTodoItem ={this.addTodoItem}/>

        <div className="App-Smalltext">
          <p>Created by Ashish Kumar</p>
        </div>

      </div>

    )
  }

}

export default App;
