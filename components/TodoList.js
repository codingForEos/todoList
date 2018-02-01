import React from "react";

const TodoList = ({ todos, onTodoClick})=>{
    return(
        <ul className="todoList">
            {
                todos.map(todo=>(
                    <li key={todo.id} 
                        onClick={() => { onTodoClick(todo.id)}}
                        style={{background:todo.completed ? "#CCC" : "#FFF" }}
                        style={{'textDecorationLine': todo.completed ? 'line-through' : 'none'}}
                        
                    >
                        {todo.text}
                    </li>
                ))
            }
        </ul>
    )
}

export default TodoList;