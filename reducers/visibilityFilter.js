// 显示代办列表的这部分state,只有一个常量，用于显示此时底部按钮的状态

const visibilityFilter = (state = 'SHOW_ALL',action)=>{
    switch (action.type) {
        case 'SET_VISIBILITY':{
            let filter = action.filter
            console.log(filter);
            return filter;
        }
        default:
            return state;
    }
}

export default visibilityFilter;