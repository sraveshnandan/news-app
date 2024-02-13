import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TopTabLayout from "./TopTabNavigation";

const StackNavigator01 = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={TopTabLayout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator01;
