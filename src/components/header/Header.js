import {
    faMinusCircle,
    faPlusCircle,
    faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';

import { useState } from "react";

import Button from "../UI/Button";
import AddEmployee from "../employee/employee-actions/AddEmployee";
import DeleteEmployee from "../employee/employee-actions/DeleteEmployee";
import Auth from '../../utils/Auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearEmployees, setEmployeesLoading } from '../../redux/Actions';

const Header = (props) => {

    const {
        selectedEmployoyees,
    } = props;

    const [addEmployeeModal, setAddEmployeeModal] = useState(false);
    const [deleteEmployeeModal, setDeleteEmployeeModal] = useState(false);
    const navigate = useNavigate();
    const dispatcher = useDispatch();

    const hasWriteAccess = Auth.hasWriteAccess();

    const addEmployeeHandler = () => {
        setAddEmployeeModal((prevState) => {
            return !prevState
        });
    }

    const deleteSelectedEmployees = () => {
        setDeleteEmployeeModal((prevState) => {
            return !prevState
        });
    }

    const logoutUser = () => {
        Auth.logout(()=>{
            dispatcher(clearEmployees())
            dispatcher(setEmployeesLoading(true))
            navigate('/')
        })
    }

    return (
        <>
            <div className="header">
                <h1>Manage Employees</h1>
                <div className="header-actions">
                    {
                        hasWriteAccess &&
                        <>
                        <Button 
                            icon = {faMinusCircle}
                            color = 'red'
                            text = 'Delete'
                            buttonClass = 'button-with-icon'
                            textClass = 'icon-button__text'
                            clickHandler = {deleteSelectedEmployees}
                        />
                        <Button 
                            icon = {faPlusCircle}
                            color = 'green'
                            text = 'Add New Employee'
                            buttonClass = 'button-with-icon'
                            textClass = 'icon-button__text'
                            clickHandler = {addEmployeeHandler}
                        />
                        </>
                    }
                    <Button 
                        icon = {faSignOutAlt}
                        color = '#04b3d6'
                        buttonClass = 'button-with-icon'
                        clickHandler = {logoutUser}
                    />
                </div>

                {deleteEmployeeModal &&
                    <DeleteEmployee 
                        toDelete={selectedEmployoyees}
                        closeModalHandler={deleteSelectedEmployees}
                    />
                }
                {addEmployeeModal &&
                    <AddEmployee 
                        closeModalHandler={addEmployeeHandler}
                    />
                }
            </div>
        </>
    )
}

export default Header;
