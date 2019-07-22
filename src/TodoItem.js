import React, {Component} from 'react';
import './TodoItem.css'

export default class TodoItem extends Component{

    state = {
        title: this.props.title,
        isEditing: false
    }

    toggleEditing = () =>{
        const toggledState = !this.state.isEditing;
        this.setState( { isEditing: toggledState } )
    }

    handleTodoEdited = (e) =>{
        e.preventDefault();
        this.toggleEditing();
        
        this.props.editTodoItem(this.props.id, this.state.title);

    }

    handleChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render(){

        let todoItem;

        if(this.state.isEditing){
            todoItem = (
                <form onSubmit={this.handleTodoEdited} className="Todo-Edit-Form" >
                    <input type="text" name="title" defaultValue={this.props.title} onChange={this.handleChange}/>
                    <button>
                        <i className="fas fa-check"></i>
                    </button>
                </form>
            )
        }
        else{
            todoItem = (
                <div className="Todo">
                    <span
                        className={this.props.isCompleted ? "completed Todo-Item" : "Todo-Item"} 
                        onClick={() => this.props.toggleCompleteTodoItem(this.props.id)}>
                        {this.props.title}
                    </span>
                    <div className="Todo-Item">
                        <button onClick={this.toggleEditing} >
                            <i className="fas fa-pen"></i>
                        </button>
                        <button onClick={() => this.props.deleteTodoItem(this.props.id) } >
                            <i className="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            ) 
        }

        return(

            <div>
               
                {todoItem}
                
            </div>

        )
    }

}
