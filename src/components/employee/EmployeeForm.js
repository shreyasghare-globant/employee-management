import Input from "../UI/Input";
import {
    validateName,
    validateEmail,
    validateAddress,
    validatePhone,
    allValuesAreEmpty,
} from "../../utils/utils";

import { useEffect, useState } from "react";

const EmployeeForm = (props) => {

    const {
        name,
        email,
        address,
        phone,
    } = props.values;

    const {
        changeHandler,
        setModalError,
    } = props;

    const [errors, setError] =
        useState({
            name: '',
            email: '',
            address: '',
            phone: '',
        })

    const setName = (name) => {
        changeHandler(prevState => ({
            ...prevState,
            name,
        }))
    }

    const setEmail = (email) => {
        changeHandler(prevState => ({
            ...prevState,
            email,
        }))
    }

    const setAddress = (address) => {
        changeHandler(prevState => ({
            ...prevState,
            address,
        }))
    }

    const setPhone = (phone) => {
        changeHandler(prevState => ({
            ...prevState,
            phone,
        }))
    }

    const checkName = () => {
        setError((prevState) => {
            return {
                ...prevState,
                name: validateName(name),
            }
        })
    }

    const checkEmail = () => {
        setError((prevState) => {
            return {
                ...prevState,
                email: validateEmail(email),
            }
        })
    }

    const checkAddress = () => {
        setError((prevState) => {
            return {
                ...prevState,
                address: validateAddress(address),
            }
        })
    }

    const checkPhone = () => {
        setError((prevState) => {
            return {
                ...prevState,
                phone: validatePhone(phone),
            }
        })
    }

    useEffect(() => {
        const areThereErors = !allValuesAreEmpty(errors)
        setModalError(areThereErors);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [errors])

    return (
        <div className="body">
            <Input
                type="text"
                id="name"
                label="Name"
                value={name}
                updateValue={setName}
                validateValue={checkName}
                error={errors.name}
            />
            <Input
                type="email"
                id="email"
                label="Email"
                value={email}
                updateValue={setEmail}
                validateValue={checkEmail}
                error={errors.email}
            />
            <Input
                type="text"
                id="address"
                label="Address"
                multiline={true}
                value={address}
                updateValue={setAddress}
                validateValue={checkAddress}
                error={errors.address}
            />
            <Input
                type="tel"
                id="phone"
                label="Phone"
                value={phone}
                updateValue={setPhone}
                validateValue={checkPhone}
                error={errors.phone}
            />
        </div>
    )
}

export default EmployeeForm;
