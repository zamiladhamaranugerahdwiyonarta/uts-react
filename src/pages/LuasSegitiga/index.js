import React, { Component } from 'react'
import {StyleSheet, Button, Text, TextInput, View } from 'react-native'

export default class LuasSegitiga extends Component {
    constructor(props){
      super(props)
      this.state = {
        alas:0,
        luas:0,
        tinggi:0
      };
    }
  
    render() {
      const { navigation } = this.props
      return (  
        <View >
  
          <View>
             <Text style = {{padding: 10, fontSize: 16, color: 'black', textAlign:'center'}} >
              Menghitung luas Segitiga
            </Text>
           </View>
          
          <View>
              <TextInput style = {{height: 40}}
                placeholder="Input Alas"
                keyboardType = 'numeric'
                onChangeText={(alas)=>this.setState({alas})}
              />
              <TextInput style = {{height: 40}}
                placeholder="Input Tinggi"
                keyboardType = 'numeric'
                onChangeText={(tinggi)=>this.setState({tinggi})}
              />
              <View style={{margin:15}}>
              <Button
                onPress={()=>this.setState({
                  luas: (this.state.alas*this.state.tinggi/2)
                })}
                accessibilityLabel="HITUNG"
                title="Hitung"
              />
              </View>
              <View style={{margin:15}}>
              <Button title="Kembali" onPress={ () => navigation.replace('Home')}/>
              </View>
         </View>
  
        <View>
           <Text style = {{padding: 10, fontSize: 20}} >
               Alas =  {this.state.alas} {"\n"}
               Tinggi =  {this.state.tinggi} {"\n"}
               Luas Segitiga = {this.state.luas}
           </Text>
        </View>       
     </View>   
      );
    }
}

const styles = StyleSheet.create({})

