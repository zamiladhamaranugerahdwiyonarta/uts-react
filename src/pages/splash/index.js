import React, { Component } from 'react'
import { Text, StyleSheet, View , Image} from 'react-native'

export default class Splash extends Component {

    componentDidMount(){
        setTimeout(()=>{
            this.props.navigation.replace('Home')
        }, 3000)
    }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image source={require('../../gambar/asd.png')}/>
          </View>
        )
    }
}

const styles = StyleSheet.create({})
