import React, { Component } from 'react'
import {StyleSheet, Button, Text, TextInput, View } from 'react-native'

export default class LuasSegitiga extends Component {
    constructor(props){
      super(props)
      this.state = {
        jari_jari:0,
        luas:0
      };
    }
  
    render() {
      const { navigation } = this.props
      return (  
        <View>
  
          <View>
             <Text style = {{padding: 10, fontSize: 16, color: 'black', textAlign:'center'}} >
              Menghitung Luas Lingkaran
            </Text>
           </View>
          
          <View>
              <TextInput style = {{height: 40}}
                placeholder="Input Jari Jari"
                onChangeText={(jari_jari)=>this.setState({jari_jari})}
                keyboardType = 'numeric'
              />
              <View style={{margin:15}}>
              <Button
                onPress={()=>this.setState({
                  luas: (3.14*this.state.jari_jari*this.state.jari_jari)
                })}
                title="Hitung"
                accessibilityLabel="HITUNG"
              />
              </View>
              <View style={{margin:15}}>
              <Button title="Kembali" onPress={ () => navigation.replace('Home')}/>
              </View>
         </View>
  
        <View>
           <Text style = {{padding: 10, fontSize: 20}} >
               Jari-Jari =  {this.state.jari_jari} {"\n"}
               Luas Lingkaran = {this.state.luas}
           </Text>
        </View>       
     </View>   
      );
    }
}

const styles = StyleSheet.create({})