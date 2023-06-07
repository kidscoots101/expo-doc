import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React from "react";
import MapView from "react-native-maps";

const PAGES = [
  { id: 1, name: "Maps" },
  { id: 2, name: "Camera" },
  { id: 3, name: "Notifications" },
];

const Api = ({ navigation }) => {
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
    const handleNavigation = (name) => {
      if (name === "Maps") {
        navigation.navigate("Map");
      } else if (name === "Camera") {
        navigation.navigate("Camera");
      } else if (name === "Flatlist") {
        navigation.navigate("Flatlists");
      } else if (name === "Image") {
        navigation.navigate("Images");
      } else if (name === "ImageBackground") {
        navigation.navigate("Imagebg");
      }
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

export default Api;

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
