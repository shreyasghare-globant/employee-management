import { database } from "../database/firebase.config";
import { createAction } from "../utils/utils";

export const clearEmployees = (payload = {}) => createAction('CLEAR_EMPLOYEES', payload);
export const addEmployee = (payload = {}) => createAction('ADD_EMPLOYEE', payload);
export const removeEmployees = (payload = {}) => createAction('REMOVE_EMPLOYEES', payload);
export const removeSelectedEmployees = (payload = {}) => createAction('REMOVE_SELECTED_EMPLOYEES', payload);
export const editEmployee = (payload = {}) => createAction('EDIT_EMPLOYEE', payload);
export const setEmployeesSelectedStatus = (payload = {}) => createAction('SET_EMPLOYEE_SELECTED_STATUS', payload);
export const setAllEmployeesSelectedStatus = (payload = {}) => createAction('SET_ALL_EMPLOYEE_SELECTED_STATUS', payload);
export const setEmployeesLoading= (payload = {}) => createAction('SET_EMPLOYEES_LOADING', payload);

// thunk.actions creators
export const startAddingEmployee =  (payload) => 
    (dispatch) => {

        return database.ref('employee').update({[payload.id] : payload})
            .then( () => dispatch(addEmployee(payload)))
            .catch(err => console.error(err))
    }

export const startDeletingEmployees = (payload) =>
    (dispatch) => {

        return payload.forEach(id => {
            database.ref(`employees/${id}`)
                    .remove()
                    .then( () => dispatch(removeEmployees([id])))
        });
    }

export const startEditingEmployee = (payload) =>
    (dispatch) => {

        return database.ref('employee')
            .update({[payload.id] : payload})
            .then( () => dispatch(editEmployee(payload)))
    }

export const startEmployeesSelectedStatus = (payload) =>
    (dispatch) => {

        return database.ref(`employees`)
                    .update({[payload.id] : payload})
                    .then( () => dispatch(setEmployeesSelectedStatus(payload)))
    }

export const initializeDatafromDatabase = () =>
    (dispatch) => {

        return database.ref('employee')
            .once('value', (snapshot) => {

                dispatch(clearEmployees());
                dispatch(setEmployeesLoading(true));
                const employeesList = snapshot.val();
                for(const emp in employeesList) {
                    dispatch(addEmployee(employeesList[emp]));
                }
                dispatch(setEmployeesLoading(false));
            })
    }
