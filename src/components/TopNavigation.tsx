import { View, Text, StyleSheet, Dimensions } from "react-native";
import React, { Dispatch, SetStateAction, useContext, useState } from "react";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import Colors from "@/constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { NewsContext } from "@/context";
import { INewsContextType } from "@/types";
type prop = {
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
};
const screenWidth = Dimensions.get("screen").width;
const TopNavigation = () => {
  const {
    dark,
    setDark,
    index,
    setIndex,
    setCategory,
  }: INewsContextType | any = useContext(NewsContext);

  return (
    <SafeAreaView
      style={{
        ...styles.container,
        backgroundColor: dark ? Colors.Gray : Colors.Text,
      }}
    >
      {/* Left Section  */}
      <View
        style={{
          ...styles.section,
          paddingLeft: 10,
        }}
      >
        {index === 0 ? (
          <TouchableOpacity
            onPress={() => setDark(!dark)}
            style={styles.section}
          >
            {dark ? (
              <Ionicons
                name="sunny-outline"
                color={dark ? Colors.Text : Colors.Gray}
                size={22}
              />
            ) : (
              <Ionicons
                name="moon-outline"
                color={dark ? Colors.Text : "black"}
                size={22}
              />
            )}
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.section} onPress={() => setIndex(0)}>
            <Entypo name="chevron-left" size={25} color={Colors.Primary} />
            <Text
              style={{
                color: dark ? Colors.Text : "black",
                fontSize: 13,
                fontWeight: "bold",
              }}
            >
              Discover
            </Text>
          </TouchableOpacity>
        )}
      </View>
      {/* Middle Section  */}
      <View
        style={{
          ...styles.section,
          justifyContent: "center",
        }}
      >
        {index === 0 ? (
          <Text style={{ ...styles.text, color: dark ? Colors.Text : "black" }}>
            Discover
          </Text>
        ) : (
          <Text style={{ ...styles.text, color: dark ? Colors.Text : "black" }}>
            All News
          </Text>
        )}
      </View>
      {/* Right Section  */}
      <View
        style={{
          ...styles.section,
          justifyContent: "flex-end",
          paddingRight: 15,
        }}
      >
        {index === 0 ? (
          <TouchableOpacity
            onPress={() => setIndex(1)}
            style={{
              ...styles.section,
              justifyContent: "flex-end",
              paddingRight: 15,
            }}
          >
            <Text
              style={{
                color: dark ? Colors.Text : "black",
                fontSize: 13,
                fontWeight: "bold",
              }}
            >
              All News
            </Text>
            <Ionicons name="chevron-forward" size={20} color={Colors.Primary} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => setCategory("general")}
            style={{ paddingRight: 10 }}
          >
            <Ionicons name="refresh-outline" size={24} color={Colors.Primary} />
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    borderBottomColor: Colors.Gray,
    borderBottomWidth: 0.4,
    paddingVertical:10,
    justifyContent: "space-between",
    borderColor: "#0a9999",
  },
  text: {
    color: Colors.Text,
    fontWeight: "bold",
    fontSize: 18,
    borderBottomWidth: 4,
    borderCurve: "circular",
    borderColor: Colors.Primary,
    borderRadius: 12,
  },
  section: {
    width: screenWidth / 3,
    flexDirection: "row",

    alignItems: "center",
    height: 35,
  },
});

export default TopNavigation;
