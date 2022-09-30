const Checkbox = (props) => {

    const {
        setCheckedStatus,
        checkedStatus,
    } = props;


    const changeHandler = (e) => {
        setCheckedStatus(e.target.checked);
    }

    return (
                <input
                    className="checkmark"
                    type="checkbox"
                    checked={checkedStatus}
                    onChange={changeHandler}
                />
    )

}

export default Checkbox;
