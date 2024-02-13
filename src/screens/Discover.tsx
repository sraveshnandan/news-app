import { View, Text, ScrollView, TextInput } from "react-native";
import React, { useContext, useState } from "react";
import Colors from "@/constants/Colors";
import { CategorySlider, SourceContainer, SubHeading } from "@/components";
import { categories, sources } from "@/utils/Api";
import { NewsContext } from "@/context";

const Discover = () => {
  const [searchText, setSearchText] = useState<string>("")
  const {dark}=useContext(NewsContext)
  return (
    <ScrollView style={{ flex: 1, backgroundColor:dark? Colors.Gray : "#f6f5f7"  }}>
      {/* Search Section  */}
        <View>
          <TextInput
          value={searchText}
          onChangeText={(value)=> setSearchText(value)}

          />
        </View>
      {/* Category section  */}
      <SubHeading label="Category" />
      <View>
        <CategorySlider category={categories} />
      </View>
      {/* Sources Section  */}
      <SubHeading label="Sources" />
      <SourceContainer source={sources} />
      {/* exta section  */}
    </ScrollView>
  );
};

export default Discover;
