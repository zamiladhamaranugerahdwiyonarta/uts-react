import React, { Component } from 'react'
import {StyleSheet, Button, Text, TextInput, View } from 'react-native'

export default class LuasSegitiga extends Component {
    constructor(props){
      super(props)
      this.state = {
        luas:0,
        sisi:0
      };
    }
  
    render() {
      const { navigation } = this.props
      return (  
        <View>
  
          <View>
             <Text style = {{padding: 10, fontSize: 16, color: 'black', textAlign:'center'}} >
              Menghitung Luas Persegi
            </Text>
           </View>
          
          <View>
              <TextInput style = {{height: 40}}
                keyboardType = 'numeric'
                onChangeText={(sisi)=>this.setState({sisi})}
                placeholder="Input Sisi"
              />
              <View style={{margin:15}}>
              <Button
                onPress={()=>this.setState({
                  luas: (this.state.sisi*this.state.sisi)
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
               Sisi =  {this.state.sisi} {"\n"}
               Luas = {this.state.luas}
           </Text>
        </View>       
     </View>   
      );
    }
}

const styles = StyleSheet.create({})