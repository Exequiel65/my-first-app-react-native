import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import { Formik, useField } from 'formik'
import StyleTextInput from '../components/StyleTextInput';
import StyledText from '../components/StyledText';
import { loginValidationSchema } from '../validationSchemas/login'

const initialValues = {
    email : "",
    password : ""
}

const styles = StyleSheet.create({
    error :{
        color : 'red',
        fontSize : 12,
        marginBottom : 20,
        marginTop: -2
    },
    form : {
        margin: 12
    }
})

const FormikInputValue = ({name, ...props}) =>{
    const [ field, meta, helpers ] = useField(name)
    return (
        <>
            <StyleTextInput 
                error={meta.error}
                value={field.value}
                onChangeText={value => helpers.setValue(value)}
                {...props}
            ></StyleTextInput>
            {meta.error && <StyledText style={styles.error} >{meta.error}</StyledText>}
        </>
    )
}

const Login = () => {
    return (
        <View style={{margin: 12}}>
            <Formik  validationSchema={loginValidationSchema} styles={{margin : 12}} initialValues={initialValues} onSubmit={values=> console.log(values)}>
                {({ handleSubmit})=>{
                    return <View styles={{padding : 12}}>
                        <FormikInputValue
                            placeholder='Email' 
                            name='email'
                        ></FormikInputValue>
                        <FormikInputValue 
                            placeholder='Password' 
                            name='password'
                            secureTextEntry
                            
                        ></FormikInputValue>
                        <Button onPress={handleSubmit} title='Log In' />
                    </View>
                }}
            </Formik>
        </View>
    );
}


export default Login;
