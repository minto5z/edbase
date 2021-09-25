import * as React from 'react';
import {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Formik} from "formik";
import {ContactInfo} from "./ContactInfo";
import {useHistory} from "react-router-native";
import {callApi, selectApi} from "../../../reducers/apiSlice";

import {ProgressBar} from 'react-native-paper';
import {StyleSheet, Text, View} from "react-native";
import AppError from "../../../components/typography/AppError";
import AppButton from "../../../components/button/AppButton";
import AppLayout from "../../../layouts/app/AppLayout";
import Colors from "../../../constants/Colors";
import AppFormInputField from "../../../components/form/AppFormInputField";

const ContactInfoForm = (props) => {

    const dispatch = useDispatch();

    const {
        loading, profile = {
            data: {}
        }
    } = useSelector(selectApi);

    useEffect(() => {
        dispatch(callApi({
            operationId: `user/profile`,
            output: 'profile',
            storeName: 'profile'
        }))
    }, [dispatch]);
    //console.log(profile.data + "fdfgdfgdfg")
    return (

        <View style={styles.container}>
            {loading &&
            <ProgressBar/>
            }
            <AppLayout><Text style={styles.section1Title}>Contact Information</Text>
                <Formik
                    initialValues={ContactInfo.fromJson(profile.data)}
                    enableReinitialize={true}
                    validationSchema={ContactInfo.validator()}
                    onSubmit={(values) => {

                        /**
                         * Save data through POST api by dispatching 'callApi'.
                         */
                        dispatch(callApi({
                            operationId: `user/contact-info`,
                            parameters: {
                                method: 'POST',
                                body: ContactInfo.toString(values),
                            }
                        }));

                    }}
                >
                    {({handleSubmit, handleChange, handleBlur, values, errors}) => (
                        <>

                            <AppFormInputField
                                label="Email"
                                value={values.email}
                                onChange={handleChange('email')}
                                onBlur={handleBlur('email')}
                            />
                            {errors.email !== undefined &&
                            <AppError>{errors.email}</AppError>
                            }

                            <AppFormInputField
                                label="Phone"
                                value={values.phone}
                                onChange={handleChange('phone')}
                                onBlur={handleBlur('phone')}
                            />
                            {errors.phone !== undefined &&
                            <AppError>{errors.phone}</AppError>
                            }

                            <AppFormInputField
                                label="Mobile"
                                value={values.mobile}
                                onChange={handleChange('mobile')}
                                onBlur={handleBlur('mobile')}
                            />
                            {errors.mobile !== undefined &&
                            <AppError>{errors.mobile}</AppError>
                            }

                            <AppFormInputField
                                label="Address Line 1"
                                value={values.address_line_1}
                                onChange={handleChange('address_line_1')}
                                onBlur={handleBlur('address_line_1')}
                            />
                            {errors.address_line_1 !== undefined &&
                            <AppError>{errors.address_line_1}</AppError>
                            }
                            <AppFormInputField
                                label="Address Line 2"
                                value={values.address_line_2}
                                onChange={handleChange('address_line_2')}
                                onBlur={handleBlur('address_line_2')}
                            />

                            {errors.address_line_2 !== undefined &&
                            <AppError>{errors.address_line_2}</AppError>
                            }

                            <AppButton
                                title="Submit"
                                mode="contained"
                                width={'100%'}
                                onPress={handleSubmit}
                                loading={loading}
                            />
                        </>
                    )}
                </Formik>
            </AppLayout>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 16,
        marginRight: 16
    },
    section2Title: {
        color: Colors.black,
        fontSize: 17,
        fontWeight: '600',
    },
    section1Title: {
        color: Colors.black,
        fontSize: 22,
        fontWeight: '600',
        textAlign: "center"
    }

});
export default ContactInfoForm;
