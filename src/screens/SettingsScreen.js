import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import AppLayout from "../layouts/app/AppLayout";
import Colors from "../constants/Colors";

const SettingsScreen = () => {
  return (
    <AppLayout>
      <View style={styles.container}>
        <Text>Settings Screen</Text>
        <Button
          title="Click Here"
          color={Colors.blue}
          onPress={() => alert("Button Clicked!")}
        />
      </View>
    </AppLayout>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
