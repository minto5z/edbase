import * as React from "react";
import { useEffect } from "react";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { callApi, clearState, selectApi } from "../../../reducers/apiSlice";
import AuthLayout from "../../../layouts/auth/AuthLayout";
import { Text } from "react-native-paper";
import { OtpVerify } from "./OtpVerify";
import AppButton from "../../../components/button/AppButton";
import AppFormText from "../../../components/form/AppFormText";
import AppError from "../../../components/typography/AppError";

const OtpVerifyScreen = (route, navigation) => {

  const dispatch = useDispatch();

  const { otherParam } = route.params;

  const {
    loading, otpVerifyData = {
      data: {},
    },
  } = useSelector(selectApi);

  useEffect(() => {
    console.log(otpVerifyData);
    if (otpVerifyData.code !== undefined && otpVerifyData.code === 200) {
      dispatch(clearState({
        output: "otpVerifyData",
      }));
      navigation.navigate("Login");
    }
  }, [otpVerifyData]);

  //console.log(history.location.state.userIdentity);
  console.log(otherParam);

  return (
    <AuthLayout>
      <Text>
        An OTP has been sent to your account. User that OTP to verify your account.
      </Text>
      <Formik
        initialValues={OtpVerify}
        validationSchema={OtpVerify.validator()}
        validateOnMount={false}
        onSubmit={(values) => {
          let body = {
            identity: otherParam,
            otp: values.otp,
          };
          dispatch(callApi({
            operationId: "auth/verify",
            output: "otpVerifyData",
            parameters: {
              method: "GET",
              ...body,
            },
          }));
        }}
      >
        {({ handleSubmit, handleChange, handleBlur, values, errors }) => (
          <>
            <AppFormText
              label="Otp"
              type="otp"
              value={values.otp}
              onChange={handleChange("otp")}
              onBlur={handleBlur("otp")}
            />
            {errors.otp !== undefined &&
            <AppError>{errors.otp}</AppError>
            }
            <AppButton
              title="Verify"
              mode="contained"
              width={"100%"}
              onPress={handleSubmit}
              loading={loading}
            />
            <AppButton
              title="Login"
              mode="outlined"
              width={"100%"}
              onPress={() => navigation.navigate("Login")} />
          </>
        )}
      </Formik>
    </AuthLayout>
  );
};

export default OtpVerifyScreen;
