import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'

export default function LogoScreen({navigation}) {
  return (
    <SafeAreaView>
        <TouchableOpacity onPress={() => navigation.navigate('DocumentScreen')}>
            <View style={styles.container}>
             <Text style={styles.title}>Documents App</Text>
            </View>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontWeight: '900',
        color: 'red',
        fontSize: 30
    }
})