import * as Yup from 'yup';

class ContactInfoModel {

    /**
     * Model properties
     */
    constructor() {
        this.email = '';
        this.phone = '';
        this.mobile = '';
        this.dob = '';
        this.country_id = '';
        this.division_id = '';
        this.district_id = '';
        this.upazila_id = '';
        this.union_id = '';
        this.address_line_1 = '';
        this.address_line_2 = '';
    }

    /**
     * Get model instance from json
     */
    fromJson(data = {}) {
        let obj = new ContactInfoModel();
        if (data.id !== undefined && data.id) {
            obj.id = data.id;
        }
        obj.email = data.email ?? '';
        obj.phone = data.phone ?? '';
        obj.mobile = data.mobile ?? '';
        obj.country_id = data.country_id ?? '';
        obj.division_id = data.division_id ?? '';
        obj.district_id = data.district_id ?? '';
        obj.upazila_id = data.upazila_id ?? '';
        obj.union_id = data.union_id ?? '';
        obj.address_line_1 = data.address_line_1 ?? '';
        obj.address_line_2 = data.address_line_2 ?? '';
        return obj;
    }

    /**
     * Get string from model instance
     */
    toString(obj = {}) {
        let data = {};
        if (obj.id !== undefined && obj.id) {
            data.id = obj.id;
        }
        data.email = obj.email ?? '';
        data.phone = obj.phone ?? '';
        data.mobile = obj.mobile ?? '';
        data.country_id = obj.country_id ?? '';
        data.division_id = obj.division_id ?? '';
        data.district_id = obj.district_id ?? '';
        data.upazila_id = obj.upazila_id ?? '';
        data.union_id = obj.union_id ?? '';
        data.address_line_1 = obj.address_line_1 ?? '';
        data.address_line_2 = obj.address_line_2 ?? '';
        return JSON.stringify(data);
    }

    /**
     * Validator schema
     */
    validator() {
        return Yup.object().shape({
            email: Yup.string()
                .required('Required'),
            phone: Yup.string()
                .required('Required'),
            address_line_1: Yup.string()
                .required('Required'),
            address_line_2: Yup.string()
                .required('Required')
        });
    }

}

export const ContactInfo = new ContactInfoModel();
