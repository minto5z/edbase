import * as Yup from 'yup';

class PersonalInfoModel {

	/**
	 * Model properties
	 */
	constructor() {
		this.first_name = '';
		this.last_name = '';
		this.username = '';
		this.dob = '';
		this.gender = '';
		this.blood_group = '';
		this.nid_no = '';
		this.nid_photo = '';
		this.passport_no = '';
		this.passport_photo = '';
		this.previous_school = '';
		this.profile_image = '';
		this.about = 'N/A';
		this.experience = 'N/A';
		this.education = 'N/A';
		this.expertise_area = 'N/A';
	}

	/**
	 * Get model instance from json
	 */
	fromJson(data = {}) {
		let obj = new PersonalInfoModel();
		if (data.id !== undefined && data.id) {
			obj.id = data.id;
		}
		obj.first_name = data.first_name ?? '';
		obj.last_name = data.last_name ?? '';
		obj.username = data.username ?? '';
		obj.dob = data.dob ?? '';
		obj.gender = data.gender ?? '';
		obj.blood_group = data.blood_group ?? '';
		obj.nid_no = data.nid_no ?? '';
		obj.nid_photo = data.nid_photo ?? '';
		obj.passport_no = data.passport_no ?? '';
		obj.passport_photo = data.passport_photo ?? '';
		obj.previous_school = data.previous_school ?? '';
		obj.about = data.about ?? '';
		obj.experience = data.experience ?? '';
		obj.expertise_area = data.expertise_area ?? '';
		obj.education = data.education ?? '';
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
		data.first_name = obj.first_name ?? '';
		data.last_name = obj.last_name ?? '';
		data.username = obj.username ?? '';
		data.dob = obj.dob ?? '';
		data.gender = obj.gender ?? '';
		data.blood_group = obj.blood_group ?? '';
		data.nid_no = obj.nid_no ?? '';
		data.nid_photo = obj.nid_photo ?? '';
		data.passport_no = obj.passport_no ?? '';
		data.passport_photo = obj.passport_photo ?? '';
		data.previous_school = obj.previous_school ?? '';
		data.about = obj.about ?? '';
		data.experience = obj.experience ?? '';
		data.expertise_area = obj.expertise_area ?? '';
		data.education = obj.education ?? '';
		return JSON.stringify(data);
	}

	/**
	 * Get string from model instance
	 */
	toFormData(obj = {}) {
		let data = new FormData()
		if (obj.id !== undefined && obj.id) {
			data.append('id', obj.id ?? '');
		}
		data.append('first_name', obj.first_name ?? '');
		data.append('last_name', obj.last_name ?? '');
		data.append('username', obj.username ?? '');
		data.append('dob', obj.dob ?? '');
		data.append('gender', obj.gender ?? '');
		data.append('blood_group', obj.blood_group ?? '');
		data.append('nid_no', obj.nid_no ?? '');
		data.append('nid_photo', obj.nid_photo ?? '');
		data.append('passport_no', obj.passport_no ?? '');
		data.append('passport_photo', obj.passport_photo ?? '');
		data.append('previous_school', obj.previous_school ?? '');
		data.append('about', obj.about ?? '');
		data.append('experience', obj.experience ?? '');
		data.append('expertise_area', obj.expertise_area ?? '');
		data.append('education', obj.education ?? '');
		data.append('profile_image', obj.profile_image ?? '');
		return data;
	}

	/**
	 * Validator schema
	 */
	validator() {
		return Yup.object().shape({
			first_name: Yup.string()
				.required('Required'),
			last_name: Yup.string()
				.required('Required'),
			username: Yup.string()
				.required('Required'),
			dob: Yup.string()
				.required('Required'),
			gender: Yup.string()
				.required('Required'),
			blood_group: Yup.string()
				.required('Required'),
			nid_no: Yup.string()
				.required('Required'),
			passport_no: Yup.string()
				.required('Required')
		});
	}

}

export const PersonalInfo = new PersonalInfoModel();
