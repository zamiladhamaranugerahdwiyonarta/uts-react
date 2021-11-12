import React, { Component } from 'react'
import {StyleSheet, Button, Text, TextInput, View } from 'react-native'

export default class Grade extends Component {
    constructor(props){
      super(props)
      this.state = {
        n1:0,
        n2:0,
        n3:0,
        na:0,
        grade:''
      };
    }

    tampilGrade=()=>{
      if(this.state.na >= 90){
        this.setState({grade:'A'})
      }
      else if (this.state.na >= 70){
        this.setState({grade:'B'})
      }
      else if (this.state.na >= 60){
        this.setState({grade:'C'})
      }
      else if (this.state.na >= 50){
       this.setState({grade:'D'})
      }
      else {
        this.setState({grade:'E'})
      }
    }
  
    render() {
      const { navigation } = this.props
      var int1 = parseFloat(this.state.n1);
      var int2 = parseFloat(this.state.n2);
      var int3 = parseFloat(this.state.n3);
      return (  
        <View>
  
          <View>
             <Text style = {{padding: 10, fontSize: 20, color: 'black', textAlign:'center'}} >
              Menghitung Grade Nilai
            </Text>
           </View>
          
          <View>
              <TextInput style = {{height: 30}}
                placeholder="Input Nilai ke 1"
                onChangeText={(n1)=>this.setState({n1})}
                keyboardType = 'numeric'
              />
              <TextInput style = {{height: 30}}
                placeholder="Input Nilai ke 2"
                onChangeText={(n2)=>this.setState({n2})}
                keyboardType = 'numeric'
              />
              <TextInput style = {{height: 30}}
                placeholder="Input Nilai ke 3"
                onChangeText={(n3)=>this.setState({n3})}
                keyboardType = 'numeric'
              />
              <View style={{margin:10}}>
              <Button
                onPress={()=>this.setState({
                  na: (int1+int2+int3)/3
                })}
                title="Hitung Nilai Akhir"
                accessibilityLabel="HITUNG NILAI AKHIR"               
              />
              </View>
              <View style={{margin:10}}>
              <Button
              onPress={this.tampilGrade}
              title="Lihat Grade"
              accessibilityLabel="LIHAT GRADE"               
              />
              </View>
              <View style={{margin:10}}>
              <Button title="Kembali" onPress={ () => navigation.replace('Home')}/>
              </View>
         </View>
  
        <View>
           <Text style = {{padding: 10, fontSize: 20}} >
               Nilai ke 1   =  {this.state.n1} {"\n"}
               Nilai ke 2   =  {this.state.n2} {"\n"}
               Nilai ke 3   =  {this.state.n3} {"\n"}
               TOTAL  =  {this.state.na} {"\n"}
               Grade = {this.state.grade}
           </Text>
        </View>       
     </View>   
      );
    }
}

const styles = StyleSheet.create({})