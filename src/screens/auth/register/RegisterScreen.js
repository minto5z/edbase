import {useDispatch, useSelector} from 'react-redux';
import React, {useEffect, useState} from 'react';
import {callApi, clearState, selectApi} from '../../../reducers/apiSlice';
import AuthLayout from '../../../layouts/auth/AuthLayout';
import {Formik} from 'formik';
import {Register} from './Register';
import AppFormText from '../../../components/form/AppFormText';
import AppError from '../../../components/typography/AppError';
import AppButton from '../../../components/button/AppButton';
import {Text} from 'react-native';


const RegisterScreen = ({navigation}) => {

    const dispatch = useDispatch();

    const [userIdentity, setUserIdentity] = useState(null);

    const {
        loading, registerData = {
            data: {},
        },
    } = useSelector(selectApi);

    useEffect(() => {
        console.log(registerData, 'reg')
        if (registerData.code !== undefined && registerData.code === 200) {
            dispatch(clearState({
                output: 'registerData',
            }));
            // history.push({
            //     pathname: '/otpVerify',
            //     state: {
            //         userIdentity: userIdentity,
            //     }
            // });
            navigation.navigate("OtpVerify", {
                otherParam: userIdentity,
            });
        }
    }, [registerData]);

    return (
        <AuthLayout>
            <Text>
                Register to Our Application!
            </Text>
            <Formik
                initialValues={Register}
                validationSchema={Register.validator()}
                validateOnMount={false}
                onSubmit={(values) => {
                    dispatch(callApi({
                        operationId: 'auth/register',
                        output: 'registerData',
                        parameters: {
                            method: 'POST',
                            body: JSON.stringify(values),
                        },
                    }));
                    setUserIdentity(values.phone);
                }}
            >
                {({handleSubmit, handleChange, handleBlur, values, errors}) => (
                    <>
                        <AppFormText
                            label="First Name"
                            value={values.first_name}
                            onChange={handleChange('first_name')}
                            onBlur={handleBlur('first_name')}
                        />
                        {errors.first_name !== undefined &&
                        <AppError>{errors.first_name}</AppError>
                        }
                        <AppFormText
                            label="Last Name"
                            value={values.last_name}
                            onChange={handleChange('last_name')}
                            onBlur={handleBlur('last_name')}
                        />
                        {errors.last_name !== undefined &&
                        <AppError>{errors.last_name}</AppError>
                        }
                        <AppFormText
                            label="Email"
                            value={values.email}
                            onChange={handleChange('email')}
                            onBlur={handleBlur('email')}
                        />
                        {errors.email !== undefined &&
                        <AppError>{errors.email}</AppError>
                        }
                        <AppFormText
                            label="Phone"
                            value={values.phone}
                            onChange={handleChange('phone')}
                            onBlur={handleBlur('phone')}
                        />
                        {errors.phone !== undefined &&
                        <AppError>{errors.phone}</AppError>
                        }
                        <AppFormText
                            label="Password"
                            type="password"
                            value={values.password}
                            onChange={handleChange('password')}
                            onBlur={handleBlur('password')}
                        />
                        {errors.password !== undefined &&
                        <AppError>{errors.password}</AppError>
                        }
                        <AppFormText
                            label="Confirm Password"
                            type="password_confirmation"
                            value={values.password_confirmation}
                            onChange={handleChange('password_confirmation')}
                            onBlur={handleBlur('password_confirmation')}
                        />
                        {errors.password_confirmation !== undefined &&
                        <AppError>{errors.password_confirmation}</AppError>
                        }
                        <AppButton
                            title="Register"
                            mode="contained"
                            width={'100%'}
                            onPress={handleSubmit}
                            loading={loading}
                        />
                        <AppButton
                            title="Login"
                            mode="outlined"
                            width={'100%'}
                            onPress={() => history.push('/')}/>
                    </>
                )}
            </Formik>
        </AuthLayout>
    );
};

export default RegisterScreen;
