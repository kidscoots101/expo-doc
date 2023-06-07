import { StyleSheet, Image, View } from "react-native";
import React from "react";

const Images = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
      />
    </View>
  );
};

export default Images;

const styles = StyleSheet.create({
  tinyLogo: {
    width: 150,
    height: 150,
  },
});
