import "react-native-gesture-handler";
import React, {useEffect, useState} from 'react'
import {Card, Input, Button} from 'react-native-elements'
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MIcons from 'react-native-vector-icons/MaterialIcons'
import ImagePicker from 'react-native-image-picker';

export function UploadScreen({navigation}){

    const [image, setImage] = useState('')
    const [show, setShow] = useState(false)

    const options = {
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      };

    function imagePicker(){
        ImagePicker.launchImageLibrary(options, (response) => {
          if (response.didCancel) {
            console.log('User cancelled image picker');
            setShow(false)
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
            setShow(false)
          } else{
            const source = { uri: 'data:image/jpeg;base64,' + response.data }
            setImage(source)
            setShow(true)
          }
          });
    }

    return(
        <View style={{flex:1}}>

            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#8548BE', '#054AA5']} style={{paddingVertical:20, paddingHorizontal:15}}>
                <MIcons name='arrow-back' color='white' size={30} style={{position:'absolute', top:18, left:20}} onPress={() => navigation.goBack()}/>
                <Text style={{alignSelf:'center', fontSize:20, color:'white', }}>UPLOAD A PHOTO</Text>
            </LinearGradient>  

            
            <View style={{top:'25%', bottom:'50%', left:'25%'}}>
                <Image source={show == false ? {uri:'https://nameproscdn.com/a/2018/05/106343_82907bfea9fe97e84861e2ee7c5b4f5b.png'} : image} style={{width:'50%', height:'50%'}}/>
            </View>

            <LinearGradient colors={['#054AA5', '#8548BE']} style={{position:'absolute', bottom:0, right:0, left:0, flexDirection:'row', elevation:1}}>
            <TouchableOpacity style={{padding:30}} onPress={imagePicker}>
                    <Text style={{color:'white', fontSize:16, marginLeft:10}}>{show == true ? "CHANGE IMAGE" : "CAMERA ROLL" }</Text>
                </TouchableOpacity>
                <View style={{backgroundColor:'white', width:1, height:'100%', marginLeft:20}}/>
                <TouchableOpacity style={{padding:30}} onPress={imagePicker}>
    <Text style={{color:'white', fontSize:16, marginLeft:show == true ? 20 : 10 }}>{show == true ? "CONTINUE" : "UPLOAD PHOTO"}</Text>
                </TouchableOpacity>
            </LinearGradient> 

        </View>
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
