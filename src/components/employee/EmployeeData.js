import { useState } from 'react';

import {
    faPencil,
    faTrash,
} from '@fortawesome/free-solid-svg-icons';

import Auth from '../../utils/Auth';
import DeleteEmployee from './employee-actions/DeleteEmployee';
import EditEmployee from './employee-actions/EditEmployee';
import Button from '../UI/Button';
import Checkbox from '../UI/CheckBox';

const EmployeeData = (props) => {

    const {
        name,
        email,
        phone,
        address,
        isChecked,
    } = props.employee;

    const [editEmployeeModal, setEditEmployeeModal] = useState(false);
    const [deleteEmployeeModal, setDeleteEmployeeModal] = useState(false);

    const editEmployeeHandler = () => {
        setEditEmployeeModal((prevState) => {
            return !prevState
        });
    }

    const deleteSelectedEmployees = () => {
        setDeleteEmployeeModal((prevState) => {
            return !prevState
        });
    }

    const isCheckedHandler = (checked) => {
        props.setCheckedStatus(checked, props.employee);
    }

    const hasWriteAccess = Auth.hasWriteAccess();

    const actions = 
        <>
            <Button
                icon = {faPencil}
                iconColor = {'#f8dc0b'}
                buttonClass = {'transparent_background'}
                clickHandler = {editEmployeeHandler}
            />
            <Button
                icon = {faTrash}
                iconColor = {'red'}
                buttonClass = {'transparent_background'}
                clickHandler = {deleteSelectedEmployees}
            />

            {
                editEmployeeModal &&
                <EditEmployee
                    data={props.employee}
                    closeModalHandler={editEmployeeHandler}
                />
            }

            {
                deleteEmployeeModal && 
                <DeleteEmployee
                    closeModalHandler={deleteSelectedEmployees}
                    toDelete={[props.employee]}
                />
            }
        </>

    return (
        <>
            <tr>
                <td> 
                    <Checkbox
                        checkedStatus={isChecked}
                        setCheckedStatus={(status) => isCheckedHandler(status)}
                    />
                </td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{address}</td>
                <td>{phone}</td>
                <td>
                    {hasWriteAccess && actions}
                </td>
            </tr>
        </>
    )
}

export default EmployeeData;
