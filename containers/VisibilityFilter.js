import React from 'react';
import {connect} from 'react-redux';
import { toggleTodo } from "../actions/index";
import TodoList from "../components/TodoList";

// 根据state中的值判断此时todoList需要的数据是什么
const mapStateToProps = (state) => {
    switch (state.visibilityFilter) {
        case "SHOW_ALL":
            return {todos:state.todos}
        case "SHOW_COMPLETED":
            return {todos:state.todos.filter(t=>t.completed)}
        case "SHOW_ACTIVE":
            return {todos:state.todos.filter(t=>!t.completed)}
        default:
            return {todos:state.todos}
    }
}
// 绑定dispath方法和对应的action creater到组件上
const mapDispatchToProps = (dispatch) =>{
    return{
        onTodoClick:(id)=>{
            dispatch(toggleTodo(id));
        }
    }
}
const VisibilityFilter = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibilityFilter;