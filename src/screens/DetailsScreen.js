import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AppLayout from "../layouts/app/AppLayout";
import Colors from "../constants/Colors";

const DetailsScreen = ({props}) => {
    return (
      <AppLayout>
        <View style={styles.container}>
          <Text>DetailsScreen</Text>
          <Button
            title="Click Here"
            color={Colors.blue}
            onPress={() => alert('Button Clicked!')}
          />
        </View>
      </AppLayout>
    );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
