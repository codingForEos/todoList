import React from 'react';
import {connect} from 'react-redux';
import {setVisibility} from "../actions/index";

const Top = ({filter, onFilterClick})=>(
    <ul className="filterButton">
        <li style={{ color: filter =='SHOW_ALL' ? '#f01414' : '#4d555d' }}
            onClick={() => { onFilterClick('SHOW_ALL')}}>
        所有事项
        </li>
        <li style={{ color: filter == 'SHOW_COMPLETED' ? '#f01414' : '#4d555d' }}
            onClick={() => onFilterClick('SHOW_COMPLETED')}>
        已完成事项
        </li>
        <li style={{ color: filter == 'SHOW_ACTIVE' ? '#f01414' : '#4d555d' }}
            onClick={() => onFilterClick('SHOW_ACTIVE')}>
        待办事项
        </li>
    </ul>
)

const mapStateToProps = (state) =>{
    return { filter: state.visibilityFilter}
}

const mapDispatchToProps = (dispatch) =>{
    return {
        onFilterClick:(filter)=>{
            dispatch(setVisibility(filter))
        }
    }
}

const FilterTop = connect(
    mapStateToProps,
    mapDispatchToProps
)(Top);

export default FilterTop;