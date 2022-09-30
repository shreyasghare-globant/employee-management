import { useState } from "react";
import { useDispatch } from "react-redux";
import { startAddingEmployee } from "../../../redux/Actions";
import EmployeeForm from "../EmployeeForm";
import Modal from "../../UI/Modal";
import { noValuesAreEmpty } from "../../../utils/utils";

const AddEmployee = (props) => {

    const {
        closeModalHandler
    } = props;

    const dispatcher = useDispatch();

    const [employeeFormValues, setEmployeeFormValues] = 
    useState({
        name: '',
        email: '',
        address: '',
        phone: '',
        isChecked: false,
    });

    const [hasErrors, setHasErrors] = useState (true);

    const addEmployeeHandler = () => {
        if (
            !hasErrors &&
            noValuesAreEmpty(employeeFormValues)
        ) {
            const newEmployee = {
                ...employeeFormValues,
                id: new Date().getTime(),
            }
            dispatcher(startAddingEmployee(newEmployee))
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
                title="Add Employee"
                closeModal={closeModalHandler}
                actionBtnText={'Add'}
                actionBtnColor={'green'}
                actionHandler={addEmployeeHandler}
                body={modalBody}
            />
        </>
    )
}

export default AddEmployee;
