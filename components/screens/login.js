import "react-native-gesture-handler";
import React, {useEffect, useState} from 'react'
import {Card, Input, Button} from 'react-native-elements'
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

export function LoginScreen({navigation}){

    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')

    return(
        <LinearGradient colors={['#054AA5', '#8548BE', '#8548BE']} useAngle={true} angle={45} angleCenter={{x:0.5, y:0.5}} style={styles.linearGradient}>
            
            <Text style={{alignSelf:'center', color:'white', fontSize:20, marginTop:20, marginBottom:20}}>SIGNIN</Text>
            <View style={{backgroundColor:'white', marginHorizontal:20, elevation:10, padding:20, borderBottomLeftRadius:150, borderBottomRightRadius:40, borderTopLeftRadius:40, borderTopRightRadius:40}}>
            <View style={{marginTop:20}}>
            <Input
                label='Email'
                // placeholder="email@gmail.com"
                leftIcon={{ type: 'material-icons', name: 'email', color: 'grey' }}
            />
            <Input
                label='Password'
                // placeholder="email@gmail.com"
                leftIcon={{ type: 'material-icons', name: 'lock', color: 'grey' }}
            />
            <Text style={{alignSelf:'flex-end', color:'#8548BE', marginTop:-15, marginBottom:10, marginRight:20}}>Forget Password?</Text>
            </View>
           <TouchableOpacity style={{alignSelf:'flex-end', marginTop:10, paddingVertical:25, marginRight:10}} onPress={() => navigation.navigate('Home')}>
                <LinearGradient colors={['#054AA5', '#8548BE', '#8548BE']} useAngle={true} angle={45} angleCenter={{x:0.5, y:0.5}} style={{borderRadius:60, paddingHorizontal:22, paddingVertical:20}} >
                    <FontAwesome5 name='arrow-right' size={20} color='white'/>
                </LinearGradient>
           </TouchableOpacity>
            </View>
            <Text style={{alignSelf:'center', color:'white', fontSize:16, marginTop:20}}>Don't have an account? click here</Text>
        
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    linearGradient: {
      flex: 1,
    },
    buttonText: {
      fontSize: 18,
      fontFamily: 'Gill Sans',
      textAlign: 'center',
      margin: 10,
      color: '#ffffff',
      backgroundColor: 'transparent',
    },
  });
