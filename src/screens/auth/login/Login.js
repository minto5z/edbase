import * as Yup from 'yup';

class LoginModel {

    /**
     * Model properties
     */
    constructor() {
        this.email = '';
        this.password = '';
    }

    /**
     * Get model instance from json
     */
    fromJson(data = {}) {
        let obj = new LoginModel();
        if (data.id !== undefined && data.id) {
            obj.id = data.id;
        }
        obj.email = data.email;
        obj.password = data.password;
        return obj;
    }

    /**
     * Get string from model instance
     */
    toString(data = {}) {
        let obj = new LoginModel()
            .fromJson(data);
        return JSON.stringify(obj);
    }

    /**
     * Validator schema
     */
    validator() {
        return Yup.object().shape({
            email: Yup.string()
                .min(3, 'Minimum length should be 3.')
                .required('This value is required.'),
            password: Yup.string()
                .min(6, 'Minimum length should be 6.')
                .required('This value is required.'),
        });
    }

}

export const Login = new LoginModel();
