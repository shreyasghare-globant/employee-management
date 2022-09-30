export const noValuesAreEmpty = (state) => {
    for (const [ , value] of Object.entries(state)) {
        if(value === undefined || value === null || value === '') {
            return false;
        }
    }
    return true;
}

export const allValuesAreEmpty = (state) => {
    for (const [ , value] of Object.entries(state)) {
        if(value !== undefined && value !== null && value !== '') {
            return false;
        }
    }
    return true;
}

export const createAction = (action, payload) => {
    return {
        type: action,
        payload: payload
    }
}

export const validateName = (name) => {
    return validateRequired(name) ? '' : 'Name is Required Feild';
}

export const validateEmail = (email) => {
    if(!validateRequired(email) ) return 'Email is Required Feild';
    if(!(/\S+@\S+\.\S+/.test(email))) return 'invalid Email Format. (abc@test.com)';
    else return '';
}

export const validateAddress = (address) => {
    if(!validateRequired(address) ) return 'Address is Required Feild';
    else return '';
}


export const validatePhone = (phone) => {
    if(!validateRequired(phone) ) return 'Phone is Required Feild';
    if(!(/^\d{10}$/.test(phone))) return 'invalid phone number. Should be a 10 digit number';
    else return '';
}

export const validateRequired = (val) => {
    return Boolean(val);
}
