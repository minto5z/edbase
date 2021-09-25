import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import useAsyncStorage from '../../../hooks/useAsyncStorage';
import {callApi, selectApi} from '../../../reducers/apiSlice';
import {StyleSheet} from 'react-native';
import AuthLayout from '../../../layouts/auth/AuthLayout';
import {Formik} from 'formik';
import {Login} from './Login';
import environment from '../../../environments/environment';
import {AppButton, AppError, AppFormText} from '../../../components';

const LoginScreen = (props) => {

    const dispatch = useDispatch();

    const asyncStorage = useAsyncStorage();

    const {
        loading, data = {
            data: {},
        },
    } = useSelector(selectApi);

    useEffect(() => {
        console.log(data)
        if (data.access_token !== undefined) {
            asyncStorage.setValue('access_token', data.access_token);
            //history.push('/home')
            props.navigation.navigate('Home')
        }
    }, [data]);

    return (
        <AuthLayout>
            <Formik
                initialValues={Login}
                validationSchema={Login.validator()}
                validateOnMount={false}
                onSubmit={(values) => {
                    let body = {
                        grant_type: 'password',
                        scope: '*',
                        client_id: environment.clientId,
                        client_secret: environment.clientSecret,
                        username: values.email,
                        password: values.password,
                    };
                    dispatch(callApi({
                        operationId: 'auth/token',
                        output: 'data',
                        parameters: {
                            method: 'POST',
                            body: JSON.stringify(body),
                        },
                    }));
                }}
            >
                {({handleSubmit, handleChange, handleBlur, values, errors}) => (
                    <>
                        <AppFormText
                            label="Email/Phone/Username"
                            value={values.email}
                            onChange={handleChange('email')}
                            onBlur={handleBlur('email')}
                        />
                        {errors.email !== undefined &&
                        <AppError>{errors.email}</AppError>
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
                        <AppButton
                            title="Login"
                            mode="contained"
                            width={'100%'}
                            onPress={handleSubmit}
                            loading={loading}
                        />
                        <AppButton
                            title="Register"
                            mode="outlined"
                            width={'100%'}
                            onPress={() => props.navigation.navigate('Register')}/>
                    </>
                )}
            </Formik>
        </AuthLayout>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
});

export default LoginScreen;
