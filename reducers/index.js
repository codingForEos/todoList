import todos from "./todos";
import visibilityFilter from "./visibilityFilter";
import {combineReducers} from "redux";
// 组合 reducers 也就是将两部分的state拼接到一起
const todoapp = combineReducers({
    todos,
    visibilityFilter
});

export default todoapp;

