import { NewsContextProvider } from "@/context";
import { StackNavigator} from "@/navigations";

const App = () => {
  return (
    <NewsContextProvider>
      <StackNavigator />
    </NewsContextProvider>
  );
};
export default App;
