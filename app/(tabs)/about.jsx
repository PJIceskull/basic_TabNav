import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";

export default function about() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text
        style={{
          fontFamily: "InriaSans-Bold",
          fontSize: 48,
          color: Colors.linkColor,
          marginLeft: "10%",
          marginBottom: 45,
        }}
      >
        About Us
      </Text>
      <View style={styles.profileWrap}>
        <Image
          source={require("./../../assets/images/profile_pic/pexels-olly-3778876.jpg")}
          style={styles.profilePic}
          alt="Man in Black Suit Jacket Standing Near Railings"
        ></Image>
        <View style={styles.textWrap}>
          <Text style={styles.employerName}>Alex Jackson</Text>
          <Text style={styles.paragraphText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            officia soluta porro nam at laboriosam non, nostrum, harum illum
            tempora repellat magni quis provident explicabo commodi tempore. Ut
            deserunt quas, non dolores, veniam nam incidunt doloribus qui a ea
            ratione inventore hic. Aliquid, ullam ipsa.
          </Text>
        </View>
      </View>
      <View style={styles.profileWrap}>
        <Image
          source={require("./../../assets/images/profile_pic/pexels-olly-3778876.jpg")}
          style={styles.profilePic}
          alt="Man in Black Suit Jacket Standing Near Railings"
        ></Image>
        <View style={styles.textWrap}>
          <Text style={styles.employerName}>Alex Jackson</Text>
          <Text style={styles.paragraphText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            officia soluta porro nam at laboriosam non, nostrum, harum illum
            tempora repellat magni quis provident explicabo commodi tempore. Ut
            deserunt quas, non dolores, veniam nam incidunt doloribus qui a ea
            ratione inventore hic. Aliquid, ullam ipsa.
          </Text>
        </View>
      </View>
      <View style={styles.profileWrap}>
        <Image
          source={require("./../../assets/images/profile_pic/pexels-olly-3778876.jpg")}
          style={styles.profilePic}
          alt="Man in Black Suit Jacket Standing Near Railings"
        ></Image>
        <View style={styles.textWrap}>
          <Text style={styles.employerName}>Alex Jackson</Text>
          <Text style={styles.paragraphText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            officia soluta porro nam at laboriosam non, nostrum, harum illum
            tempora repellat magni quis provident explicabo commodi tempore. Ut
            deserunt quas, non dolores, veniam nam incidunt doloribus qui a ea
            ratione inventore hic. Aliquid, ullam ipsa.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  profileWrap: {
    maxWidth: 800,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
    gap: 30,
    margin: "auto",
    marginBottom: 30,
  },
  profilePic: {
    height: 250,
    width: 250,
    objectFit: "cover",
    borderRadius: "50%",
    borderColor: Colors.linkColor,
    borderWidth: 5,
  },
  textWrap: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
  },
  employerName: {
    color: Colors.linkColor,
    fontSize: 21,
    fontFamily: "InriaSans-Bold",
  },
  paragraphText: {
    // width: "100%",
    maxWidth: 500,
  },
});
