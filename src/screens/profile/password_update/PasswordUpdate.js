import * as Yup from 'yup';

class PasswordUpdateModel {

	/**
	 * Model properties
	 */
	constructor() {
		this.old_password = '';
		this.password = '';
		this.password_confirmation = '';
	}

	/**
	 * Get model instance from json
	 */
	fromJson(data = {}) {
		let obj = new PasswordUpdateModel();
		if (data.id !== undefined && data.id) {
			obj.id = data.id;
		}
		obj.old_password = data.old_password ?? '';
		obj.password = data.password ?? '';
		obj.password_confirmation = data.password_confirmation ?? '';
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
		data.old_password = obj.old_password ?? '';
		data.password = obj.password ?? '';
		data.password_confirmation = obj.password_confirmation ?? '';
		return JSON.stringify(data);
	}

	/**
	 * Validator schema
	 */
	validator() {
		return Yup.object().shape({
			old_password: Yup.string()
				.min(3, 'Too Short!')
				.max(50, 'Too Long!')
				.required('Required'),
			password: Yup.string()
				.min(3, 'Too Short!')
				.max(50, 'Too Long!')
				.required('Required'),
			password_confirmation: Yup.string()
				.min(3, 'Too Short!')
				.max(50, 'Too Long!')
				.required('Required')
		});
	}

}

export const PasswordUpdate = new PasswordUpdateModel();
