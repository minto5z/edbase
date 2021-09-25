import * as Yup from 'yup';

class LoginModel {

    /**
     * Model properties
     */
    constructor() {
        this.identity = '';
        this.otp = '';
    }

    /**
     * Get model instance from json
     */
    fromJson(data = {}) {
        let obj = new LoginModel();
        if (data.id !== undefined && data.id) {
            obj.id = data.id;
        }
        obj.identity = data.identity;
        obj.otp = data.otp;
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
            // identity: Yup.string()
            // 	.required('This value is required.'),
            otp: Yup.string()
                .required('This value is required.'),
        });
    }

}

export const OtpVerify = new LoginModel();
