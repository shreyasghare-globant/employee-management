
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Button = (props) => {

    const {
        icon,
        text,
        color,
        clickHandler,
        iconColor,
        buttonColor,
        buttonClass,
        iconClass,
        textClass,
        disabled = false,
    } = props;

    const buttonClassArray = `icon-button ${buttonClass || '' }`;

    const iconClassArray = `${iconClass}`;

    const textClassArray = `icon-button__text ${textClass}`;

    return (
        <button
            className={buttonClassArray}
            style={{backgroundColor: color}}
            onClick ={clickHandler}
            disabled={disabled}
        >
            {icon &&<FontAwesomeIcon className={iconClassArray} style={{color: iconColor}} icon={icon} />}
            {text && <span className={textClassArray} style={{color: buttonColor}}>{text}</span>}
        </button>
    )
}

export default  Button;
