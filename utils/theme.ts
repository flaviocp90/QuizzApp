import { createBox, createText } from '@shopify/restyle';
import {moderateScale} from 'react-native-size-matters';

const theme = {
    colors: {
        white: '#fff',
        primary: '#2133A0',
        text: '#272829',
        button: '#7C72FF',
        color: '#0C0D34',
        grey: '#BABD98',
        danger: '#ff0055',
        green: '#0BBF29',
        black: '#000',
    },

    spacing: {
        s: 8,
        m: 16,
        l: 24,
        xl: 40
    },

    breackpoints: {},

    borderRadius: {
        s: 4,
        m: 10,
        l: 25,
        xl: 75
    },

    textVariant: {
        title: {
            fontSize: moderateScale(15),
            color: 'white',  
        },
        body: {
            fontSize: 16,
            text: 'text',
            lineHeight: 25  
        },
    },
};

export default theme;
export type Theme = typeof theme;
export const Text = createText<Theme>();
export const Box = createBox<Theme>();
