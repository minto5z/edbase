import * as Yup from 'yup';

class RegisterModel {

    /**
     * Model properties
     */
    constructor() {
        this.first_name = '';
        this.last_name = '';
        this.email = '';
        this.phone = '';
        this.password = '';
        this.password_confirmation = '';
        this.user_type = 1;
    }

    /**
     * Get model instance from json
     */
    fromJson(data = {}) {
        let obj = new RegisterModel();
        if (data.id !== undefined && data.id) {
            obj.id = data.id;
        }
        obj.first_name = data.first_name;
        obj.last_name = data.last_name;
        obj.email = data.email;
        obj.phone = data.phone;
        obj.password = data.password;
        obj.password_confirmation = data.password_confirmation;
        obj.user_type = data.user_type;
        return obj;
    }

    /**
     * Get string from model instance
     */
    toString(data = {}) {
        let obj = new RegisterModel()
            .fromJson(data);
        return JSON.stringify(obj);
    }

    /**
     * Validator schema
     */
    validator() {
        return Yup.object().shape({
            first_name: Yup.string()
                .min(3, 'Minimum length should be 3.')
                .required('This value is required.'),
            last_name: Yup.string()
                .min(3, 'Minimum length should be 3.')
                .required('This value is required.'),
            email: Yup.string()
                .min(3, 'Minimum length should be 3.')
                .required('This value is required.'),
            phone: Yup.string()
                .min(3, 'Minimum length should be 3.')
                .required('This value is required.'),
            password: Yup.string()
                .min(6, 'Minimum length should be 6.')
                .required('This value is required.'),
            password_confirmation: Yup.string()
                .min(6, 'Minimum length should be 6.')
                .required('This value is required.'),
            user_type: Yup.number()
                .required('This value is required.'),
        });
    }

}

export const Register = new RegisterModel();
