import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  FlatList,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

const Components = ({ navigation }) => {
  const PAGES = [
    { id: 1, name: "ActivityIndicator" },
    { id: 2, name: "Button" },
    { id: 3, name: "Flatlist" },
    { id: 4, name: "Image" },
    { id: 5, name: "ImageBackground" },
    { id: 6, name: "Modal" },
  ];

  const renderItem = ({ item, index }) => {
    const isFirstItem = index === 0;
    const isLastItem = index === PAGES.length - 1;

    const borderRadiusStyle = {
      borderTopLeftRadius: isFirstItem ? 20 : 0,
      borderTopRightRadius: isFirstItem ? 20 : 0,
      borderBottomLeftRadius: isLastItem ? 20 : 0,
      borderBottomRightRadius: isLastItem ? 20 : 0,
    };
    const lineStyle = {
      borderBottomWidth: isLastItem ? 0 : 1, // Add border bottom only if it's not the last item
      borderBottomColor: "#ccc",
      marginHorizontal: 16,
    };
    return (
      <>
        <TouchableOpacity
          style={[styles.item, { padding: 10 }, borderRadiusStyle]}
          onPress={() => handleNavigation(item.name)}
        >
          <Text style={styles.title}>{item.name}</Text>
        </TouchableOpacity>
        {!isLastItem && <View style={lineStyle} />}
      </>
    );
  };

  const handleNavigation = (name) => {
    if (name === "ActivityIndicator") {
      navigation.navigate("ActivityIndicator");
    } else if (name === "Button") {
      navigation.navigate("Buttons");
    } else if (name === "Flatlist") {
      navigation.navigate("Flatlists");
    } else if (name === "Image") {
      navigation.navigate("Images");
    } else if (name === "ImageBackground") {
      navigation.navigate("Imagebg");
    }
  };

  return (
    <SafeAreaView>
      <FlatList
        style={{ marginTop: 30 }}
        data={PAGES}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "#eee",
    borderRadius: 20,
  },
  item: {
    backgroundColor: "white",
    marginHorizontal: 16,
    paddingVertical: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
export default Components;
