import { combineReducers } from "redux";

const employees =  []

const employee = (state = employees, action) => {

    switch (action.type) {
        case 'CLEAR_EMPLOYEES':
            return [];
        case 'ADD_EMPLOYEE':
            const newEmployee = {
                                    ...action.payload,
                                }
            return [...state, newEmployee];
        case 'REMOVE_EMPLOYEES':
            return state.filter(employee => !action.payload.includes(employee.id));
        case 'REMOVE_SELECTED_EMPLOYEES':
            return state.filter(employee => !employee.isChecked);;
        case 'EDIT_EMPLOYEE':
            return state.map(
                employee =>
                {
                    if(employee.id === action.payload.id) {
                        return {
                            ...employee,
                            ...action.payload,
                        };
                    } else {
                        return employee;
                    }
                })
        case 'SET_ALL_EMPLOYEE_SELECTED_STATUS':
            return state.map(
                    employee => {
                        return {
                            ...employee,
                            isChecked: action.payload,
                        }
                    });
        case 'SET_EMPLOYEE_SELECTED_STATUS':
            return state.map(
                    employee => {
                    if(employee.id === action.payload.id) {
                        return {
                            ...employee,
                            isChecked: action.payload.isChecked,
                        };
                    } else {
                        return employee;
                    }
                })
        default:
            return state
    }
}

const isLoading = true;

const isEmployeeLoading = (state = isLoading, action) => {

    switch(action.type) {
        case 'SET_EMPLOYEES_LOADING':
            return action.payload;
        default:
            return state;
    }
}

const rootReducer = combineReducers({employee, isEmployeeLoading})

export default rootReducer;
