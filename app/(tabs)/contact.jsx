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

      <SafeAreaView style={{ margin: "auto" }}>
        <View style={styles.groupWrap}>
          <View style={styles.inputWrap}>
            <Text style={styles.textLabel}>First Name</Text>
            <TextInput
              placeholder="Enter Something"
              style={styles.inputBox}
            ></TextInput>
          </View>
          <View style={styles.inputWrap}>
            <Text style={styles.textLabel}>Last Name</Text>
            <TextInput
              placeholder="Enter Something"
              style={styles.inputBox}
            ></TextInput>
          </View>
        </View>
        <View style={styles.inputWrap}>
          <Text style={styles.textLabel}>Email Address</Text>
          <TextInput
            placeholder="Enter Something"
            style={styles.inputBox}
          ></TextInput>
        </View>
        <View style={styles.inputWrap}>
          <Text style={styles.textLabel}>Phone Number</Text>
          <TextInput
            placeholder="Enter Something"
            style={styles.inputBox}
          ></TextInput>
        </View>
        <View style={styles.inputWrap}>
          <Text style={styles.textLabel}>Message</Text>
          <TextInput
            placeholder="Enter Something"
            style={styles.inputBox}
          ></TextInput>
        </View>
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
    fontSize: 16,
    backgroundColor: "#fff",
    marginBottom: 16,
    // maxWidth: 600,
  },
  textLabel: {
    fontFamily: "InriaSans-Bold",
    fontSize: 24,
    marginBottom: 8,
  },
  groupWrap: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    // maxWidth: 600,
    gap: 20,
  },
  inputWrap: {
    flex: 1,
    // width: "40%",
  },
});
