import { useDispatch } from "react-redux";
import { startDeletingEmployees } from "../../../redux/Actions";

import Modal from "../../UI/Modal";

const DeleteEmployee = (props) => {

    const {
        closeModalHandler,
        toDelete,
    } = props;

    const dispatcher = useDispatch();

    const deleteEmployeeHandler = () => {
        if(Array.isArray(toDelete)){
            const idsArray = toDelete.map(emp => emp.id)
            dispatcher(startDeletingEmployees(idsArray))
        }
        closeModalHandler();
    }

    const modalBody = (
        <div className="body">
            {
                    toDelete.length === 0 &&
                    <div className="delete-body-msg">No data selected to delete</div>
            }
            {
                toDelete.length !== 0 && 
                <>
                    <div className="delete-body-msg">Are you sure you want to delete these Records?</div>
                    <ol className="delete-users-list">
                        {
                            toDelete
                                .map(emp =>
                                    <li
                                        key={emp.id}
                                        className="delete-user-list-name">
                                        {emp.name}
                                    </li>)
                        }
                    </ol>
                    <div className="delete-body-warn">This action cannot be undone.</div>
                </>
            }
        </div>
    )

    return (
        <>
            <Modal
                title="Delete Employee"
                closeModal={closeModalHandler}
                actionBtnText={'delete'}
                actionBtnColor={'red'}
                actionHandler={deleteEmployeeHandler}
                body={modalBody}
            />
        </>
    )
}

export default DeleteEmployee;
