import { Text, View } from "react-native";
import TopHeaderComponent from "../components/headers/TopHeaderComponent";
import { COLORS } from "../utils/constants/theme";
import CategoriesComponent from "../components/categories/CategoriesComponent";

const Home = () => {
    return (
        <View style={{ height: '100%', width: '100%', backgroundColor: COLORS.blue }}>
            <TopHeaderComponent />
            <CategoriesComponent />
            <Text>Home Screen Page 🚀</Text>
        </View>
    );
}

export default Home;