import { useState } from "react";
import { useDispatch } from "react-redux";

import { startEditingEmployee } from "../../../redux/Actions";
import EmployeeForm from "../EmployeeForm";
import Modal from "../../UI/Modal";
import { noValuesAreEmpty } from "../../../utils/utils";

const EditEmployee = (props) => {

    const {
        closeModalHandler,
        data,
    } = props;

    const dispatcher = useDispatch();

    const [employeeFormValues, setEmployeeFormValues] = useState({...data});
    const [hasErrors, setHasErrors] = useState (true);
    const editEmployeeHandler = () => {
        if (
            !hasErrors &&
            noValuesAreEmpty(employeeFormValues)
        ) {
            dispatcher(startEditingEmployee(employeeFormValues))
            closeModalHandler();
        }
    }

    const modalBody = 
    <EmployeeForm
        values = {employeeFormValues} 
        changeHandler={setEmployeeFormValues}
        setModalError={(val) => setHasErrors(val)}
    />

    return (
        <>
            <Modal
                title="Edit Employee"
                closeModal={closeModalHandler}
                actionBtnText={'Save'}
                actionBtnColor={'#04b3d6'}
                actionHandler={editEmployeeHandler}
                body={modalBody}
            />
        </>
    )
}

export default EditEmployee;
