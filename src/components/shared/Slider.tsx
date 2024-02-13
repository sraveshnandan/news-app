import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { ICategory } from "@/types";
import { TouchableOpacity } from "react-native";
import Colors from "@/constants/Colors";
import { NewsContext } from "@/context";

const CategorySlider = ({ category }: { category: ICategory[] }) => {
  const { setCategory, setSource, category:data, dark } = useContext(NewsContext);
  return (
    <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false}>
      {category &&
        category.map((item: ICategory, index: number) => (
          <TouchableOpacity onPress={()=> setCategory(item.name)} style={{...styles.category}} key={index}>
            <Image
              style={{ width: 60, height: 60 , borderRadius:16, resizeMode:"contain"}}
              source={{ uri: item?.pic }}
            />
            <Text style={{...styles.text, color:dark? Colors.Text: "black"}}>{item.name}</Text>
          </TouchableOpacity>
        ))}
    </ScrollView>
  );
};

export default CategorySlider;

const styles = StyleSheet.create({
  container:{
      padding:10,
  },
  category: {
    flexDirection: "column",
    margin:10,
    height:120,
    alignItems:"center"
  },
  text: {
    color: Colors.Text,
    fontSize:18,
    textTransform:"capitalize"
  },
});
