import { View, Text, Dimensions, StyleSheet } from "react-native";
import React, { useContext, useState } from "react";
import { NewsContext } from "@/context";
import Carousel from "react-native-snap-carousel";
import { Loader, SingleNewsBox } from "@/components";
import Colors from "@/constants/Colors";

const News = () => {
  const { News, dark, loading }: any = useContext(NewsContext);
  const windowHeight = Dimensions.get("window").height;
  const [activeIndex, setActiveIndex] = useState<number>();
  return loading === false ? (
    <View
      style={{
        ...styles.carousel,
        backgroundColor: dark ? Colors.Gray : "#f6f6f7",
      }}
    >
      {News && (
        <Carousel
          layout="stack"
          itemHeight={windowHeight}
          firstItem={News?.length - 1}
          data={News}
          sliderHeight={300}
          vertical={true}
          renderItem={({ item, index }) => (
            <SingleNewsBox news={item} index={index} />
          )}
          onSnapToItem={(index) => setActiveIndex(index)}
        />
      )}
    </View>
  ) : (
    <Loader />
  );
};

const styles = StyleSheet.create({
  carousel: {
    flex: 1,
    transform: [{ scaleY: -1 }],
    backgroundColor: "black",
  },
});

export default News;
