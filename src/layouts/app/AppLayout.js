import React from "react";
import {SafeAreaView, StatusBar, StyleSheet, View} from "react-native";
import Colors from "../../constants/Colors";

function AppLayout({children, style}) {
    return (
        <SafeAreaView style={[styles.screen, style]}>
            <View style={[styles.view, style]}>{children}</View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: StatusBar.currentHeight,
        backgroundColor: Colors.background,
        flex: 1,
    },
    view: {
        flex: 1,
        height: '100%',
        width: '100%'
    },
});

export default AppLayout;
