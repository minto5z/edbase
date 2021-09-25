import {StyleSheet, Text} from 'react-native';
import {useHistory} from 'react-router-native';
import * as React from "react";
import {AppButton} from "../../../components";
import AppLayout from "../../../layouts/app/AppLayout";

const PersonalInfoForm = (navigation) => {

    return (
        <AppLayout>
            <Text style={styles.section2Title}>Personal Info Screen</Text>
            <AppButton
                title="Profile"
                mode="outlined"
                width={'100%'}
                onPress={() => navigation.navigate("Profile")}/>
        </AppLayout>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
});

export default PersonalInfoForm;
