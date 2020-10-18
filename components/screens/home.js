import "react-native-gesture-handler";
import React, {useEffect, useState} from 'react'
import {Card, Input, Button} from 'react-native-elements'
import {Text, View, StyleSheet, TouchableOpacity, FlatList, Image, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { SvgUri } from 'react-native-svg';
import MIcons from 'react-native-vector-icons/MaterialIcons'
import Cat1 from '../assets/s1.svg'
import Cat2 from '../assets/s2.svg'
import Cat3 from '../assets/s3.svg'
import Cat4 from '../assets/s4.svg'
import Tile1 from '../assets/tg.svg'
import Tile2 from '../assets/col.svg'
import Tile3 from '../assets/coln.svg'

export function HomeScreen({navigation}){

    const data1 = [
        {
            image:'/Users/digitalbites/Desktop/shopify/components/assets/ginger.png' ,
            name: 'Ginger',
            price: '60.00',
            fav: true
        },
        {
            image:'/Users/digitalbites/Desktop/shopify/components/assets/ginger.png' ,
            name: 'Ginger',
            price: '60.00',
            fav: false
        },
        {
            image:'/Users/digitalbites/Desktop/shopify/components/assets/ginger.png' ,
            name: 'Ginger',
            price: '60.00',
            fav: false
        },
        {
            image:'/Users/digitalbites/Desktop/shopify/components/assets/ginger.png' ,
            name: 'Ginger',
            price: '60.00',
            fav: true
        }
    ]

    return(
        <View style={{flex:1}}>

            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#8548BE', '#054AA5']} style={{paddingVertical:20, paddingHorizontal:15}}>
                <FontAwesome5 name='bars' color='white' size={30} style={{position:'absolute', top:18, left:20}}/>
                <Text style={{alignSelf:'center', fontSize:20, fontWeight:'bold', color:'white', }}>STORE</Text>
                <FontAwesome5 name='camera' color='white' size={30} style={{position:'absolute', top:18, right:20}} onPress={() => navigation.navigate('Upload')}/>
            </LinearGradient>    

            <View style={{backgroundColor:'#EAF1F9', flex:1}}>
                <View style={{backgroundColor:'white', paddingBottom:20, borderBottomLeftRadius:40, borderBottomRightRadius:40, elevation:10, marginHorizontal:1}}>
                <Text style={{color:'#102134', marginLeft:20, marginTop:10}}>All Categories</Text>
                <View style={{flexDirection:'row', marginTop:20}}>
                    <View>
                        <Cat4 width={95} height={60} />
                        <Text style={{textAlign:'center', marginTop:5, color:'#99A0B0', fontSize:12}}>Eggs</Text>
                    </View>
                    <View>
                        <Cat3 width={95} height={60} />
                        <Text style={{textAlign:'center', marginTop:5, color:'#99A0B0', fontSize:12}}>Meat</Text>
                    </View>
                    <View>
                        <Cat2 width={95} height={60} />
                        <Text style={{textAlign:'center', marginTop:5, color:'#99A0B0', fontSize:12}}>Vegetables</Text>
                    </View>
                    <View>
                        <Cat1 width={95} height={60} />
                        <Text style={{textAlign:'center', marginTop:5, color:'#99A0B0', fontSize:12}}>Ghee</Text>
                    </View>
                </View>
                </View>

            <ScrollView>
                <View style={{marginTop:30, flexDirection:'row'}}>
                    <Text style={{marginLeft:20}}>Featured Products</Text>
                    <View style={{flexDirection:'column', width:'60%'}}>
                        <View style={{flexDirection:'row', alignSelf:'flex-end'}}>
                        <Text style={{color:'#99A0B0', fontSize:12, marginTop:2}}>View all</Text>
                        <MIcons name='keyboard-arrow-right' size={22} style={{marginLeft:3, marginTop:-1}} color='#99A0B0'/>
                        </View>
                    </View>
                </View>
                <FlatList style={{marginTop:5}}
                    data = {data1}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal={true}
                    renderItem = {({item, index}) => {
                    return(
                    <View>
                        <Card>
                            <View>
                                <Tile1/>
                                {(item.fav == true) && (
                                <View style={{alignSelf:'flex-end', marginTop:-16}}>
                                <Tile2/> 
                                </View>   
                                )}
                                {(item.fav == false) && (
                                <View style={{alignSelf:'flex-end', marginTop:-16}}>
                                <Tile3/> 
                                </View>   
                                )}
                            </View>
                            <Image source={require('/Users/digitalbites/Desktop/shopify/components/assets/ginger.png')} style={{height:100, width:80, resizeMode:'contain'}} />
                            <Text style={{color:'#6E7989', fontSize:12}}>{item.name}</Text>
                            <Text style={{color:'#054AA5', fontSize:12}}>Rs.{item.price}</Text>
                        </Card>
                    </View>
                    )}}
                />

                <View style={{marginTop:20, flexDirection:'row'}}>
                    <Text style={{marginLeft:20}}>New Products</Text>
                    <View style={{flexDirection:'column', width:'67%'}}>
                        <View style={{flexDirection:'row', alignSelf:'flex-end'}}>
                        <Text style={{color:'#99A0B0', fontSize:12, marginTop:2}}>View all</Text>
                        <MIcons name='keyboard-arrow-right' size={22} style={{marginLeft:3, marginTop:-1}} color='#99A0B0'/>
                        </View>
                    </View>
                </View>
                <FlatList style={{marginTop:5}}
                    data = {data1}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal={true}
                    renderItem = {({item, index}) => {
                    return(
                    <View>
                        <Card>
                            <View>
                                <Tile1/>
                                {(item.fav == true) && (
                                <View style={{alignSelf:'flex-end', marginTop:-16}}>
                                <Tile2/> 
                                </View>   
                                )}
                                {(item.fav == false) && (
                                <View style={{alignSelf:'flex-end', marginTop:-16}}>
                                <Tile3/> 
                                </View>   
                                )}
                            </View>
                            <Image source={require('/Users/digitalbites/Desktop/shopify/components/assets/ginger.png')} style={{height:100, width:80, resizeMode:'contain'}} />
                            <Text style={{color:'#6E7989', fontSize:12}}>{item.name}</Text>
                            <Text style={{color:'#054AA5', fontSize:12}}>Rs.{item.price}</Text>
                        </Card>
                    </View>
                    )}}
                />

                <View style={{marginTop:20, flexDirection:'row'}}>
                    <Text style={{marginLeft:20}}>Favorites</Text>
                    <View style={{flexDirection:'column', width:'74%'}}>
                        <View style={{flexDirection:'row', alignSelf:'flex-end'}}>
                        <Text style={{color:'#99A0B0', fontSize:12, marginTop:2}}>View all</Text>
                        <MIcons name='keyboard-arrow-right' size={22} style={{marginLeft:3, marginTop:-1}} color='#99A0B0'/>
                        </View>
                    </View>
                </View>
                <FlatList style={{marginTop:5}}
                    data = {data1}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal={true}
                    renderItem = {({item, index}) => {
                    return(
                    <View>
                        <Card>
                            <View>
                                <Tile1/>
                                {(item.fav == true) && (
                                <View style={{alignSelf:'flex-end', marginTop:-16}}>
                                <Tile2/> 
                                </View>   
                                )}
                                {(item.fav == false) && (
                                <View style={{alignSelf:'flex-end', marginTop:-16}}>
                                <Tile3/> 
                                </View>   
                                )}
                            </View>
                            <Image source={require('/Users/digitalbites/Desktop/shopify/components/assets/ginger.png')} style={{height:100, width:80, resizeMode:'contain'}} />
                            <Text style={{color:'#6E7989', fontSize:12}}>{item.name}</Text>
                            <Text style={{color:'#054AA5', fontSize:12}}>Rs.{item.price}</Text>
                        </Card>
                    </View>
                    )}}
                />

            </ScrollView>
            </View>
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
