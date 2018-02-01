import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions/index';

let AddTodo = ({dispatch})=>{
    let input
    return (
        <div className="form">
            <form 
                onSubmit={e=>{
                e.preventDefault();
                /* 移除所有字符串首位的空格 */
                if(!input.value.trim())
                {
                    console.log('a');
                    return}
                else{
                    console.log('a');
                    dispatch(addTodo(input.value));
                    input.value='';
                }
            }}>
                {/* ref 的新写法，给ref一个函数，在页面渲染出input后，回返回一个该元素的对象给这个回掉函数 */}
                <input className="input" placeholder="你想做点什么呢？" ref={r => input=r}/>
                <button className="button" type="submit" >
                    添加任务
                </button>
            </form>
        </div>
    )
}
// 经过connect处理后变成一个能够自动接收store中state的react组件
AddTodo = connect()(AddTodo);

export default AddTodo;

