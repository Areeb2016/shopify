import "react-native-gesture-handler";
import React, {useEffect, useState} from 'react'
import {Card, Input, Button} from 'react-native-elements'
import {Text, View, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import {connect} from 'react-redux'
import {addFood} from '../redux/actions/food'

function ReduxScreen(props){
    console.log("HRTT", props)
    const [food, setFood] = useState(null)

    return(
        <LinearGradient colors={['#054AA5', '#8548BE', '#8548BE']} useAngle={true} angle={45} angleCenter={{x:0.5, y:0.5}} style={styles.linearGradient}>
            
            <View style={{backgroundColor:'white', marginHorizontal:20}}>
            <View style={{marginTop:20}}>
            <Input
                label='Name'
                onChangeText={(food) => setFood(food)}
            />
            </View>

           <TouchableOpacity style={{alignSelf:'flex-end', marginTop:10, paddingVertical:25, marginRight:10}} onPress={() => props.add(food)}>
                <LinearGradient colors={['#054AA5', '#8548BE', '#8548BE']} useAngle={true} angle={45} angleCenter={{x:0.5, y:0.5}} style={{borderRadius:60, paddingHorizontal:22, paddingVertical:20}} >
                    <FontAwesome5 name='arrow-right' size={20} color='white'/>
                </LinearGradient>
           </TouchableOpacity>
            </View>
           
            <FlatList style={{marginTop:5}}
                    data = {props.foods}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal={true}
                    renderItem = {({item, index}) => {
                    return(
                    <View>
                        <Card>
                            <Text style={{color:'#054AA5', fontSize:12}}>{item.name}</Text>
                        </Card>
                    </View>
                    )}}
                />

        
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

  const mapStateToProps = (state) => {
      return{
          foods: state.foodReducer.data
      }
  }

  const mapDispatchToProps = (dispatch) => {
      return{
          add: (food) => dispatch(addFood(food))
      }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(ReduxScreen);