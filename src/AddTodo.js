import React, {Component} from 'react';
import './AddTodo.css';

export default class AddTodo extends Component{
    state = {
        title : ""
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.addTodoItem(this.state.title);
        this.setState({title:""})

    }

    render(){

        return(
            <div className="AddTodo">
                <h3>Add New Todo</h3>
                <form onSubmit={this.handleSubmit} className="AddTodo-Form">
                    <input type="text" name="title" onChange={this.handleChange} value={this.state.title}/>
                    <button>
                        <i className="fas fa-arrow-right"></i>
                    </button>
                </form>
            </div>
        )

    }

}