import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";

export default function home() {
  return (
    <View>
      <Image
        source={require("./../../assets/images/oranges/pexels-enginakyurt-1435740.jpg")}
        alt="Close-up Photo of Sliced Orange and Grapefruit Fruits"
        style={styles.headerImage}
      />
      <View style={styles.container}>
        <Text
          style={{
            fontFamily: "InriaSans-Bold",
            fontSize: 48,
            color: Colors.linkColor,
          }}
        >
          HOME
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo minima,
          aut fugiat tenetur veritatis recusandae numquam vitae dolor aliquam.
          Qui, eveniet nesciunt explicabo delectus quae unde, dignissimos
          nostrum fuga reiciendis soluta, incidunt debitis. Consectetur vero
          nemo reiciendis iure architecto saepe ut, recusandae facere veniam
          minima impedit labore est eos sed.
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  headerImage: {
    height: 400,
    width: "100%",
    objectFit: "cover",
  },
  container: {
    padding: 15,
  },
});
