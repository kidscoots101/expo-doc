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
import Components from "./screens/Components";
import Api from "./screens/Api";
import { StatusBar } from "expo-status-bar";
import Activity_Indicator from "./components/ActivityIndicator";

const HomeScreen = ({ navigation }) => {
  const PAGES = [
    { id: 1, name: "Components" },
    { id: 2, name: "APIs" },
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
    if (name === "Components") {
      navigation.navigate("Components");
    } else if (name === "APIs") {
      navigation.navigate("APIs");
    }
  };

  return (
    <SafeAreaView>
      <Text style={{ padding: 20, fontWeight: "bold", fontSize: 40 }}>
        React Native
      </Text>
      <FlatList
        data={PAGES}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Components" component={Components} />
        <Stack.Screen name="APIs" component={Api} />
        <Stack.Screen name="ActivityIndicator" component={Activity_Indicator} />
      </Stack.Navigator>
    </NavigationContainer>
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
export default App;
