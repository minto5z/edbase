import * as React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import { GuardianInfo } from "./GuardianInfo";
import { callApi, selectApi } from "../../../reducers/apiSlice";
import { ProgressBar } from "react-native-paper";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import AppLayout from "../../../layouts/app/AppLayout";
import Colors from "../../../constants/Colors";
import AppFormInputField from "../../../components/form/AppFormInputField";
import AppError from "../../../components/typography/AppError";
import AppButton from "../../../components/button/AppButton";

const GuardianInfoForm = (props) => {

  const dispatch = useDispatch();

  const {
    loading, profile = {
      data: {},
    },
  } = useSelector(selectApi);

  useEffect(() => {
    dispatch(callApi({
      operationId: `user/profile`,
      output: "profile",
      storeName: "profile",
    }));
  }, [dispatch]);

  return (
    <View style={styles.container}>
      {loading &&
      <ProgressBar />
      }
      <AppLayout>
        {/*<Text style={styles.section1Title}>Guardian Information</Text>*/}
        <ScrollView>
          <Formik
            initialValues={GuardianInfo.fromJson(profile.data)}
            enableReinitialize={true}
            validationSchema={GuardianInfo.validator()}
            onSubmit={(values) => {

              /**
               * Save data through POST api by dispatching 'callApi'.
               */
              dispatch(callApi({
                operationId: `user/guardian-info`,
                parameters: {
                  method: "POST",
                  body: GuardianInfo.toString(values),
                },
              }));

            }}
          >
            {({ handleSubmit, handleChange, handleBlur, values, errors }) => (
              <>
                <Text style={styles.section1Title}>Guardian 1</Text>
                <AppFormInputField
                  label="First Name"
                  value={values.guardian_1_first_name}
                  onChange={handleChange("guardian_1_first_name")}
                  onBlur={handleBlur("guardian_1_first_name")}
                />
                {errors.guardian_1_first_name !== undefined &&
                <AppError>{errors.guardian_1_first_name}</AppError>
                }

                <AppFormInputField
                  label="Last Name"
                  value={values.guardian_1_last_name}
                  onChange={handleChange("guardian_1_last_name")}
                  onBlur={handleBlur("guardian_1_last_name")}
                />
                {errors.guardian_1_last_name !== undefined &&
                <AppError>{errors.guardian_1_last_name}</AppError>
                }

                <AppFormInputField
                  label="Phone"
                  value={values.guardian_1_phone}
                  onChange={handleChange("guardian_1_phone")}
                  onBlur={handleBlur("guardian_1_phone")}
                />
                {errors.guardian_1_phone !== undefined &&
                <AppError>{errors.guardian_1_phone}</AppError>
                }

                <AppFormInputField
                  label="Mobile"
                  value={values.guardian_1_mobile}
                  onChange={handleChange("guardian_1_mobile")}
                  onBlur={handleBlur("guardian_1_mobile")}
                />
                {errors.guardian_1_mobile !== undefined &&
                <AppError>{errors.guardian_1_mobile}</AppError>
                }

                <AppFormInputField
                  label="Email"
                  value={values.guardian_1_email}
                  onChange={handleChange("guardian_1_email")}
                  onBlur={handleBlur("guardian_1_email")}
                />
                {errors.guardian_1_email !== undefined &&
                <AppError>{errors.guardian_1_email}</AppError>
                }

                <AppFormInputField
                  label="Relation"
                  value={values.guardian_1_relation}
                  onChange={handleChange("guardian_1_relation")}
                  onBlur={handleBlur("guardian_1_relation")}
                />
                {errors.guardian_1_relation !== undefined &&
                <AppError>{errors.guardian_1_relation}</AppError>
                }

                <Text style={styles.section1Title}>Guardian 2</Text>

                <AppFormInputField
                  label="First Name"
                  value={values.guardian_2_first_name}
                  onChange={handleChange("guardian_2_first_name")}
                  onBlur={handleBlur("guardian_2_first_name")}
                />
                {errors.guardian_2_first_name !== undefined &&
                <AppError>{errors.guardian_2_first_name}</AppError>
                }

                <AppFormInputField
                  label="Last Name"
                  value={values.guardian_2_last_name}
                  onChange={handleChange("guardian_2_last_name")}
                  onBlur={handleBlur("guardian_2_last_name")}
                />
                {errors.guardian_2_last_name !== undefined &&
                <AppError>{errors.guardian_2_last_name}</AppError>
                }

                <AppFormInputField
                  label="Phone"
                  value={values.guardian_2_phone}
                  onChange={handleChange("guardian_2_phone")}
                  onBlur={handleBlur("guardian_2_phone")}
                />
                {errors.guardian_2_phone !== undefined &&
                <AppError>{errors.guardian_2_phone}</AppError>
                }

                <AppFormInputField
                  label="Mobile"
                  value={values.guardian_2_mobile}
                  onChange={handleChange("guardian_2_mobile")}
                  onBlur={handleBlur("guardian_2_mobile")}
                />
                {errors.guardian_2_mobile !== undefined &&
                <AppError>{errors.guardian_2_mobile}</AppError>
                }

                <AppFormInputField
                  label="Email"
                  value={values.guardian_2_email}
                  onChange={handleChange("guardian_2_email")}
                  onBlur={handleBlur("guardian_2_email")}
                />
                {errors.guardian_2_email !== undefined &&
                <AppError>{errors.guardian_2_email}</AppError>
                }

                <AppFormInputField
                  label="Relation"
                  value={values.guardian_2_relation}
                  onChange={handleChange("guardian_2_relation")}
                  onBlur={handleBlur("guardian_2_relation")}
                />
                {errors.guardian_2_relation !== undefined &&
                <AppError>{errors.guardian_2_relation}</AppError>
                }

                <AppButton
                  title="Submit"
                  mode="contained"
                  width={"100%"}
                  onPress={handleSubmit}
                  loading={loading}
                />
              </>
            )}

          </Formik>
        </ScrollView>
      </AppLayout>
    </View>
  );

};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 16,
    marginRight: 16,
  },
  section2Title: {
    color: Colors.black,
    fontSize: 17,
    fontWeight: "600",
  },
  section1Title: {
    color: Colors.black,
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
  },

});
export default GuardianInfoForm;
