import { Text, View } from "react-native";
import TopHeaderComponent from "../components/headers/TopHeaderComponent";
import { COLORS } from "../utils/constants/theme";
import CategoriesComponent from "../components/categories/CategoriesComponent";
import TitleHeading from "../components/heading/TitleHeading";
import JucesComponent from "../components/juces/JucesComponent";

const Home = () => {
    return (
        <View 
            style={{ 
                height: '100%', 
                width: '100%', 
                backgroundColor: COLORS.blue, 
            }}
        >
            <TopHeaderComponent />
            <CategoriesComponent />
            <TitleHeading label={'Most Popular'} />
            <JucesComponent />
        </View>
    );
}

export default Home;