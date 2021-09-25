import React from 'react';
import {KeyboardAvoidingView, ScrollView, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const AuthLayout = ({children}) => (
    <SafeAreaView>
        <ScrollView>
            <KeyboardAvoidingView style={styles.container}>
                {children}
            </KeyboardAvoidingView>
        </ScrollView>
    </SafeAreaView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        width: '100%',
        maxWidth: 450,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default AuthLayout;
