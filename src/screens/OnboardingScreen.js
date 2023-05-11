import { useState } from "react";
import { Image, Text, View } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { onboardingImage } from "../data/OnboardingData";
import {COLORS, SIZES} from '../utils/constants/theme';
import { useNavigation } from "@react-navigation/native";

const OnboardingScreen = () => {

    const navigation = useNavigation()

    const [goToHome, setGoToHome] = useState(false);
    const buttonLabel = (label) => {
        return (
            <View
                style={{ 
                    padding: 11,
                }}
            >
                <Text
                    style={{
                        color: COLORS.primary,
                        fontSize: SIZES.h3,
                        fontWeight: '600',
                    }}
                >{label}</Text>
            </View>
        );
    }

    if ( !goToHome ) {
        return (
            <AppIntroSlider 
                data={onboardingImage}
                renderItem={( {item} ) => {
                    return (
                        <View 
                            style={{ 
                                flex: 1, 
                                alignItems: 'center', 
                                backgroundColor: '#FFF',
                                padding: 15,
                                paddingTop: 100, 
                            }}>
                            <Image 
                                source={item.image} 
                                style={{ 
                                    height: 400, 
                                    width: SIZES.width - 80
                                }}
                                resizeMode="contain"
                            />
                            <Text 
                                style={{
                                    fontWeight: 'bold',
                                    color: COLORS.title,
                                    fontSize: SIZES.h1,
                                }}
                            >
                                {item.title}
                            </Text>
                            <Text 
                                style={{
                                    textAlign: 'center',
                                    paddingTop: 5,
                                    color: COLORS.title
                                    }}
                            >
                                {item.description}
                            </Text>

                        </View>
                    );
                }}
                activeDotStyle={{ 
                    backgroundColor: COLORS.main,
                    width: 30,
                }}
                dotStyle={{ 
                    backgroundColor: COLORS.primary,
                }}
                showSkipButton
                renderSkipButton={ () => buttonLabel("Sautez") }
                renderDoneButton={ () => buttonLabel("Allez-y") }
                renderNextButton={ () => buttonLabel("Suivant") }
                onDone={ () => {
                    setGoToHome(true);
                    navigation.navigate('HomeScreen');
                }}
            />
        );
    }

    // return (
    //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFF' }}>
    //         <Image 
    //             source={require('./../../assets/onboarding/cookingOnboarding.png')} 
    //             style={{ width: 400, height: 400 }} />
    //         <Text>OnboardingScreen Page 🚀</Text>
    //     </View>
    // );
}

export default OnboardingScreen;