// 定义所有的action creater
let nextTodo = 0;
// 添加todo功能和显示todo状态决定了关于todos的state应该数组，数组中包含每个todo对象，todo对象中包括id text 完成情况 这三部分。
export const addTodo = (text)=>{
    return{
        type:'ADD_TODO',//必填
        id:nextTodo++,
        text
    }
}

//转换状态
export const toggleTodo = (id) =>{
    return{
        type:'TOGGLE_TODO',
        id
    }
}

// 显示todo状态
/* 
    三种状态
    SHOW_ALL
    SHOW_COMPLETED
    SHOW_ACTIVE
 */
export const setVisibility = (filter) => {
    return {
        type: 'SET_VISIBILITY',
        filter
    }
}