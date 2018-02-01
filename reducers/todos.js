// 处理待办事项的部分rducer 它生成的state是一个数组，这个数组里包括每个todo的数据结构
/*
样式：[
    {id:1,
    text:angthing,
    completed:falsed
    },
    {id:2
    ....},
    ....
]
 */
const todos = (state = [],action)=>{
    switch (action.type) {
        case 'ADD_TODO':{
            let arry = [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false //刚传入的代办事项未完成
                }
            ]
            console.log(arry);
            return arry;
        }
        case 'TOGGLE_TODO':
        // t代表一个具体todo的数据结构。
            return state.map(t =>{
                if(t.id !== action.id){
                    return t;
                }
                else{
                    return Object.assign({},t,{
                        completed:!t.completed
                    })
                }
            })
        default:
            return state;
    }
}

export default todos;