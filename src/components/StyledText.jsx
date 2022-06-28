import React from 'react';
import {StyleSheet, Text} from 'react-native';
import theme from '../theme'

const styles = StyleSheet.create({
    text : {
        fontSize: theme.fontSizes.body,
        color: theme.colors.textPrimary,
        fontFamily: theme.fonts.main
    },
    colorPrimary:{
        color : theme.colors.primary
    },
    colorSecondary : {
        color : theme.colors.textSecondary
    },
    bold : {
        fontWeight: theme.fontWeigths.bold
    },
    subheading : {
        fontSize: theme.fontSizes.subheading
    },
    textAlignCenter:{
        textAlign : 'center'
    }

})

export default function StyledText({ align ,children, color, fontSize, fontWeight, style, ...restOfProps}) {
    const textStyles = [
        styles.text,
        align === 'center' && styles.textAlignCenter,
        color === 'primary' && styles.colorPrimary,
        color === 'secondary' && styles.colorSecondary,
        fontSize === 'subheading' && styles.subheading,
        fontWeight === 'bold' && styles.bold,
        style
    ]
    return (
        <Text style={textStyles} {...restOfProps}>
            {children}
        </Text>
    );
};
