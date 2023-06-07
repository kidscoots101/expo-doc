import { StyleSheet, Button, View, Alert } from "react-native";
import React from "react";

const Buttons = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        title="Press me"
        color="#f194ff"
        onPress={() => Alert.alert("You just pressed the button.")}
      />
    </View>
  );
};

export default Buttons;

const styles = StyleSheet.create({});
