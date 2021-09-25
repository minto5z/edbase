import * as Yup from 'yup';

class GuardianInfoModel {

	/**
	 * Model properties
	 */
	constructor() {
		this.guardian_1_first_name = '';
		this.guardian_1_last_name = '';
		this.guardian_1_phone = '';
		this.guardian_1_mobile = '';
		this.guardian_1_email = '';
		this.guardian_1_relation = '';
		this.guardian_2_first_name = '';
		this.guardian_2_last_name = '';
		this.guardian_2_phone = '';
		this.guardian_2_mobile = '';
		this.guardian_2_email = '';
		this.guardian_2_relation = '';
	}

	/**
	 * Get model instance from json
	 */
	fromJson(data = {}) {
		let obj = new GuardianInfoModel();
		if (data.id !== undefined && data.id) {
			obj.id = data.id;
		}
		obj.guardian_1_first_name = data.guardian_1_first_name ?? '';
		obj.guardian_1_last_name = data.guardian_1_last_name ?? '';
		obj.guardian_1_phone = data.guardian_1_phone ?? '';
		obj.guardian_1_mobile = data.guardian_1_mobile ?? '';
		obj.guardian_1_email = data.guardian_1_email ?? '';
		obj.guardian_1_relation = data.guardian_1_relation ?? '';
		obj.guardian_2_first_name = data.guardian_2_first_name ?? '';
		obj.guardian_2_last_name = data.guardian_2_last_name ?? '';
		obj.guardian_2_phone = data.guardian_2_phone ?? '';
		obj.guardian_2_mobile = data.guardian_2_mobile ?? '';
		obj.guardian_2_email = data.guardian_2_email ?? '';
		obj.guardian_2_relation = data.guardian_2_relation ?? '';
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
		data.guardian_1_first_name = obj.guardian_1_first_name ?? '';
		data.guardian_1_last_name = obj.guardian_1_last_name ?? '';
		data.guardian_1_phone = obj.guardian_1_phone ?? '';
		data.guardian_1_mobile = obj.guardian_1_mobile ?? '';
		data.guardian_1_email = obj.guardian_1_email ?? '';
		data.guardian_1_relation = obj.guardian_1_relation ?? '';
		data.guardian_2_first_name = obj.guardian_2_first_name ?? '';
		data.guardian_2_last_name = obj.guardian_2_last_name ?? '';
		data.guardian_2_phone = obj.guardian_2_phone ?? '';
		data.guardian_2_mobile = obj.guardian_2_mobile ?? '';
		data.guardian_2_email = obj.guardian_2_email ?? '';
		data.guardian_2_relation = obj.guardian_2_relation ?? '';
		return JSON.stringify(data);
	}

	/**
	 * Validator schema
	 */
	validator() {
		return Yup.object().shape({
			guardian_1_first_name: Yup.string()
				.required('Required'),
			guardian_1_last_name: Yup.string()
				.required('Required'),
			guardian_1_mobile: Yup.string()
				.required('Required'),
			guardian_1_email: Yup.string()
				.required('Required'),
			guardian_1_relation: Yup.string()
				.required('Required'),
			guardian_2_first_name: Yup.string()
				.required('Required'),
			guardian_2_last_name: Yup.string()
				.required('Required'),
			guardian_2_mobile: Yup.string()
				.required('Required'),
			guardian_2_email: Yup.string()
				.required('Required'),
			guardian_2_relation: Yup.string()
				.required('Required')
		});
	}

}

export const GuardianInfo = new GuardianInfoModel();
