// 小狗狗
import React from 'react';
import {render} from 'react-dom';
import { Provider} from 'react-redux';
import {createStore } from 'redux';


// 引入最终用于处理所有action的reducers
import todoApp from "./reducers/index";
import App from "./components/App";

//创建store 
const store = createStore(todoApp);

render(
    <Provider store={store}>
            <App />
    </Provider>,
    document.getElementById('todoapp')
);