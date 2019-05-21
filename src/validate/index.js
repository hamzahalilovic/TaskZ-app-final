export const validateLogIn = values => {
    const errors = {};
    if(!values.email){
        errors.email = 'The field is required to fill!';
    }

    if(!values.password){
        errors.password = 'The field is required to fill!!';
    } else if (values.password.length < 8) {
        errors.password = 'Password should be not less 8 symbols'
    }

    return errors;
};

export const validateSignUp = values => {
    const errors = {};
    if(!values.firstName){
        errors.firstName = 'The field is required to fill!';
    } 
    // else if (values.firstName.length < 5) {
    //     errors.firstName = 'The text should be not less 5 symbols'
    // }

    if(!values.lastName){
        errors.lastName = 'The field is required to fill!';
    } 

    if(!values.username){
        errors.username = 'The field is required to fill!';
    } else if (values.username.length < 5) {
        errors.username = 'The text should be not less 5 symbols'
    }

    if(!values.email){
        errors.email = 'The field is required to fill!';
    } else if (values.email.length < 5) {
        errors.email = 'The text should be not less 5 symbols'
    } else if(!/^[\w.+\-]+@gmail\.com$/.test(values.email)) {
        errors.email = 'Email is not valid!';
    }

    if(!values.password){
        errors.password = 'The field is required to fill!';
    } else if (values.password.length < 8) {
        errors.password = 'Password should be not less 8 symbols'
    }

    return errors;
};