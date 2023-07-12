import React from "react";
import { FilterContainer,FilterLable, FilterInput, IsLoading } from "./Filter.styled";
import { useDispatch, useSelector } from "react-redux";
import { setStatusFilter } from "redux/filterSlice";
import debounce from "lodash.debounce";
import {isLoadingSelector } from "redux/selectors";

function Filter() {
    const dispatch = useDispatch();
    const isLoading = useSelector(isLoadingSelector)
    const handleFilterChange = (event) => {
        dispatch(setStatusFilter(event.target.value))
    }

    return (<FilterContainer>
        {isLoading
            ? <IsLoading>Loading...</IsLoading>
            : <FilterLable htmlFor="findContacts">Find contacts by name</FilterLable>
        }
                <FilterInput type="text" id='findContacts' onChange={debounce(handleFilterChange, 1000)}/>
            </FilterContainer>
                )
}


export default Filter
