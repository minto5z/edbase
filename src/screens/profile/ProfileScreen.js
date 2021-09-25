import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Avatar} from "react-native-elements";
import AppLayout from "../../layouts/app/AppLayout";

function ProfileScreen({navigation}) {

  return (
    <AppLayout>
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/*<View style={styles.topHeadingContainer}>*/}

          {/*  <Text style={[styles.headingText, styles.heading]}>Profile</Text>*/}
          {/*  <Avatar*/}
          {/*    rounded*/}
          {/*    source={{*/}
          {/*      uri:*/}
          {/*        "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"*/}
          {/*    }}*/}
          {/*  />*/}
          {/*</View>*/}
          {/*<View style={styles.horizontalLine}></View>*/}
          <TouchableOpacity onPress={() => navigation.navigate("Personal")}>
            <Text style={styles.section2Title}>Personal Info</Text>
          </TouchableOpacity>
          <View style={styles.horizontalLine}></View>
          <TouchableOpacity onPress={() => navigation.navigate("Contact")}>
            <Text style={styles.section2Title}>Contact Info</Text>
          </TouchableOpacity>
          <View style={styles.horizontalLine}></View>
          <TouchableOpacity onPress={() => navigation.navigate("Guardian")}>
            <Text style={styles.section2Title}>Guardian Info</Text>
          </TouchableOpacity>
          <View style={styles.horizontalLine}></View>
          <TouchableOpacity onPress={() => navigation.navigate("Password")}>
            <Text style={styles.section2Title}>Change Password</Text>
          </TouchableOpacity>
          <View style={styles.horizontalLine}></View>

        </ScrollView>
      </SafeAreaView>
    </AppLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20
  },
  text: {
    color: "#323643",
    fontSize: 18,
    fontFamily: "Roboto"
  },
  headingText: {
    fontWeight: "700",
    fontSize: 30,
    marginBottom: 30
  },
  topHeadingContainer: {
    flexDirection: "row"
  },
  heading: {
    flex: 1,
    marginLeft: 10
  },
  backButton: {
    marginTop: -5
  },
  editBlock: {
    marginVertical: 10
  },
  editContainer: {
    flexDirection: "row",
    marginTop: 10
  },
  editTitle: {
    color: "#9DA3B4",
    fontSize: 17,
    fontWeight: "700"
  },
  editHeading: {
    flex: 1,
    fontSize: 17,
    fontWeight: "600"
  },
  editButton: {
    color: "#0AC4BA",
    fontSize: 17,
    fontWeight: "700"
  },
  horizontalLine: {
    borderBottomColor: "#C5CCD6",
    borderBottomWidth: 1,
    marginVertical: 30
  },
  section2Title: {
    color: "#323643",
    fontSize: 17,
    fontWeight: "600"
  },
  mt2: {
    marginTop: 20
  },
  radioButtonContainer: {
    flexDirection: "row"
  },
  radioButtonTitle: {
    flex: 1
  },
  button: {
    borderRadius: 5,
    padding: 10,
    paddingHorizontal: 30,
    backgroundColor: "#0AC4BA",
    elevation: 2
  },
  textStyle: {
    color: "white"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default ProfileScreen;
