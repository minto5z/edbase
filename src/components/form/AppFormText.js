import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput} from 'react-native-paper';

const AppFormText = ({mode, label, type, value, onChange, onBlur}) => {
    return (
        <View style={styles.container}>
            <TextInput
                mode={mode ?? 'outlined'}
                label={label}
                secureTextEntry={type === 'password'}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%'
    }
});

export default AppFormText;
