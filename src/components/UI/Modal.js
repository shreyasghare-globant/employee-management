import { faClose } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

const Modal = (props) => {
    const {
        title,
        closeModal,
        actionBtnText,
        actionBtnColor,
        actionHandler,
        body,
    } = props;

    return (
        <>
            <div className="modal-background"
            >
                <div className="modal-container">
                    <div className="modal-header">
                        <h1 className="modal-title">{title}</h1>
                        <Button
                            icon = {faClose}
                            iconColor = {'grey'}
                            color = {'transparent'}
                            clickHandler = {closeModal}
                        />
                    </div>

                    <div className="modal-body">
                        {body}
                    </div>


                    <div className="modal-actions">
                        <Button
                            text={'Cancel'}
                            color={'transparent'}
                            clickHandler={closeModal}
                            buttonColor={'#ddd'}
                        />
                        <Button
                            text={actionBtnText}
                            color={actionBtnColor}
                            clickHandler={actionHandler}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal;