import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import Colors from "@/constants/Colors";
import { NewsContext } from "@/context";

const SubHeading = ({ label }: { label: string }) => {
  const {dark}=useContext(NewsContext)
  return (
    <View style={styles.container}>
      <Text style={{...styles.heading , color:dark? Colors.Text:"black"}}>{label}</Text>
      <TouchableOpacity>
        <Text style={styles.btn}>Show all</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SubHeading;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical:5
  },
  heading:{
    color:Colors.Text,
    fontSize:28,
    fontWeight:"bold",
    borderBottomWidth:2,
    borderRadius:12,
    paddingBottom:4,
    borderCurve:"circular",
    borderColor:Colors.Primary
    
  },
  btn:{
    color:Colors.Primary

  }
});
