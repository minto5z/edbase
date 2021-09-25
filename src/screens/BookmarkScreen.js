import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import AppLayout from "../layouts/app/AppLayout";
import Colors from "../constants/Colors";

const BookmarkScreen = () => {
  return (
    <AppLayout>
      <View style={styles.container}>
        <Text>Bookmark Screen</Text>
        <Button
          title="Click Here"
          color={Colors.blue}
          onPress={() => alert("Button Clicked!")}
        />
      </View>
    </AppLayout>
  );
};

export default BookmarkScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
