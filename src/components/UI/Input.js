const Input = (props) => {

    const {
        type,
        id,
        label,
        value,
        updateValue,
        multiline = false,
        error,
        validateValue,
    } = props;

    const changeHandler = (e) => {
        updateValue(e.target.value);
    }

    const input = <input
                    type={type}
                    className="input"
                    id={id}
                    value={value}
                    onChange={changeHandler}
                    onBlur={validateValue}
                />

    const textarea = <textarea
                    type={type}
                    className="input"
                    id={id}
                    value={value}
                    onChange={changeHandler}
                    onBlur={validateValue}
                />

    return (
        <>
            <div className="input-group">
                <label className="label" htmlFor={id}> {label} </label>
                {
                    error &&
                    <p className="form-error-msg">{error}</p>
                }
                { !multiline && input }
                { multiline && textarea }
            </div>
        </>
    )
}

export default Input;
