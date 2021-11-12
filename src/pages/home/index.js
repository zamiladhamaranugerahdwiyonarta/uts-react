import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

export default class Home extends Component {
    render() {
        const { navigation } = this.props
        return (
            <View style={{ flex: 1}}>
          
                <Button title="Luas Segitiga" onPress={ () => navigation.replace('Segitiga')}/>
                <Button title="Luas Persegi" onPress={ () => navigation.replace('Persegi')}/>


                <Button title="Grade" onPress={ () => navigation.replace('Grade')}/>

                <Button title="Luas Lingkaran" onPress={ () => navigation.replace('Lingkaran')}/>



            </View>
        )
    }
}

const styles = StyleSheet.create({})