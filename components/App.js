import React from "react";
import AddTodo from "../containers/AddTodo";
import VisibilityFilter from "../containers/VisibilityFilter";
import FilterTop from "../containers/FilterTop";
import './app.css';
// react组件的函数式写法，注意此箭头函数的函数体是用的小括号,意思为直接返回小括号内的全部内容。
const App = ()=>(
    <div className='wrap'>
       <div className='inner'>
            <AddTodo />
            <FilterTop />
           <VisibilityFilter />
       </div> 
    </div>  
)

export default App;
