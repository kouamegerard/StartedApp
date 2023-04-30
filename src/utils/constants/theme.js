import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('screen');

export const COLORS = {
    main: '#F9A826',
    second: '#f52d56',
    primary: '#3e357b',
    title: '#072F4A',
    white: '#FFFFFF',
    lightGrey: '#D3D6D6',
    grey: '#C1C0C9',
    blue: '#1a2941',
    yellow: '#F4D03F',
};

export const SIZES = {
    h1: 22,
    h2: 20,
    h3: 18,
    h4: 16,
    h5: 14,
    h6: 12,

    width,
    height,
}