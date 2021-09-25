import React from "react";
import { Button, StatusBar, StyleSheet, Text, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import AppLayout from "../../layouts/app/AppLayout";
import Colors from "../../constants/Colors";

const HomeScreen = ({ navigation }) => {

  const { colors } = useTheme();

  const theme = useTheme();

  return (
    <AppLayout>
      <View style={styles.container}>
        <StatusBar barStyle={theme.dark ? "light-content" : "dark-content"} />
        <Text style={{ color: colors.text }}>Home Screen</Text>
        <Button
          title="Go to details screen"
          color={Colors.blue}
          onPress={() => navigation.navigate("Details")}
        />
      </View>
    </AppLayout>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomNavigationSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
});
