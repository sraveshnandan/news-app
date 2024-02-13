import {
  Dimensions,
  Image,
  ImageBackground,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext } from "react";
import { IArticle } from "@/types";
import { NewsContext } from "@/context";
import Colors from "@/constants/Colors";

const SingleNews = ({ news, index }: { news: any; index: number }) => {
  const windowHeight = Dimensions.get("window").height;
  const windowWidth = Dimensions.get("window").width;
  const context = useContext(NewsContext);
  const { dark }:any = context;
  return (
    <View
      style={{
        width: windowWidth,
        height: windowHeight,
        backgroundColor: dark ? Colors.Gray : Colors.lightBg,
        transform: [{ scaleY: -1 }],
      }}
    >
      <Image
        source={{ uri: news.urlToImage }}
        style={{ height: "45%", resizeMode: "cover", width: windowWidth }}
      />

      <View style={styles.description}>
        <Text style={{ ...styles.title, color: dark ? Colors.Text : "black" }}>
          {news.title.slice(0, 100)}...
        </Text>
        <Text
          style={{ ...styles.content, color: dark ? Colors.Text : "black" }}
        >
          {news.description}
        </Text>
        <Text style={{ color: dark ? Colors.Text : "black" }}>
          Short by
          <Text style={{ fontWeight: "bold" }}>
            {" "}
            {news.author ?? "unknown"}
          </Text>
        </Text>
      </View>
      <ImageBackground
        blurRadius={30}
        style={styles.footer}
        source={{ uri: news.urlToImage }}
      >
        <TouchableOpacity onPress={() => Linking.openURL(news.url)}>
          <Text style={{ fontSize: 15, color: "white" }}>
            '{news?.content?.slice(0, 50)}...'
          </Text>
          <Text style={{ fontSize: 17, fontWeight: "bold", color: "white" }}>
            Read More
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default SingleNews;

const styles = StyleSheet.create({
  description: {
    padding: 15,
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    paddingBottom: 10,
  },
  content: { fontSize: 16, paddingBottom: 10 },
  footer: {
    height: 80,
    width: Dimensions.get("window").width,
    position: "absolute",
    bottom: 0,
    backgroundColor: "#d7be69",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
});
