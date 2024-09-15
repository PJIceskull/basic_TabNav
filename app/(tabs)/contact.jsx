import { View, Text, SafeAreaView, TextInput, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";

export default function contact() {
  return (
    <View>
      <Text
        style={{
          fontFamily: "InriaSans-Bold",
          fontSize: 48,
          color: Colors.linkColor,
        }}
      >
        Contact
      </Text>
      {/* <View>
        <Text></Text>
      </View> */}

      <SafeAreaView>
        <Text style={styles.textLabel}>First Name</Text>
        <TextInput
          placeholder="Enter Something"
          style={styles.inputBox}
        ></TextInput>
        <Text style={styles.textLabel}>Last Name</Text>
        <TextInput
          placeholder="Enter Something"
          style={styles.inputBox}
        ></TextInput>
        <Text style={styles.textLabel}>Email Address</Text>
        <TextInput
          placeholder="Enter Something"
          style={styles.inputBox}
        ></TextInput>
        <Text style={styles.textLabel}>Phone Number</Text>
        <TextInput
          placeholder="Enter Something"
          style={styles.inputBox}
        ></TextInput>
        <Text style={styles.textLabel}>Message</Text>
        <TextInput
          placeholder="Enter Something"
          style={styles.inputBox}
        ></TextInput>
      </SafeAreaView>
    </View>
  );
}
const styles = StyleSheet.create({
  inputBox: {
    padding: 15,
    borderColor: Colors.linkColor,
    borderWidth: 2,
    fontFamily: "InriaSans-Regular",
  },
  textLabel: {
    fontFamily: "InriaSans-Bold",
    fontSize: 24,
  },
});
