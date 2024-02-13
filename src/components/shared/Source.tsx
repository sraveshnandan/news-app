import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext } from "react";
import { ISources } from "@/types";
import { NewsContext } from "@/context";
import Colors from "@/constants/Colors";

const Source = ({ source }: { source: ISources[] }) => {
  const {setSource}:any=useContext(NewsContext)
  return (
    <ScrollView>
      <View style={styles.container}>
        {source &&
          source.map((item: ISources, index: number) => (
            <TouchableOpacity onPress={()=> setSource(item.id)} key={index}>
              <Image
                style={{
                  width: 180,
                  height: 180,
                  borderRadius: 16,
                  borderColor:Colors.Primary,
                  borderWidth:1,
                  resizeMode:"contain"
                }}
                source={{ uri: item.pic }}
              />
            </TouchableOpacity>
          ))}
      </View>
    </ScrollView>
  );
};

export default Source;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
    gap: 20,
    width: Dimensions.get("screen").width,
    flexWrap: "wrap",
   
  },
});
