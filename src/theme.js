import { Platform } from 'react-native'

const theme ={
    appBar:{
        primary: '#24292e',
        secondaryText : '#999',
        primaryText: '#fff'
    },
    colors : {
        textPrimary : '#24292e',
        textSecondary: '#586069',
        primary : Platform.select({
           android : '#0366d6',
           ios : 'orange',
           default : 'purple'
        }),  
        white : '#fefefe'
    },
    fontSizes: {
        body : 14,
        subheading: 16
    },
    fonts: {
        main : Platform.select({
            android : 'Roboto',
            ios : 'Arial',
            default : 'System'
        })
    },
    fontWeigths: {
        normal: '400',
        bold : '700'
    }
}

export default theme