import { TopNavigationBar } from "@/components";
import { NewsContext } from "@/context";
import { DiscoverScreen, NewsScreens } from "@/screens";
import { useContext, useState } from "react";
import { useWindowDimensions } from "react-native";
import { SceneMap, TabView } from "react-native-tab-view";

const renderScene = SceneMap({
  first: DiscoverScreen,
  second: NewsScreens,
});

export default function TopTabLayout() {
  const layout = useWindowDimensions();
 const {index, setIndex}= useContext(NewsContext)
  const [routes] = useState([
    { key: "first", title: "First" },
    { key: "second", title: "Second" },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={() => (
        <TopNavigationBar />
      )}
    />
  );
}
