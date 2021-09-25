import React from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import Colors from '../../constants/Colors';

const AppError = ({children}) => {
    return (
        <Text style={styles.text}>
            {children}
        </Text>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        lineHeight: 26,
        color: Colors.danger,
        marginBottom: 0,
        textAlign: 'left',
        width: '100%'
    },
});

export default AppError;
