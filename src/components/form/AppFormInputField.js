import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import Colors from "../../constants/Colors";

const AppFormInputField = ({mode, label, type, value, onChange, onBlur}) => {
    return (
        <View>
            <Text style={styles.section2Title}>{label}</Text>
            <View style={styles.container}>
                <TextInput
                    mode={mode ?? 'outlined'}
                    secureTextEntry={type === 'password'}
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}/>
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%'
    },
    section2Title: {
        color: Colors.black,
        fontSize: 17,
        fontWeight: '600',
    }
});

export default AppFormInputField;
